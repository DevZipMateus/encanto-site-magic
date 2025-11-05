import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Trava a rolagem da página
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Carrega o script do badge MonteSite
    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Restaura a rolagem ao sair da página
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-background">
        <Header />
      </div>
      
      {/* Espaçamento para o header fixo */}
      <div className="h-20" />
      
      {/* Iframe - altura dinâmica: 100vh - 80px - 63px */}
      <div className="w-full flex-1" style={{
      height: 'calc(100vh - 80px - 63px)'
    }}>
        <iframe src="https://v4.egestor.com.br/vitrine/?s=encantostore36" className="w-full h-full" style={{
        border: 'none'
      }} title="Vitrine Encanto store" />
      </div>

      {/* Badge inferior - 63px */}
      <div id="montesite-footer-badge" className="h-[63px]" />
    </div>;
};
export default Vitrine;