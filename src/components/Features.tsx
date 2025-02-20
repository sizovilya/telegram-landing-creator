
import { MessageSquare, Users, Gamepad, Bell } from "lucide-react";

const features = [
  {
    icon: Gamepad,
    title: "Все популярные игры",
    description: "CS2, Dota 2, Fortnite, PUBG и многие другие. Выбирай любимую игру и находи команду"
  },
  {
    icon: MessageSquare,
    title: "Быстрые отклики",
    description: "Создавай пост и получай уведомления о новых откликах прямо в Telegram"
  },
  {
    icon: Users,
    title: "Большое комьюнити",
    description: "Тысячи игроков уже используют бота для поиска напарников"
  },
  {
    icon: Bell,
    title: "Умные уведомления",
    description: "Бот автоматически следит за комментариями и сообщает о новых откликах"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      <div className="container px-4 relative">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Создан для геймеров
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Простой и удобный способ найти тиммейтов для любимых игр
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
