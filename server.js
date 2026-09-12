import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Serve static assets
app.use(express.static(__dirname));
const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir));

// API: Firebase config endpoint
app.get('/api/firebase-config', (req, res) => {
  try {
    const filePath = path.join(__dirname, 'firebase-applet-config.json');
    res.sendFile(filePath);
  } catch (err) {
    res.status(404).json({ error: 'Firebase config unavailable' });
  }
});

// Fallback to index.html for any SPA routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
