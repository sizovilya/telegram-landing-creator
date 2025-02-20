
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Telegram Web App
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Ваше приложение теперь в Telegram
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите доступ к новым возможностям прямо в вашем любимом мессенджере. Быстро, удобно и эффективно.
          </p>
          <Button size="lg" className="group">
            Начать использовать
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
