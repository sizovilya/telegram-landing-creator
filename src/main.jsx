
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById("root");

if (rootElement) {
  // Удаляем любые уже существующие дочерние элементы
  // Это может помочь предотвратить проблемы с гидрацией
  while (rootElement.firstChild) {
    rootElement.removeChild(rootElement.firstChild);
  }
  
  // Создаем новый корневой элемент и рендерим приложение
  const root = createRoot(rootElement);
  root.render(<App />);
}
