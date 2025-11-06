import { Button } from "./ui/button";
import heroImage from "@/assets/hero-cafe.jpg";
import { useState } from "react";
import SuggestionDialog from "./SuggestionDialog";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Bem-vindo ao KawaCoffee
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Experimente a autêntica cultura do café japonês
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
            onClick={() => {
              const element = document.getElementById("cardapio");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver Cardápio
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 hover:bg-secondary"
            onClick={() => setIsDialogOpen(true)}
          >
            Deixar Sugestão
          </Button>
        </div>
      </div>

      <SuggestionDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};

export default Hero;
