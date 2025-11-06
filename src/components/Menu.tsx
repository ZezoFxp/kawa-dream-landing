import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import latteImage from "@/assets/coffee-latte.jpg";
import matchaImage from "@/assets/coffee-matcha.jpg";
import pastryImage from "@/assets/coffee-pastry.jpg";

const menuItems = [
  {
    id: 1,
    name: "Café Latte Artesanal",
    description: "Café expresso suave com leite vaporizado e arte delicada",
    price: "R$ 18,00",
    image: latteImage,
  },
  {
    id: 2,
    name: "Matcha Premium",
    description: "Chá verde japonês tradicional preparado na cerimônia",
    price: "R$ 22,00",
    image: matchaImage,
  },
  {
    id: 3,
    name: "Doces Japoneses",
    description: "Seleção de mochi, dorayaki e outros doces tradicionais",
    price: "R$ 16,00",
    image: pastryImage,
  },
  {
    id: 4,
    name: "Cappuccino Japonês",
    description: "Cappuccino cremoso com toque de sakura e espuma aveludada",
    price: "R$ 20,00",
    image: latteImage,
  },
  {
    id: 5,
    name: "Hojicha Latte",
    description: "Chá verde torrado com leite cremoso e aroma defumado",
    price: "R$ 19,00",
    image: matchaImage,
  },
  {
    id: 6,
    name: "Taiyaki",
    description: "Waffle japonês em forma de peixe recheado com doce de feijão",
    price: "R$ 14,00",
    image: pastryImage,
  },
];

const Menu = () => {
  return (
    <section id="cardapio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nosso Cardápio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiências autênticas que combinam tradição japonesa com a arte do café
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {menuItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 border-border/50">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif font-semibold mb-2">{item.name}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <p className="text-2xl font-semibold text-primary">{item.price}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Menu;
