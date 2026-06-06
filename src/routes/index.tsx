import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import kittens from "@/assets/kittens.png";

// 📷 Álbum de momentos (fotos)
const MOMENTOS = [
  { src: "/album/IMG-20250704-WA0283.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0284.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0285.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0286.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0287.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0288.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0289.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0290.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0291.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0299.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0304.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0305.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0308.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0314.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0315.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0324.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0330.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0331.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0333.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0337.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0338.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0358.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0362.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0364.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0366.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0376.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0383.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0384.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0386.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0387.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0388.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0390.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0395.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0416.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0418.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0419.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0420.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0421.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0423.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0424.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0426.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0429.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0432.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0433.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0436.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0438.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0439.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0445.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0449.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0450.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0453.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0456.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0462.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0463.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0464.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0470.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0471.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0472.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0473.jpg.jpeg", type: "photo" },
  { src: "/album/IMG-20250704-WA0487.jpg.jpeg", type: "photo" },
];

// 🎬 Video especial
const VIDEO_ESPECIAL = {
  src: "/album/WhatsApp Video 2026-06-05 at 5.22.07 PM.mp4",
  type: "video" as const,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Para Yanely 💙" },
      { name: "description", content: "Una carta de amor para Yanely." },
      { property: "og:title", content: "Para Yanely 💙" },
      { property: "og:description", content: "Una carta de amor para Yanely." },
    ],
  }),
  component: Index,
});

