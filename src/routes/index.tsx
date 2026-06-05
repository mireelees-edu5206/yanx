import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import kittens from "@/assets/kittens.png";

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

Te quiero agradecer por estos 2 años que llevas a mi lado, han sido dificiles, lo se pero no hay que dejar morir esto y no hay que cometer los mismos errores, quiero que esto sea para toda la vida, quiero compartir nuestras vidas, quiero ser tuyo para siempre, quiero que seas mia para siempre, perdon por todo lo malo que hice, perdon por todo de verdad, no te quieo perder y es por eso que estoy en un proceso de mejora, para ti, quiero que tu des todo de ti, absolutamente todo de ti, demostremos todo con acciones y no con palabras, si? de verdad eres muy importante para mi, te amo y lo seguire haciendo eternamente mi niña, te amo, te amo, te amo, te amooooooooo demasiadoooooooooooooooo amor mio


Con todo mi cariño,
Tu novio`;

// 🎵 Pon tus archivos .mp3 en la carpeta `public/music/` con estos nombres
// (o cambia las rutas/títulos aquí):
const CANCIONES = [
  {
    id: "ella",
    subtitulo: "Para Eduardo",
    src: "/music/Ed Maverick - arcoíris (Lyric Video).mp3",
  },
  {
    id: "yo",
    subtitulo: "Para mi niña hermosa",
    src: "/music/León Larregui - Brillas (Letra).mp3",
  },
];

function Index() {
  const parrafos = CARTA.trim().split(/\n\n+/);
  const [cancionId, setCancionId] = useState(CANCIONES[0].id);
  const [reproduciendo, setReproduciendo] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cancion = CANCIONES.find((c) => c.id === cancionId) ?? CANCIONES[0];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    if (reproduciendo) {
      audio.play().catch(() => setReproduciendo(false));
    }
  }, [cancionId]);

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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-secondary to-accent/40">
      {/* 🎶 Selector de canción flotante */}
      <div className="sticky top-4 z-20 mx-auto flex w-full max-w-xl flex-col items-center gap-3 px-4">
        <div className="flex w-full items-center gap-2 rounded-full border border-primary/30 bg-card/90 p-2 shadow-[0_10px_30px_-10px_oklch(0.55_0.18_245/0.5)] backdrop-blur">
          {CANCIONES.map((c) => {
            const activa = c.id === cancionId;
            return (
              <button
                key={c.id}
                onClick={() => setCancionId(c.id)}
                className={`flex-1 rounded-full px-3 py-2 text-xs font-medium transition-all md:text-sm ${
                  activa
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <span className="block">{c.subtitulo}</span>
              </button>
            );
          })}
          <button
            onClick={toggleReproducir}
            aria-label={reproduciendo ? "Pausar" : "Reproducir"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md transition-transform hover:scale-110"
          >
            {reproduciendo ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          🎵 {cancion.titulo}
        </p>
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

      <main className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center px-6 py-16">
        <img
          src={kittens}
          alt="Dos gatitos azules abrazados"
          width={320}
          height={320}
          className="w-64 drop-shadow-[0_10px_30px_oklch(0.55_0.18_245/0.35)] animate-[float_4s_ease-in-out_infinite]"
        />

        <h1 className="mt-6 text-center font-serif text-5xl font-bold text-primary md:text-6xl">
          Para Mi Princesa Lindaaa
        </h1>
        <p className="mt-2 text-center text-sm uppercase tracking-[0.3em] text-muted-foreground">
          De Eduardo
        </p>

        <article className="mt-10 w-full rounded-3xl border border-primary/20 bg-card/80 p-8 shadow-[0_20px_60px_-20px_oklch(0.55_0.18_245/0.4)] backdrop-blur md:p-12">
          {parrafos.map((p, i) => (
            <p
              key={i}
              className="mb-5 whitespace-pre-line font-serif text-lg leading-relaxed text-card-foreground last:mb-0"
            >
              {p}
            </p>
          ))}
          <div className="mt-8 text-center text-2xl">🐾 💙 🐾</div>
        </article>

        <footer className="mt-10 text-center text-xs text-muted-foreground">
          Hecho Por un pokito de ia pero con mucho amor
        </footer>
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
      `}</style>
    </div>
  );
}
