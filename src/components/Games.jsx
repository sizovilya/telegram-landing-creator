
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from 'embla-carousel-autoplay';
import { useTranslation } from "react-i18next";

const gameCovers = [
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co6ene.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co92du.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co7j43.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co8ok7.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co49wj.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wzo.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co89n1.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co5r6t.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co2xlq.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co5cxf.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co84ii.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co6qlk.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co9f4v.jpg",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co7dfn.jpg",
].slice(0, window.innerWidth < 768 ? 12 : 14);

const gameCategories = [
  {
    name: "Шутеры",
    games: [
      "Call of Duty: Warzone",
      "Counter-Strike 2 (CS2)",
      "Rainbow Six Siege",
      "Valorant",
      "Apex Legends",
      "Escape from Tarkov",
      "PUBG: Battlegrounds",
      "Battlefield 2042",
      "Overwatch 2"
    ]
  },
  {
    name: "MOBA",
    games: [
      "Dota 2",
      "League of Legends",
      "Smite",
      "Mobile Legends: Bang Bang"
    ]
  },
  {
    name: "Выживание",
    games: [
      "Rust",
      "ARK: Survival Evolved",
      "DayZ",
      "Minecraft",
      "Terraria"
    ]
  },
  {
    name: "Королевские битвы",
    games: [
      "Fortnite",
      "Fall Guys",
      "Naraka: Bladepoint"
    ]
  },
  {
    name: "MMORPG",
    games: [
      "World of Warcraft",
      "Final Fantasy XIV",
      "The Elder Scrolls Online",
      "Guild Wars 2",
      "Lost Ark",
      "Black Desert Online"
    ]
  },
  {
    name: "Спортивные",
    games: [
      "EA FC",
      "Rocket League",
      "NBA 2K",
      "Gran Turismo 7",
      "Forza Horizon 5"
    ]
  },
  {
    name: "Кооперативные",
    games: [
      "Left 4 Dead 2",
      "Deep Rock Galactic",
      "Destiny 2",
      "Warframe",
      "Payday 3",
      "Phasmophobia",
      "Helldivers 2"
    ]
  },
  {
    name: "Файтинги",
    games: [
      "Street Fighter 6",
      "Mortal Kombat 1",
      "Tekken 8",
      "Super Smash Bros. Ultimate"
    ]
  },
  {
    name: "Другие",
    games: [
      "GTA Online",
      "Red Dead Online",
      "Sea of Thieves",
      "Dead by Daylight",
      "The Division 2",
      "Monster Hunter: World"
    ]
  }
];

export const Games = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-secondary">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover">
            {t('games.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('games.subtitle')}
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {gameCovers.map((cover, index) => (
                <CarouselItem key={cover} className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/4">
                  <div 
                    className={cn(
                      "group rounded-lg overflow-hidden relative",
                      "transition-all duration-300 transform hover:-translate-y-1",
                      "animate-fade-up",
                      "aspect-[3/4]"
                    )}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <img 
                      src={cover}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t('games.hoverText')}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