// ✍️ Escribe tu carta aquí abajo (puedes usar varios párrafos):
const CARTA = `Mi hermosa Princesa,

Hola mi amor, se que este no ha sido nuestro mejor año, pero quiero que sepas que quiero dar todo de mi para hacerte feliz, para que te sientas comoda, segura y feliz a mi lado, soy alguien con poca imaginacion asi que hacer esto es algo que se me acaba de ocurrir, asi que bueno, en esta pagina web quiero decirte que eres lo mejor que me ha pasado, no veo una vida sin ti, sin tus lindos ojos o tu hermosa sonrisa, sin tu voz o tu risa, sin tu abrazo o tu cariño, sin nada de ti siento que moriria sabes, se que no soy perfecto y que estamos en una situacion no tan buena, me gustaria que lo intentes, que te esfuerces, yo estoy dando lo mejor de mi por mensaje, quiero que tu tambien lo hagas ya que am, que? un 80% de la relacion es chats y un 20% es vernos, asi que por eso te pido esfuerzo, se que no es facil, se que no sabes que pensar pero am, tu solo dejate llevar por mi, mis palabras y mis acciones, quiero mejorar a tu lado, y tu al mio, quiero verte graduada de ingeniera industrial, quiero verte triunfar, antes no lo veia ya que de verdad era un estupido idiota que no se, no se

Pero te amo, y siempre te amare, no importa que pase, no importa lo que suceda, te amo, tu eres mi vida, mi todo, mi amor, mi princesa, mi niña, mi todo y no te quiero perder, ya que eres parte de mi, se que ya te lo dije por chat, pero te lo repetiré, contigo quiero compartir mis metas metas, mis planes, mis sueños, mis triunfos, todo de mi lo quiero compartir contigo y se que sera dificil esto pero no imposible, no le limites, no seas tan negativa con respecto a que sentir y que no sentir, quiero que te dejes llevar por todo, como cuando nos estabamos conociendo, antes de ser novios, no quiero que te limites mucho sabes, quiero que te esfuerces y que me demuestres que aun podemos mejorar, te lo pido, te lo ruego y te lo imploro, solo eso dejate llevar ya que quiero ver a la mejor mujer del mundo cumplir sus metas, quiero verte triunfar despues de todo el trabajo fuerte y tu esfuerzo, se que no te gusta la carrera pero ya no hay vuelta atras y tiene que lograrlo, por ti, por mi, por el esfuerzo de tus papás y sobre todo ser la inspiracion de otras personas ya que eres una mujer increible y mereces todo lo mejor, eres fuerte, inteligente, bonita, valiente, cariñosa, amable, comprensiva, atenta y con eso ya lo eres todo, estoy muy orgulloso de ti mi nña preciosa, de verdad muy, muy orgulloso, tu puedes con todo esto y con mas y si un dia el mundo te llega a dar la espalda yo estare ahi para nunca dejarte sola, si un dia el mundo se pone en tu contra, yo estare contra el mundo

Asi que bueno, tambien te quiero decir que contigo encontre todo lo que buscaba, contigo supe lo que es el amor verdadero, contigo me siento realizado, feliz, tranquilo y comodo, tu eres esa clase de persona con la cual me siento feliz, verte es como fak, es hermosa mi princesa, tu sonrisa, tu risa, me encantan y tus ojos son preciosos, me gustaria mucho que mi hija tenga tus ojos y tu  sonrisa, me gustaria ser tu esposo, me gustaria llegar a viejitos, a tu lado quiero conocer el pais, el continente, el planeta, contigo simplemente lo quiero todo ya que te amo como no tienes una minima idea, tu me pegaste un gusto por los gatos que no sabia que tenia, gracias por eso, y a tu lado quiero tener gatitos, un perrito, 2 hijos, una casa, un jardín, una vida llena de amor y felicidad, todo lo que siempre soñe, todo lo que siempre soñamos, una boda perfecta, para ti no se como serie una boda perfecta, quiza una fiesta o quiza un viaje, yo con l que sea de esas 2 opciones me siento muy, muy feliz mi cielo hermoso, te amo, te amo y te amo con toda mi alma

Te quiero agradecer por estos 2 años que llevas a mi lado, han sido dificiles, lo se pero no hay que dejar morir esto y no hay que cometer los mismos errores, quiero que esto sea para toda la vida, quiero compartir nuestras vidas, quiero ser tuyo para siempre, quiero que seas mia para siempre, perdon por todo lo malo que hice, perdon por todo de verdad, no te quieo perder y es por eso que estoy en un proceso de mejora, para ti, quiero que tu des todo de ti, absolutamente todo de ti, demostremos todo con acciones y no con palabras, si? de verdad eres muy importante para mi, te amo y lo seguire haciendo eternamente mi niña, eres muy, muy especial para mi, es por eso que no te quiero perder, te amo, te amo, te amo, te amooooooooo demasiadoooooooooooooooo amor mio

Por favor Luchemos mi amor, por favor hagamos que esto funcione

Con todo mi cariño, y amor
Eduardoooo`;

// 🎵 Pon tus archivos .mp3 en la carpeta `public/music/` con estos nombres
// (o cambia las rutas/títulos aquí):
const CANCIONES = [
  {
    id: "ella",
    titulo: "Arcoíris - Ed Maverick",
    subtitulo: "Para Eduardo",
    src: "/music/Ed Maverick - arcoíris (Lyric Video).mp3",
  },
  {
    id: "yo",
    titulo: "Brillas - León Larregui",
    subtitulo: "Para mi niña hermosa",
    src: "/music/León Larregui - Brillas (Letra).mp3",
  },
];

