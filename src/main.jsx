
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';

// Этот файл используется только в режиме разработки
// В продакшене используется entry-client.jsx для гидратации

const rootElement = document.getElementById("root");

if (rootElement) {
  // Удаляем любые уже существующие дочерние элементы
  while (rootElement.firstChild) {
    rootElement.removeChild(rootElement.firstChild);
  }
  
  // Создаем новый корневой элемент и рендерим приложение
  const root = createRoot(rootElement);
  root.render(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );
}
