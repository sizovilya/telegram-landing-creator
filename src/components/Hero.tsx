
import { ArrowRight, GamepadIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-[#1A1F2C] relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80')] bg-cover bg-center opacity-10" />
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#E5DEFF]/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up">
            <GamepadIcon className="h-8 w-8 text-primary animate-bounce" />
            <span className="inline-block px-6 py-2 text-xl font-bold rounded-full bg-gradient-to-r from-primary/10 to-primary-hover/10 text-primary backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer">
              Gamepals
            </span>
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Игровые друзья <br className="hidden sm:block" />
              всегда рядом
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              CS2, Dota 2, Fortnite, PUBG и другие популярные игры. 
              Находи напарников для любимых игр прямо в Telegram!
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-fade-up shadow-lg hover:shadow-xl transition-all duration-300" style={{ animationDelay: '400ms' }}>
            <p className="text-sm md:text-base text-gray-300">
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
              className="group bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-white border-white/20" 
              onClick={() => window.open("https://t.me/your_channel", "_blank")}
            >
              Игровой канал
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Популярные игры */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-up max-w-3xl mx-auto" style={{ animationDelay: '800ms' }}>
            {['CS2', 'Dota 2', 'Fortnite', 'PUBG'].map((game, index) => (
              <div 
                key={game}
                className="aspect-video rounded-lg overflow-hidden relative group cursor-pointer"
                style={{
                  backgroundImage: `url(/placeholder.svg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-sm md:text-base">{game}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
