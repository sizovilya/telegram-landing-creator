
import { ArrowRight, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  
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

  // Функция для открытия внешних ссылок
  const openExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 grid grid-cols-4 gap-4 p-8">
          {gameCovers.map((cover, index) => (
            <div
              key={`${cover}-${index}`}
              className="relative aspect-[3/4] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <img 
                src={cover} 
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#E5DEFF]/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up">
            <span className="inline-block px-8 py-3 text-2xl font-bold rounded-full bg-gradient-to-r from-primary to-primary-hover text-white shadow-lg hover:shadow-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer">
              Gamepals
            </span>
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                <span className="animate-gradient-text bg-gradient-to-r from-primary via-purple-500 to-primary-hover bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-fade-up shadow-lg hover:shadow-xl transition-all duration-300" style={{ animationDelay: '400ms' }}>
            <p className="text-sm md:text-base text-gray-600">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '600ms' }}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-all duration-300 flex items-center gap-2 text-white" 
              onClick={() => openExternalLink("https://t.me/your_bot_username")}
            >
              <Send className="h-5 w-5" />
              {t('hero.openBotButton')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"  
              className="group bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-all duration-300 flex items-center gap-2 text-white" 
              onClick={() => openExternalLink("https://t.me/your_channel")}
            >
              <Send className="h-5 w-5" />
              {t('hero.channelButton')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes gradient-text {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-gradient-text {
            background-size: 200% auto;
            animation: gradient-text 3s ease infinite;
          }
        `}
      </style>
    </section>
  );
};
