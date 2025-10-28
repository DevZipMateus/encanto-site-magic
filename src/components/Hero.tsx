import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("produtos");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mulher confiante praticando exercícios ao ar livre com roupas fitness Encanto store"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Encanto store
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground mb-8 leading-relaxed">
            Inspirando confiança, bem-estar e autoestima através da moda fitness de alta qualidade
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Energia, atitude e estilo em cada look
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              Conheça nossos produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://wa.me/5575982115464", "_blank")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Fale conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
