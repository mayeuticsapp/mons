import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-5xl mx-auto py-6 flex justify-between items-center">
        <Image src="/logo_mons_ecologico.png" alt="MONS Logo" width={150} height={50} />
        <nav>
          <a href="#product" className="text-gray-700 hover:text-green-700 px-3 py-2">Il Prodotto</a>
          <a href="#why-mons" className="text-gray-700 hover:text-green-700 px-3 py-2">Perché MONS</a>
          <a href="#invest" className="text-gray-700 hover:text-green-700 px-3 py-2">Investi</a>
          <a href="#contact" className="text-gray-700 hover:text-green-700 px-3 py-2">Contatti</a>
        </nav>
      </header>

      <main className="w-full max-w-5xl mx-auto flex-grow flex flex-col items-center justify-center text-center">
        <section id="hero" className="w-full py-12 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-green-800 mb-4">MONS: Il Futuro Sostenibile del Packaging Monodose</h1>
          <p className="text-lg text-gray-600 mb-8">Innovazione, Efficienza, Sostenibilità: la rivoluzione è qui.</p>
          
          <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-300 rounded-md overflow-hidden mb-8">
            {/* Placeholder per video YouTube */}
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <a href="#invest" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-xl">
            Scopri le Opportunità per Investitori
          </a>
        </section>

        {/* Altre sezioni verranno aggiunte qui */}
      </main>

      <footer className="w-full max-w-5xl mx-auto py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} MONS. Tutti i diritti riservati.</p>
        <p><a href="#privacy" className="hover:text-green-700">Privacy Policy</a> | <a href="#terms" className="hover:text-green-700">Termini di Servizio</a></p>
      </footer>
    </div>
  );
}

