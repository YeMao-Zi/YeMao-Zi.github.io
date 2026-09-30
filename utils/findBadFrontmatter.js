/**
 * 批量检查 docs 目录下所有 .md 文件的 frontmatter 是否能被 gray-matter 正确解析。
 * 找出有问题的文件以便修复。
 */
const fs = require('fs');
const path = require('path');
const matter = require('../node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter');

const docsDir = path.join(__dirname, '..', 'docs');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...walk(full));
    } else if (e.isFile() && /\.md$/.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(docsDir);
const broken = [];

for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  try {
    matter(raw);
  } catch (err) {
    broken.push({ file, message: err.message, name: err.name });
  }
}

console.log(`共 ${files.length} 个文件，问题文件 ${broken.length} 个：`);
for (const b of broken) {
  console.log('---');
  console.log(b.file);
  console.log(b.message);
}