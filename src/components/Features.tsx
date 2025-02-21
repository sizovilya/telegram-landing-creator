
import { MessageSquare, Users, Gamepad, Bell } from "lucide-react";

const features = [
  {
    icon: Gamepad,
    title: "Любые игры",
    description: "CS2, Dota 2, Fortnite, PUBG и многие другие. Находи напарников для любой игры"
  },
  {
    icon: MessageSquare,
    title: "Простой Telegram бот",
    description: "Создавай пост через бота и получай уведомления о новых напарниках прямо в Telegram"
  },
  {
    icon: Users,
    title: "Активное комьюнити",
    description: "Тысячи геймеров уже нашли своих идеальных тиммейтов через Gamepals в Telegram"
  },
  {
    icon: Bell,
    title: "Умные уведомления",
    description: "Бот следит за новыми откликами и сразу сообщает о потенциальных напарниках"
  }
];

export const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-secondary">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover">
            Создан для геймеров
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gamepals - Telegram бот, который помогает найти идеальных напарников для твоих любимых игр
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl p-3 inline-block mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
