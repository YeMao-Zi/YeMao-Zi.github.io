const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * 递归获取目录下所有文件
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else if (file.endsWith('.md')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

/**
 * 从 markdown 文件中提取 frontmatter
 */
function extractFrontMatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*/;
    const match = content.match(frontmatterRegex);
    
    if (match && match[1]) {
      return yaml.load(match[1]);
    }
    return null;
  } catch (error) {
    console.error(`解析文件出错: ${filePath}`, error.message);
    return null;
  }
}

/**
 * 检查 permalink 重复
 */
function checkPermalinkDuplicates() {
  const docsDir = path.join(__dirname, '..', 'docs');
  const files = getAllFiles(docsDir);
  
  const permalinkMap = new Map(); // permalink => [file1, file2, ...]
  let totalCount = 0;
  
  console.log('正在检查 docs 目录中的所有文章...\n');
  
  files.forEach(file => {
    const frontmatter = extractFrontMatter(file);
    if (frontmatter && frontmatter.permalink) {
      totalCount++;
      const permalink = frontmatter.permalink;
      
      if (permalinkMap.has(permalink)) {
        permalinkMap.get(permalink).push(file);
      } else {
        permalinkMap.set(permalink, [file]);
      }
    }
  });
  
  // 查找重复项
  const duplicates = [];
  for (const [permalink, files] of permalinkMap.entries()) {
    if (files.length > 1) {
      duplicates.push({
        permalink: permalink,
        files: files
      });
    }
  }
  
  // 输出结果
  console.log(`总共检查了 ${totalCount} 个包含 permalink 的文章\n`);
  
  if (duplicates.length > 0) {
    console.log('发现重复的 permalink:');
    console.log('=====================================');
    duplicates.forEach(({ permalink, files }, index) => {
      console.log(`${index + 1}. permalink: ${permalink}`);
      files.forEach(file => {
        console.log(`   - ${path.relative(process.cwd(), file)}`);
      });
      console.log('');
    });
  } else {
    console.log('✅ 没有发现重复的 permalink!');
  }
  
  // 显示统计信息
  console.log('\n统计信息:');
  console.log(`- 总文章数: ${files.length}`);
  console.log(`- 包含 permalink 的文章数: ${totalCount}`);
  console.log(`- 不同的 permalink 数量: ${permalinkMap.size}`);
  console.log(`- 重复的 permalink 组数: ${duplicates.length}`);
}

// 执行检查
checkPermalinkDuplicates();

module.exports = checkPermalinkDuplicates;