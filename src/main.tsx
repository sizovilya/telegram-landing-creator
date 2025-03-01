
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (rootElement) {
  // Check if the app was server-rendered
  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, <App />);
  } else {
    createRoot(rootElement).render(<App />);
  }
}
