
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Games } from "@/components/Games";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Navbar } from "@/components/Navbar";
import { SEOHelmet } from "@/components/SEOHelmet";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet />
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
