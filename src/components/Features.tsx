
import { MessageSquare, Users, Gamepad, Bell } from "lucide-react";
import { useTranslation } from "react-i18next";

const features = [
  {
    icon: Gamepad,
    translationKey: "anyGames"
  },
  {
    icon: MessageSquare,
    translationKey: "telegramBot"
  },
  {
    icon: Users,
    translationKey: "community"
  },
  {
    icon: Bell,
    translationKey: "notifications"
  }
];

export const Features = () => {
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
            {t('features.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
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
              <h3 className="text-xl font-semibold mb-2">
                {t(`features.items.${feature.translationKey}.title`)}
              </h3>
              <p className="text-muted-foreground">
                {t(`features.items.${feature.translationKey}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
