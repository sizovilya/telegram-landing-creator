
import { Button } from "./ui/button";
import { GamepadIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <GamepadIcon className="h-6 w-6 text-primary group-hover:text-primary-hover transition-colors" />
              <span className="text-xl font-semibold text-primary group-hover:text-primary-hover transition-colors">
                Gamepals
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/blog" className="text-slate-600 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/posts" className="text-slate-600 hover:text-primary transition-colors">
              Posts
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="outline"
              size="sm"
              className="hidden md:flex"
              onClick={() => window.open("https://t.me/your_channel", "_blank")}
            >
              Канал
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-primary to-primary-hover hover:opacity-90"
              onClick={() => window.open("https://t.me/your_bot_username", "_blank")}
            >
              Открыть бота
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
