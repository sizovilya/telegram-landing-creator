
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Games } from "@/components/Games";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Games />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;
