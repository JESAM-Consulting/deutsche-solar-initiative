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
            Jetzt Vertrag prüfen
          </a>
        </>
      )}

<header className="bg-yellow-400 text-black rounded-b-2xl shadow-md px-6 py-4">
  <div className="max-w-3xl mx-auto flex items-center justify-between">
    {/* Logo & Claim */}
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
          Die Deutsche Strom Initiative ist ein unabhängiger Dienstleister, der es sich zur Aufgabe gemacht hat, Verbraucherinnen und Verbrauchern beim Wechsel ihres Stromanbieters zur Seite zu stehen. Unser Ziel ist es, Transparenz, Fairness und Nachhaltigkeit in den Energiemarkt zu bringen. Wir helfen dir, unkompliziert Geld zu sparen – ohne bürokratischen Aufwand und mit voller Versorgungssicherheit.
        </p>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4 animate-fade-in">Vorteile der Deutschen Strom Initiative</h2>
        <p className="mb-6 animate-fade-in">
          Wir übernehmen für dich den gesamten Prozess: Von der Tarifrecherche über die Kündigung deines alten Anbieters bis hin zur Anmeldung beim neuen Anbieter. Dabei berücksichtigen wir deine individuellen Wünsche, wie z. B. Ökostrom, kurze Vertragslaufzeiten oder Preisgarantien. Du erhältst von uns ausschließlich transparente Angebote ohne versteckte Kosten – und das komplett kostenfrei.
        </p>
        <p className="mb-6 animate-fade-in">
          Darüber hinaus setzen wir uns aktiv für die Energiewende ein. Indem wir dir helfen, zu einem günstigeren und nachhaltigeren Anbieter zu wechseln, leisten wir gemeinsam einen Beitrag für Umwelt und Zukunft. Unser Service spart dir nicht nur Zeit und Geld, sondern sorgt auch dafür, dass du jederzeit bestens versorgt bist – ganz ohne Risiko.
        </p>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4 animate-fade-in">Wusstest du?</h2>
        <p className="mb-6 animate-fade-in">
          Ein Anbieterwechsel dauert in der Regel nur <strong>5 Minuten</strong> – und spart dir oft mehrere hundert Euro pro Jahr!
        </p>

        <section className="max-w-3xl mx-auto p-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-left">So einfach funktioniert der Wechsel</h2>
          <ol className="relative border-l border-yellow-500 space-y-8">
            <li className="ml-6">
              <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5"></div>
              <h3 className="text-lg font-semibold">1. Kontaktaufnahme</h3>
              <p className="text-sm text-gray-300">Du meldest dich bei uns – per Nachricht, Anruf oder Formular.</p>
            </li>
            <li className="ml-6">
              <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5"></div>
              <h3 className="text-lg font-semibold">2. Analyse deines Verbrauchs</h3>
              <p className="text-sm text-gray-300">Wir werfen einen Blick auf deine letzte Abrechnung oder Zählernummer.</p>
            </li>
            <li className="ml-6">
              <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5"></div>
              <h3 className="text-lg font-semibold">3. Individueller Tarifvergleich</h3>
              <p className="text-sm text-gray-300">Du bekommst den besten Tarifvorschlag – fair, transparent, unverbindlich.</p>
            </li>
            <li className="ml-6">
              <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5"></div>
              <h3 className="text-lg font-semibold">4. Wechsel & Kündigung</h3>
              <p className="text-sm text-gray-300">Wir übernehmen den gesamten Wechsel – inkl. Kündigung deines alten Vertrags.</p>
            </li>
            <li className="ml-6">
              <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5"></div>
              <h3 className="text-lg font-semibold">5. Entspannt sparen</h3>
              <p className="text-sm text-gray-300">Du bekommst weiterhin zuverlässig Strom – nur günstiger.</p>
            </li>
          </ol>
        </section>

        <div className="bg-[#2A2F3A] p-4 rounded-xl mb-6">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">5 Minuten, die sich lohnen</h3>
          <p>
            Die meisten Menschen investieren stundenlang in Preisvergleiche – aber beim Strom zahlen sie einfach, was auf der Rechnung steht. Dabei reicht oft ein 5-Minuten-Gespräch, um jährlich mehrere Hundert Euro zu sparen.
          </p>
        </div>

        <div className="bg-[#2A2F3A] p-4 rounded-xl mb-6">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Ohne Aufwand, ohne Risiko</h3>
          <p>Du bleibst rundum versorgt – ganz ohne Unterbrechung oder Stress.</p>
        </div>

        <section className="max-w-3xl mx-auto px-6 pb-6 mt-5"></section>

        <div className="text-center mt-8">
          <p className="text-lg font-medium">📞 Melde dich kurz – ein Fachberater übernimmt den Vergleich und Wechsel für dich!</p>
          <a href="mailto:info@deutsche-strom-initiative.de">
            <button className="mt-4 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition">
              Jetzt Kontakt aufnehmen
            </button>
          </a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-12 mt-10">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Kundenstimmen</h2>
        <div className="bg-[#2A2F3A] p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <button onClick={prevSlide} className="text-yellow-300 hover:text-yellow-500">←</button>
            <p className="text-sm text-gray-400">{current + 1} / {testimonials.length}</p>
            <button onClick={nextSlide} className="text-yellow-300 hover:text-yellow-500">→</button>
          </div>
          <div className="text-center">
            <p className="text-lg italic">"{testimonials[current].text}"</p>
            <p className="mt-4 font-bold text-yellow-300">– {testimonials[current].name}</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-400 mt-10 pb-6 space-y-2">
        <p>&copy; {new Date().getFullYear()} Deutsche Strom Initiative – Eine Marke der WePro Deutschland GmbH. Alle Rechte vorbehalten. </p>
        <p>
          <a href="https://wepro-deutschland.de/impressum" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">Impressum</a> | 
          <a href="https://wepro-deutschland.de/datenschutzerkl%C3%A4rung" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">Datenschutz</a>
        </p>
      </footer>

      {showCookieBanner && (
        <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-4 z-50 shadow-xl">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              Diese Website verwendet Cookies, um dir ein optimales Erlebnis zu bieten. Mit deiner Zustimmung hilfst du uns, unseren Service zu verbessern.
            </p>
            <button
              onClick={handleAcceptCookies}
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
            >
              Verstanden
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
