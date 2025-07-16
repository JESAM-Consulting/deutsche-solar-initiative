
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const testimonials = [
  { name: "Anna K.", text: "Ich hätte nie gedacht, dass ich mit einem Anruf über 300 € im Jahr spare. Super Service!" },
  { name: "Lars W.", text: "Einfach, schnell und total unkompliziert. Ich bin begeistert!" },
  { name: "Miriam T.", text: "Der Wechsel war in wenigen Minuten erledigt – und ich habe sogar auf Ökostrom umgestellt." },
  { name: "Kevin H.", text: "Endlich Schluss mit überhöhten Preisen! Danke für den transparenten Vergleich." },
  { name: "Selina R.", text: "Ich wurde super beraten – und spare jetzt 28 € im Monat. Empfehlenswert!" },
  { name: "Thomas B.", text: "Toller Kundenservice und ehrliche Empfehlungen. So geht Stromwechsel heute." },
  { name: "Julia F.", text: "Das beste: Ich musste mich um nichts kümmern. Alles wurde übernommen." },
  { name: "Markus D.", text: "Ich habe auch gleich meinen Vater überzeugt – der spart jetzt auch." },
];

export default function StromInitiativePage() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % testimonials.length);
  const prevSlide = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen bg-[#1E222D] text-white font-sans relative">
      {showTopBtn && (
        <>
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 left-6 bg-yellow-400 text-black p-2 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 z-50"
            aria-label="Nach oben scrollen"
          >
            ↑
          </button>
          <a
            href="mailto:info@deutsche-strom-initiative.de"
            className="fixed bottom-24 left-6 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 z-50 text-sm font-semibold"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </>
      )}

      <header className="bg-yellow-400 text-black rounded-b-2xl shadow-md px-6 py-4">
  <div className="max-w-3xl mx-auto flex items-center justify-between">
    {/* Logo & Claim */}
               <div>
              <img src="/logo.svg" alt="Logo" className="h-16 mb-2" />
              <p className="mt-2 text-lg">Einfach. Fair. Digital.</p>
            </div>

    {/* Hamburger Icon */}
    <button
      className="md:hidden text-3xl font-bold focus:outline-none transition duration-200"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Menü öffnen oder schließen"
    >
      {menuOpen ? "✕" : "☰"}
    </button>

    {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-6 font-semibold text-sm">
      <Link
        to="/"
        className={`hover:underline ${location.pathname === "/" ? "underline" : ""}`}
      >
        Privatkunden
      </Link>
      <Link
        to="/gewerbe"
        className={`hover:underline ${location.pathname === "/gewerbe" ? "underline" : ""}`}
      >
        Gewerbekunden
      </Link>
    </nav>
  </div>

  {/* Mobile Nav */}
  {menuOpen && (
    <div className="md:hidden mt-4 flex flex-col space-y-4 font-semibold text-sm animate-fade-in">
      <Link
        to="/"
        className={`hover:underline ${location.pathname === "/" ? "underline" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        Privatkunden
      </Link>
      <Link
        to="/gewerbe"
        className={`hover:underline ${location.pathname === "/gewerbe" ? "underline" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        Gewerbekunden
      </Link>
    </div>
  )}
</header>

      <section className="max-w-3xl mx-auto p-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4 animate-fade-in">Über uns</h2>
        <p className="mb-6 animate-fade-in">
          Die Deutsche Strom Initiative ist ein unabhängiger Dienstleister, der es sich zur Aufgabe gemacht hat, Verbraucherinnen und Verbrauchern beim Wechsel ihres Stromanbieters zur Seite zu stehen. Unser Ziel ist es, Transparenz, Fairness und Nachhaltigkeit in den Energiemarkt zu bringen. <br />Wir helfen dir, unkompliziert Geld zu sparen – ohne bürokratischen Aufwand und mit voller Versorgungssicherheit.
        </p>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4 animate-fade-in">Für Gewerbekunden: <br />Maßgeschneiderte Stromangebote direkt von der Börse</h2>
        <p className="mb-6 animate-fade-in">
          Besonders Unternehmen profitieren von unserem Rundum-Service – mit einem besonderen Vorteil: 
          Für Gewerbekunden bieten wir individuell zugeschnittene Stromtarife auf Basis der aktuellen Börsenpreise. 
          So sichern wir dir nicht nur marktgerechte Konditionen, sondern auch maximale Transparenz und Kontrolle über deine Energiekosten. 
          <br /><br />Durch unseren Zugang zur Strombörse können wir tagesaktuelle Preisentwicklungen nutzen, 
          um für dein Unternehmen den optimalen Beschaffungspreis zu realisieren. Ob kleines Unternehmen, 
          mittelständischer Betrieb oder Großverbraucher – wir analysieren deinen Strombedarf und entwickeln ein passgenaues Angebot, 
          das zu deinem Verbrauchsprofil und deinen Anforderungen passt.
        </p>
   <section className="max-w-3xl mx-auto p-6 animate-fade-in">
  <ol className="relative border-l border-yellow-500 space-y-8">
    <li className="ml-6">
      <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5"></div>
      <h4 className="text-lg font-semibold">1. Direkter Zugang zu Börsenstrompreisen</h4>
      <p className="text-sm text-gray-300">Nutze tagesaktuelle Entwicklungen für deine Energiebeschaffung.</p>
    </li>
    <li className="ml-6">
      <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5"></div>
      <h4 className="text-lg font-semibold">2. Individuelle Vertragsmodelle</h4>
      <p className="text-sm text-gray-300">Vertragslaufzeiten, die zu deinem Unternehmen passen – flexibel und bedarfsgerecht.</p>
    </li>
    <li className="ml-6">
      <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5"></div>
      <h4 className="text-lg font-semibold">3. Persönliche Betreuung</h4>
      <p className="text-sm text-gray-300">Unsere Energieexpert:innen begleiten dich von Anfang an – kompetent und individuell.</p>
    </li>
    <li className="ml-6">
      <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5"></div>
      <h4 className="text-lg font-semibold">4. Unterstützung bei Ausschreibungen</h4>
      <p className="text-sm text-gray-300">Wir helfen dir bei der Optimierung bestehender Verträge oder der Durchführung von Ausschreibungen.</p>
    </li>
    <li className="ml-6">
      <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5"></div>
      <h4 className="text-lg font-semibold">5. Transparente Preisstruktur</h4>
      <p className="text-sm text-gray-300">Keine versteckten Kosten – du behältst die volle Kostenkontrolle.</p>
    </li>
  </ol>

</section>

        <div className="text-center mt-8">
          <p className="text-lg font-medium"> Unsere Fachberater finden den besten Tarif<br /> für dein Unternehmen!<br /><br />
        </p>
          <a href="mailto:info@deutsche-strom-initiative.de">
            <button className="mt-4 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition">
              Jetzt Vertrag prüfen
            </button>
          </a>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-400 mt-10 pb-6 space-y-2">
        <p>&copy; {new Date().getFullYear()} Deutsche Strom Initiative – Eine Marke der WePro Deutschland GmbH. Alle Rechte vorbehalten. </p>
        <p>
          <a href="https://wepro-deutschland.de/impressum" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">Impressum</a> | 
          <a href="https://wepro-deutschland.de/datenschutzerkl%C3%A4rung" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">Datenschutz</a>
        </p>
      </footer>
    </div>
  );
}
