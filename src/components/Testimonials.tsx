
const testimonials = [
  {
    name: "Александр П.",
    role: "Менеджер проектов",
    content: "Это приложение значительно упростило нашу работу с клиентами. Теперь все коммуникации происходят в одном месте."
  },
  {
    name: "Елена С.",
    role: "Предприниматель",
    content: "Удобный интерфейс и быстрая работа. Именно то, что нужно для современного бизнеса."
  },
  {
    name: "Дмитрий К.",
    role: "Разработчик",
    content: "Отличная интеграция с Telegram API. Работает именно так, как и должно работать."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Отзывы пользователей
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят о нас те, кто уже использует наше приложение
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-lg mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
