import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.copyFileSync(path.resolve('index.html'), path.join(distDir, 'index.html'));
console.log('Build completed successfully: index.html copied to dist/');
