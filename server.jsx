
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './src/App.jsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Обслуживание статических файлов
app.use(express.static(path.resolve(__dirname, 'dist/client')));

app.get('*', (req, res) => {
  const helmetContext = {};
  
  // Рендерим приложение в строку
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  // Читаем шаблон HTML
  let template = fs.readFileSync(
    path.resolve(__dirname, 'dist/client/index.html'),
    'utf-8'
  );

  // Вставляем HTML приложения в шаблон
  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Отправляем итоговый HTML
  res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
});

// Запускаем сервер
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
