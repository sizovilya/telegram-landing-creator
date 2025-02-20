
import { Button } from "./ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path/to/gaming-pattern.png')] opacity-5" />
      <div className="container px-4 text-center relative">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готов найти тиммейтов?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Присоединяйся к тысячам игроков, которые уже нашли своих идеальных напарников
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-primary hover:bg-white/90"
              onClick={() => window.open("https://t.me/your_bot_username", "_blank")}
            >
              Начать поиск
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-white text-white hover:bg-white/10"
              onClick={() => window.open("https://t.me/support_chat", "_blank")}
            >
              Техподдержка
              <MessageSquare className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
