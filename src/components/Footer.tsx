import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo Encanto store" className="h-48 w-48" />
              <span className="text-xl font-bold">Encanto store</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Energia, atitude e estilo em cada look. Moda fitness de qualidade desde 2005.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("sobre")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("produtos")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Produtos
                </button>
              </li>
              <li>
                <a href="/vitrine" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Vitrine
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection("contato")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/5575982115464" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  (75) 98211-5464
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:encanto.store36@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all">
                  encanto.store36@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Povoado de Jiboia N°92<br />
                  Retirolândia - BA
                </span>
              </li>
            </ul>
          </div>

          {/* Horário e Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horário</h3>
            <div className="flex items-start gap-2 mb-6">
              <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div className="text-primary-foreground/80">
                <p>Seg a Sex: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-4">Redes sociais</h3>
            <div className="flex gap-3">
              <a href="https://instagram.com/encantostoreoficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram Encanto store">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/jairlenemaria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook Encanto store">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {new Date().getFullYear()} Encanto store. Todos os direitos reservados.</p>
            <p>CNPJ: 42.837.683/0001-86</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;