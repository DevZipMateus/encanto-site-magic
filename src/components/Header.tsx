import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    // Se não estiver na página inicial, navega primeiro
    if (location.pathname !== "/") {
      navigate("/");
      // Aguarda um momento para a página carregar antes de fazer o scroll
      setTimeout(() => {
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
      }, 100);
    } else {
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
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="Voltar ao início">
            <img src={logo} alt="Logo Encanto store" className="h-36 w-36" />
            <span className="text-xl font-bold text-primary">Encanto store</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection("produtos")} className="text-foreground hover:text-primary transition-colors font-medium">
              Produtos
            </button>
            <button onClick={() => navigate("/vitrine")} className="text-foreground hover:text-primary transition-colors font-medium">
              Vitrine
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </button>
            <Button onClick={() => window.open("https://wa.me/5575982115464", "_blank")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("sobre")} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                Sobre
              </button>
              <button onClick={() => scrollToSection("produtos")} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                Produtos
              </button>
              <button onClick={() => navigate("/vitrine")} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                Vitrine
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                Contato
              </button>
              <Button onClick={() => window.open("https://wa.me/5575982115464", "_blank")} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                Fale conosco
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;