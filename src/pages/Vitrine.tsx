import Header from "@/components/Header";
const Vitrine = () => {
  return <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <div className="h-20">
        <Header />
      </div>
      
      {/* Iframe - altura dinâmica: 100vh - 80px - 63px */}
      <div className="w-full flex-1" style={{
      height: 'calc(100vh - 80px - 63px)'
    }}>
        <iframe src="https://v4.egestor.com.br/vitrine/?s=encantostore36" className="w-full h-full" style={{
        border: 'none'
      }} title="Vitrine Encanto store" />
      </div>

      {/* Badge inferior - 63px */}
      
    </div>;
};
export default Vitrine;