import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Store, Sparkles, ShoppingBag } from "lucide-react";

const VitrineShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo - Conteúdo */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Novidade</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Explore Nossa Vitrine Virtual
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Descubra todos os nossos produtos disponíveis em tempo real! Nossa vitrine virtual oferece uma experiência completa de compra com preços atualizados, promoções exclusivas e toda a variedade da Encanto Store.
            </p>

            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-primary/10">
                  <Store className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Catálogo Completo</p>
                  <p className="text-sm">Todos os produtos organizados por categoria</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-primary/10">
                  <ShoppingBag className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Preços Atualizados</p>
                  <p className="text-sm">Valores e promoções sempre em dia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-primary/10">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Novidades Diárias</p>
                  <p className="text-sm">Novos produtos adicionados regularmente</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="group hover-scale shadow-lg"
                onClick={() => navigate("/vitrine")}
              >
                <Store className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Ver Vitrine Completa
              </Button>
            </div>
          </div>

          {/* Lado Direito - Visual */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl opacity-50" />
            <div className="relative bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Store className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Vitrine Online</h3>
                      <p className="text-sm text-muted-foreground">Sempre atualizada</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Moda Fitness", items: "150+ produtos" },
                    { name: "Moda Praia", items: "80+ produtos" },
                    { name: "Moda Íntima", items: "120+ produtos" }
                  ].map((category, index) => (
                    <div 
                      key={category.name}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{category.items}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    🎉 Promoções exclusivas disponíveis agora!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineShowcase;
