
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import "./i18n/config"; // Import i18next configuration
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
