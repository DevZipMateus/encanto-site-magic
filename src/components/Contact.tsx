import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-6">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Estamos prontos para atender você
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Telefone</h3>
                    <a
                      href="https://wa.me/5575982115464"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      (75) 98211-5464
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">E-mail</h3>
                    <a
                      href="mailto:encanto.store36@gmail.com"
                      className="text-foreground hover:text-primary transition-colors break-all"
                    >
                      encanto.store36@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Endereço</h3>
                    <p className="text-foreground">
                      Povoado de Jiboia N°92<br />
                      Zona Rural<br />
                      Retirolândia - BA
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Horário de funcionamento</h3>
                    <p className="text-foreground">
                      Segunda a sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="flex flex-col justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-primary rounded-2xl p-8 md:p-10 text-center shadow-xl">
                <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                  Fale conosco agora
                </h3>
                <p className="text-primary-foreground/90 text-lg mb-8">
                  Tire suas dúvidas, faça seu pedido ou conheça mais sobre nossos produtos através do WhatsApp.
                </p>
                <Button
                  size="lg"
                  onClick={() => window.open("https://wa.me/5575982115464", "_blank")}
                  className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6 w-full"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp
                </Button>

                <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                  <p className="text-primary-foreground/90 mb-4">Siga-nos nas redes sociais</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://instagram.com/encantostoreoficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Instagram Encanto store"
                    >
                      <Instagram className="h-6 w-6 text-primary-foreground" />
                    </a>
                    <a
                      href="https://facebook.com/jairlenemaria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Facebook Encanto store"
                    >
                      <Facebook className="h-6 w-6 text-primary-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
