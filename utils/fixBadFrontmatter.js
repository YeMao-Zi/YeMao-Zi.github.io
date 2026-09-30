/**
 * 修复 docs/_posts/需求/ 下 frontmatter 把 "  - author:" 错误放在 tags 列表里的文件。
 * 正确结构:
 *   tags:
 *     -
 *   author:
 *     name: 夜猫子
 *     link: https://github.com/yemao-zi
 *   titleTag:
 */
const fs = require('fs');
const path = require('path');
const matter = require('../node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter');

const files = [
  'docs/_posts/需求/入驻原型.md',
  'docs/_posts/需求/商品详情接口改造.md',
  'docs/_posts/需求/多件折加购功能.md',
  'docs/_posts/需求/店铺入驻需求.md',
  'docs/_posts/需求/店铺收款信息变更审核.md',
  'docs/_posts/需求/店铺首页接口.md',
].map(p => path.join(__dirname, '..', p));

const BAD = '  - author: \n  name: 夜猫子\n  link: https://github.com/yemao-zi';
const GOOD = '  - \nauthor: \n  name: 夜猫子\n  link: https://github.com/yemao-zi';

for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  if (!raw.includes(BAD)) {
    console.log('SKIP (pattern not found):', file);
    continue;
  }
  const fixed = raw.replace(BAD, GOOD);
  // 验证 frontmatter 可解析
  try {
    matter(fixed);
  } catch (e) {
    console.log('STILL BROKEN:', file);
    console.log(e.message);
    continue;
  }
  fs.writeFileSync(file, fixed);
  console.log('FIXED:', file);
}