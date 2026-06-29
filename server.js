import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from root
app.use(express.static(__dirname));

// Direct routes for clean URLs (e.g. /login instead of /login.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const pages = ['login', 'register', 'dashboard', 'assessment', 'results'];
pages.forEach(page => {
  app.get(`/${page}`, (req, res) => {
    res.sendFile(path.join(__dirname, `${page}.html`));
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`LearnDNA Server running on http://localhost:${PORT}`);
});
