import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">
            Demonstração de vitrine
          </h1>
          <div className="w-full">
            <iframe 
              src="https://v4.egestor.com.br/vitrine/?s=encantostore36" 
              style={{ width: '100%', height: '800px', border: 'none' }}
              title="Vitrine Encanto store"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vitrine;
