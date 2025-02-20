
import { MessageSquare, Users, Globe, Smartphone } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Мгновенные сообщения",
    description: "Общайтесь с пользователями в реальном времени через знакомый интерфейс Telegram"
  },
  {
    icon: Users,
    title: "Групповой доступ",
    description: "Работайте вместе с командой и делитесь важной информацией"
  },
  {
    icon: Globe,
    title: "Доступно везде",
    description: "Используйте приложение на любом устройстве через Telegram"
  },
  {
    icon: Smartphone,
    title: "Нативная интеграция",
    description: "Полностью интегрировано в экосистему Telegram"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему именно мы?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наше приложение предоставляет множество преимуществ для эффективной работы в Telegram
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
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