function Index() {
  const parrafos = CARTA.trim().split(/\n\n+/);
  const [cancionId, setCancionId] = useState(CANCIONES[0].id);
  const [reproduciendo, setReproduciendo] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cancion = CANCIONES.find((c) => c.id === cancionId) ?? CANCIONES[0];
  const [momentoSeleccionado, setMomentoSeleccionado] = useState<typeof MOMENTOS[0] | null>(null);
  const [visibleParrafos, setVisibleParrafos] = useState<Set<number>>(new Set());
  const cartaRef = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    if (reproduciendo) {
      audio.play().catch(() => setReproduciendo(false));
    }
  }, [cancionId, reproduciendo]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().catch(() => setReproduciendo(false));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleParrafos((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const parrafosElements = document.querySelectorAll('[data-paragraph]');
    parrafosElements.forEach((el) => observer.observe(el));

    // Mostrar todos los párrafos después de un breve retraso si no se detectan
    setTimeout(() => {
      const allIndices = Array.from({ length: parrafosElements.length }, (_, i) => i);
      setVisibleParrafos((prev) => new Set([...prev, ...allIndices]));
    }, 500);

    return () => observer.disconnect();
  }, []);

  const toggleReproducir = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (reproduciendo) {
      audio.pause();
      setReproduciendo(false);
    } else {
      audio.play().then(() => setReproduciendo(true)).catch(() => {});
    }
  };

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-b from-background via-secondary to-accent/40'
    }`}>
      {/* 🎶 Selector de canción flotante */}
      <div className="sticky top-4 z-20 mx-auto flex w-full max-w-xl flex-col items-center gap-3 px-4">
        <div className={`w-full rounded-3xl border border-primary/30 p-5 shadow-[0_15px_40px_-15px_oklch(0.55_0.18_245/0.4)] backdrop-blur-md ${
          darkMode 
            ? 'bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90' 
            : 'bg-gradient-to-br from-white/90 via-blue-50/90 to-white/90'
        }`}>
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="animate-pulse text-lg">💙</span>
            <p className="text-center text-sm font-medium text-primary">
              Nuestra música especial
            </p>
            <span className="animate-pulse text-lg">💙</span>
          </div>
          
          <div className="flex w-full items-center gap-3">
            <div className="flex flex-col items-center gap-2 flex-1">
              {/* Switch de canciones */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCancionId(CANCIONES[0].id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    cancionId === CANCIONES[0].id
                      ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg scale-105"
                      : darkMode
                        ? "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                        : "bg-white/50 text-muted-foreground hover:bg-white/80"
                  }`}
                >
                  {CANCIONES[0].subtitulo}
                </button>
                <button
                  onClick={() => setCancionId(CANCIONES[1].id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    cancionId === CANCIONES[1].id
                      ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg scale-105"
                      : darkMode
                        ? "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                        : "bg-white/50 text-muted-foreground hover:bg-white/80"
                  }`}
                >
                  {CANCIONES[1].subtitulo}
                </button>
              </div>
              <span className={`text-[10px] uppercase tracking-wider text-center ${
                darkMode ? 'text-slate-400' : 'text-muted-foreground'
              }`}>
                Toca para cambiar entre las 2 canciones
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={toggleReproducir}
                aria-label={reproduciendo ? "Pausar" : "Reproducir"}
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-all duration-300 ${
                  reproduciendo
                    ? "bg-gradient-to-br from-primary to-primary/80 text-white hover:scale-110"
                    : "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground hover:scale-110"
                }`}
              >
                {reproduciendo ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="5" width="4" height="14" rx="1"/>
                    <rect x="14" y="5" width="4" height="14" rx="1"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
              <span className={`text-[10px] uppercase tracking-wider ${
                darkMode ? 'text-slate-400' : 'text-muted-foreground'
              }`}>
                Click aquí
              </span>
            </div>

            <div className="flex flex-col items-center gap-1">
              {/* Switch de modo oscuro */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative h-12 w-16 shrink-0 rounded-2xl shadow-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-slate-700' 
                    : 'bg-slate-300'
                }`}
                aria-label={darkMode ? "Modo claro" : "Modo oscuro"}
              >
                <div className={`absolute top-1/2 -translate-y-1/2 h-8 w-8 rounded-full shadow-md transition-transform duration-300 flex items-center justify-center ${
                  darkMode ? 'left-1 translate-x-6 bg-yellow-400' : 'left-1 translate-x-0 bg-slate-800'
                }`}>
                  {darkMode ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-900">
                      <circle cx="12" cy="12" r="5"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                  )}
                </div>
              </button>
              <span className={`text-[10px] uppercase tracking-wider ${
                darkMode ? 'text-slate-400' : 'text-muted-foreground'
              }`}>
                Click aquí
              </span>
            </div>
          </div>
          
          <div className={`mt-4 rounded-xl px-4 py-2 ${
            darkMode ? 'bg-primary/10' : 'bg-primary/5'
          }`}>
            <p className="text-center text-xs text-primary">
              {cancion.titulo}
            </p>
          </div>
        </div>
      </div>

      <audio ref={audioRef} loop preload="none">
        <source src={cancion.src} />
      </audio>

      {/* Estrellitas decorativas */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-primary/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              fontSize: `${10 + (i % 4) * 4}px`,
              animation: `twinkle ${3 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* Corazones decorativos */}
      <div className="pointer-events-none absolute inset-0 opacity-100">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={`heart-${i}`}
            className="absolute text-primary/80"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 31) % 100}%`,
              fontSize: `${18 + (i % 4) * 8}px`,
              animation: `heartFloat ${5 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            💙
          </span>
        ))}
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center px-6 py-16">
        <img
          src={kittens}
          alt="Dos gatitos azules abrazados"
          width={320}
          height={320}
          className="w-64 drop-shadow-[0_10px_30px_oklch(0.55_0.18_245/0.35)] animate-[float_4s_ease-in-out_infinite]"
        />

        <h1 className={`mt-6 text-center font-serif text-5xl font-bold md:text-6xl ${
          darkMode ? 'text-blue-400' : 'text-primary'
        }`}>
          Para Mi Princesa Lindaaa
        </h1>
        <p className={`mt-2 text-center text-sm uppercase tracking-[0.3em ${
          darkMode ? 'text-slate-400' : 'text-muted-foreground'
        }`}>
          De Eduardo
        </p>

        <article className={`relative mt-10 w-full rounded-3xl border border-primary/20 p-8 shadow-[0_20px_60px_-20px_oklch(0.55_0.18_245/0.4)] backdrop-blur md:p-12 ${
          darkMode 
            ? 'bg-slate-800/80 text-slate-100' 
            : 'bg-card/80 text-card-foreground'
        }`}>
          {/* Texto "te amo" flotando detrás */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            {Array.from({ length: 300 }).map((_, i) => (
              <span
                key={`te-amo-${i}`}
                className="absolute font-serif text-primary/50"
                style={{
                  left: `${Math.random() * 95}%`,
                  top: `${Math.random() * 95}%`,
                  fontSize: `${14 + Math.random() * 10}px`,
                  animation: `textFloat ${2 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                te amo
              </span>
            ))}
          </div>

          {parrafos.map((p, i) => (
            <p
              key={i}
              data-paragraph
              data-index={i}
              className={`mb-5 whitespace-pre-line font-serif text-lg leading-relaxed last:mb-0 ${
                visibleParrafos.has(i) ? 'animate-fade-in-up' : 'opacity-0'
              } ${darkMode ? 'text-slate-200' : 'text-card-foreground'}`}
              style={{
                animationDelay: visibleParrafos.has(i) ? `${i * 0.15}s` : undefined,
              }}
            >
              {p}
            </p>
          ))}
          <div className="mt-8 text-center text-2xl">🐾 💙 🐾</div>
        </article>

        <footer className="mt-10 text-center text-xs text-muted-foreground">
          Hecho Por un pokito de ia pero con mucho amor
        </footer>

        {/* 📷 Álbum de momentos */}
        <section className={`mt-16 w-full rounded-3xl p-8 shadow-[0_20px_60px_-20px_oklch(0.55_0.18_245/0.3)] backdrop-blur-sm md:p-12 ${
          darkMode 
            ? 'bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80' 
            : 'bg-gradient-to-br from-blue-50/80 via-white/60 to-blue-100/80'
        }`}>
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="text-2xl">✨</span>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-primary"></div>
              <span className="text-2xl">💙</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-primary md:text-5xl">
              Nuestros Momentos
            </h2>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Cada foto cuenta nuestra historia de amor
            </p>
          </div>
          
          <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
            {MOMENTOS.map((momento, index) => (
              <div
                key={index}
                onClick={() => setMomentoSeleccionado(momento)}
                className={`break-inside-avoid cursor-pointer overflow-hidden rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300 hover:scale-[1.05] animate-photo-reveal animate-[float_3s_ease-in-out_infinite] ${
                  darkMode ? 'bg-slate-700' : 'bg-white'
                }`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                }}
              >
                <img
                  src={momento.src}
                  alt={`Momento ${index + 1}`}
                  className="w-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 🎬 Video especial */}
        <section className="mt-12 w-full">
          <div className={`mx-auto max-w-4xl rounded-3xl border border-primary/30 p-6 shadow-[0_20px_60px_-20px_oklch(0.55_0.18_245/0.4)] backdrop-blur-md md:p-8 ${
            darkMode 
              ? 'bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90' 
              : 'bg-gradient-to-br from-white/90 via-blue-50/90 to-white/90'
          }`}>
            <div className="mb-4 text-center">
              <h3 className="font-serif text-2xl font-bold text-primary md:text-3xl">
                💙 Nuestro Video Especial
              </h3>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-[0_0_30px_rgba(59,130,246,0.6)]">
              <video
                src={VIDEO_ESPECIAL.src}
                className="w-full h-auto"
                controls
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
          </div>
        </section>

        {/* Modal de pantalla completa */}
        {momentoSeleccionado && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md ${
              darkMode ? 'bg-slate-900/95' : 'bg-white/95'
            }`}
            onClick={() => setMomentoSeleccionado(null)}
          >
            {/* Texto "te amo" flotando detrás */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {Array.from({ length: 150 }).map((_, i) => (
                <span
                  key={`modal-te-amo-${i}`}
                  className="absolute font-serif text-primary/60"
                  style={{
                    left: `${Math.random() * 95}%`,
                    top: `${Math.random() * 95}%`,
                    fontSize: `${20 + Math.random() * 20}px`,
                    animation: `textFloat ${2 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  te amo
                </span>
              ))}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setMomentoSeleccionado(null);
              }}
              className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:scale-110 z-50"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <div className="flex items-center justify-center max-h-[95vh] max-w-[95vw] p-4 relative z-10">
              {momentoSeleccionado.type === "photo" ? (
                <img
                  src={momentoSeleccionado.src}
                  alt="Momento"
                  className="max-h-[95vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <video
                  src={momentoSeleccionado.src}
                  controls
                  autoPlay
                  muted
                  className="max-h-[95vh] max-w-[95vw] rounded-2xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes heartFloat {
          0% {
            opacity: 0.3;
            transform: translateY(0) scale(0.8) rotate(0deg);
          }
          25% {
            opacity: 0.7;
            transform: translateY(-30px) scale(1.1) rotate(5deg);
          }
          50% {
            opacity: 0.5;
            transform: translateY(-50px) scale(1.0) rotate(-5deg);
          }
          75% {
            opacity: 0.8;
            transform: translateY(-30px) scale(1.2) rotate(3deg);
          }
          100% {
            opacity: 0.3;
            transform: translateY(0) scale(0.8) rotate(0deg);
          }
        }
        @keyframes textFloat {
          0% {
            opacity: 0.25;
            transform: translateY(0) translateX(0);
          }
          25% {
            opacity: 0.25;
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            opacity: 0.25;
            transform: translateY(-30px) translateX(20px);
          }
          75% {
            opacity: 0.25;
            transform: translateY(-15px) translateX(10px);
          }
          100% {
            opacity: 0.25;
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes photoReveal {
          0% {
            opacity: 0;
            transform: scale(0.8) rotate(-5deg);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-photo-reveal {
          animation: photoReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
