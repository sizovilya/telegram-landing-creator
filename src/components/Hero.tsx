
import { ArrowRight, Send, GamepadIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const gameCovers = [
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6ene.jpg",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co92du.jpg",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co7j43.jpg",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co8ok7.jpg",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co49wj.jpg",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wzo.jpg",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co89n1.jpg",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5r6t.jpg",
  ];

  // Создаем несколько копий массива для большего количества картинок
  const extendedGameCovers = [...gameCovers, ...gameCovers, ...gameCovers];

  // Разделим экран на колонки для предотвращения пересечений
  const columns = 8; // Количество колонок
  const columnWidth = 100 / columns;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* Анимированные обложки игр */}
      <div className="absolute inset-0 overflow-hidden">
        {extendedGameCovers.map((cover, index) => {
          const column = index % columns;
          const delay = Math.random() * 5; // Уменьшили задержку для большего количества картинок в начале
          const duration = Math.random() * (15 - 10) + 10;
          const startPosition = column * columnWidth + Math.random() * (columnWidth * 0.8); // Случайная позиция внутри колонки
          
          return (
            <div
              key={`${cover}-${index}`}
              className="absolute"
              style={{
                left: `${startPosition}%`,
                animation: `fall ${duration}s linear ${delay}s infinite`,
                width: 'clamp(60px, 8vw, 100px)', // Адаптивный размер
                height: 'clamp(84px, 11.2vw, 140px)', // Сохраняем пропорции 1:1.4
                opacity: 0.25, // Увеличили непрозрачность
                filter: 'blur(1px)',
                transform: 'translateY(-140px)',
              }}
            >
              <img 
                src={cover} 
                alt=""
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Игровые друзья <br className="hidden sm:block" />
              всегда рядом
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              CS2, Dota 2, Fortnite, PUBG и другие популярные игры. 
              Находи напарников для любимых игр прямо в Telegram!
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-fade-up shadow-lg hover:shadow-xl transition-all duration-300" style={{ animationDelay: '400ms' }}>
            <p className="text-sm md:text-base text-gray-600">
              Gamepals - это Telegram бот для поиска напарников. Просто напиши боту, создай пост о поиске тиммейтов, 
              и получай уведомления когда кто-то захочет присоединиться к игре!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '600ms' }}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-all duration-300 flex items-center gap-2" 
              onClick={() => window.open("https://t.me/your_bot_username", "_blank")}
            >
              <Send className="h-5 w-5" />
              Открыть бота в Telegram
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-primary border-primary/20 flex items-center gap-2" 
              onClick={() => window.open("https://t.me/your_channel", "_blank")}
            >
              <Send className="h-5 w-5" />
              Игровой канал
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-140px);
              opacity: 0;
            }
            10% {
              opacity: 0.25;
            }
            90% {
              opacity: 0.25;
            }
            100% {
              transform: translateY(100vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </section>
  );
};
