
import { ArrowRight, GamepadIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-secondary to-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <GamepadIcon className="h-6 w-6 text-primary" />
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary">
              GameMate Bot
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover">
            Найди напарника для любимой игры
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            CS2, Dota 2, Fortnite, PUBG и другие популярные игры. 
            Создавай посты и находи тиммейтов прямо в Telegram за считанные минуты!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" onClick={() => window.open("https://t.me/your_bot_username", "_blank")}>
              Открыть бота
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group" onClick={() => window.open("https://t.me/your_channel", "_blank")}>
              Игровой канал
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
