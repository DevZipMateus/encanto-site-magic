import fitnessWear from "@/assets/fitness-wear.jpg";
import beachwear from "@/assets/beachwear.jpg";
import intimateWear from "@/assets/intimate-wear.jpg";
import { Dumbbell, Waves, Heart } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Moda fitness",
      description:
        "Roupas esportivas de alto desempenho, desenvolvidas para proporcionar máxima liberdade de movimento, conforto e estilo durante seus treinos e atividades físicas.",
      image: fitnessWear,
      icon: Dumbbell,
      delay: "0s",
    },
    {
      title: "Moda praia",
      description:
        "Coleção de beachwear elegante e sofisticada, perfeita para você se sentir confiante e linda em todos os momentos à beira-mar.",
      image: beachwear,
      icon: Waves,
      delay: "0.1s",
    },
    {
      title: "Moda íntima",
      description:
        "Lingerie premium com foco em conforto, qualidade e delicadeza. Peças que valorizam sua beleza natural com sofisticação e elegância.",
      image: intimateWear,
      icon: Heart,
      delay: "0.2s",
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-6">
            Nossos produtos
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Qualidade, estilo e conforto em cada peça
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: product.delay }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={`Coleção de ${product.title} Encanto store`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-background rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-3">{product.title}</h3>
                    <p className="text-foreground leading-relaxed">{product.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-muted/30 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Materiais de alto desempenho
            </h3>
            <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              Todas as nossas peças são confeccionadas com materiais cuidadosamente selecionados, garantindo durabilidade, respirabilidade e máxima liberdade de movimento. Investimos em tecnologia e inovação para oferecer o melhor em cada produto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
