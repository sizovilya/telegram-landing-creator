
import { ArrowRight, GamepadIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-secondary to-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-8">
            <GamepadIcon className="h-8 w-8 text-primary animate-bounce" />
            <span className="inline-block px-6 py-2 text-xl font-bold rounded-full bg-primary/10 text-primary hover:scale-105 transition-transform duration-300 cursor-pointer">
              Gamepals
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover animate-fade-in hover:scale-105 transition-transform duration-300">
            Игровые друзья всегда рядом
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in hover:text-primary transition-colors duration-300">
            CS2, Dota 2, Fortnite, PUBG и другие популярные игры. 
            Находи напарников для любимых игр прямо в Telegram!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-transform duration-300" 
              onClick={() => window.open("https://t.me/your_bot_username", "_blank")}
            >
              Найти напарника
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group hover:scale-105 transition-transform duration-300" 
              onClick={() => window.open("https://t.me/your_channel", "_blank")}
            >
              Игровой канал
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
