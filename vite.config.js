
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Конфигурация для SSR
  build: {
    ssr: true,
    outDir: mode === 'production' ? 'dist/client' : 'dist',
    rollupOptions: {
      input: mode === 'production' 
        ? {
            app: path.resolve(__dirname, 'index.html'),
            client: path.resolve(__dirname, 'src/entry-client.jsx')
          }
        : {
            app: path.resolve(__dirname, 'index.html'),
          },
      output: {
        // Для того, чтобы избежать проблем с именованием файлов
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    },
  },
}));
