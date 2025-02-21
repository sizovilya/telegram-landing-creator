
import { ArrowRight, GamepadIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-[#F8F9FA] to-white relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up">
            <GamepadIcon className="h-8 w-8 text-primary animate-bounce" />
            <span className="inline-block px-6 py-2 text-xl font-bold rounded-full bg-gradient-to-r from-primary/10 to-primary/20 text-primary backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer">
              Gamepals
            </span>
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-hover to-primary">
              Игровые друзья <br className="hidden sm:block" />
              всегда рядом
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              CS2, Dota 2, Fortnite, PUBG и другие популярные игры. 
              Находи напарников для любимых игр прямо в Telegram!
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-fade-up shadow-lg hover:shadow-xl transition-all duration-300" style={{ animationDelay: '400ms' }}>
            <p className="text-sm md:text-base text-muted-foreground">
              Gamepals - это Telegram бот для поиска напарников. Просто напиши боту, создай пост о поиске тиммейтов, 
              и получай уведомления когда кто-то захочет присоединиться к игре!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '600ms' }}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-all duration-300" 
              onClick={() => window.open("https://t.me/your_bot_username", "_blank")}
            >
              Открыть бота в Telegram
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300" 
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
