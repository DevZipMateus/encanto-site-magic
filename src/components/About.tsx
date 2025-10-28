import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-6">
            Nossa história
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Mais de 20 anos dedicados à excelência na moda
          </p>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg mb-12 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Começamos com a fabricação de moda íntima desde o ano de 2005 com poucos recursos, tanto financeiros quanto de equipamentos. Desde então, estamos inovando a cada dia, expandindo nossa linha para atender as necessidades de nossos clientes.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Hoje, atuamos no mercado com fabricação de fardamento escolar e lojista, moda fitness, moda praia e moda íntima. Utilizamos materiais de alto desempenho para mais durabilidade e liberdade nos movimentos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow animate-fade-in">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Missão</h3>
              <p className="text-foreground leading-relaxed">
                Inspirar confiança, bem-estar e autoestima através da moda fitness, oferecendo produtos de alta qualidade, conforto e estilo. Promovemos um estilo de vida ativo e saudável, valorizando a beleza e o encanto de cada pessoa.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Visão</h3>
              <p className="text-foreground leading-relaxed">
                Ser referência em qualidade para tornar a atividade física ainda mais prazerosa, proporcionando produtos que combinam estilo, conforto e performance.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Valores</h3>
              <p className="text-foreground leading-relaxed">
                Qualidade, durabilidade e liberdade de movimento. Utilizamos materiais de alto desempenho e estamos em constante inovação para atender melhor nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
