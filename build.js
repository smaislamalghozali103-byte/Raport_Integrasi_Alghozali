import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.copyFileSync(path.resolve('index.html'), path.join(distDir, 'index.html'));

if (fs.existsSync(path.resolve('firebase-init.js'))) {
  fs.copyFileSync(path.resolve('firebase-init.js'), path.join(distDir, 'firebase-init.js'));
}
if (fs.existsSync(path.resolve('firebase-applet-config.json'))) {
  fs.copyFileSync(path.resolve('firebase-applet-config.json'), path.join(distDir, 'firebase-applet-config.json'));
}
console.log('Build completed successfully: assets copied to dist/');
