
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам пользователей, которые уже оценили удобство нашего приложения
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="group bg-white text-primary hover:bg-white/90"
          >
            Установить приложение
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
