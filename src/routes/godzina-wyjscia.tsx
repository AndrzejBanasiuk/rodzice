import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card, Quote } from "@/components/PageShell";

export const Route = createFileRoute("/godzina-wyjscia")({
  head: () => ({
    meta: [
      { title: "Pełna swoboda — List do Rodziców" },
      { name: "description", content: "Dlaczego w wieku 18 lat elastyczność i brak kontroli czasu są naturalnym etapem dorosłości." },
      { property: "og:title", content: "Dorosłość i wolność — List do Rodziców" },
      { property: "og:description", content: "O tym, że osiemnastka na karku to koniec z pilnowaniem zegarka przez rodziców." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Rozdział 1"
      title="Wolność wyboru"
      intro="Mamy po 18 lat. To wiek, w którym sami decydujemy o swojej przyszłości, więc tym bardziej sami chcemy decydować o tym, kiedy wychodzimy z domu i jak planujemy swój wieczór."
    >
      
      {/* --- ZAMIAST DZIECKA: WASZE ZDJĘCIE GRUPOWE --- */}
      <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl border border-border/50 -mt-8 mb-12 relative">
        <img 
          src="/dzieciak.jpg" 
          alt="Nasza ekipa" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <Card>
        <h2 className="text-2xl font-display text-foreground mb-3">Koniec z grafikami</h2>
        <p className="text-foreground/80 leading-relaxed">
          Wchodząc w dorosłość, przestajemy funkcjonować według sztywnych wytycznych. Nasze spotkania to nie są szkolne zajęcia – to czas dla nas, który chcemy przeżywać bez presji. Jako dorośli ludzie wiemy, jakie mamy obowiązki i sami potrafimy je pogodzić z wyjściem.
        </p>
      </Card>

      <Card>
        <h2 className="text-2xl font-display text-foreground mb-3">Zasady dorosłego luzu</h2>
        <ul className="space-y-3 text-foreground/80">
          <li className="flex gap-3"><span className="text-accent font-bold">·</span> Pełna autonomia — decyzja o wyjściu należy do nas.</li>
          <li className="flex gap-3"><span className="text-accent font-bold">·</span> Brak kontroli co do minuty — dorosłość polega na zaufaniu.</li>
          <li className="flex gap-3"><span className="text-accent font-bold">·</span> Wzajemny szacunek — informujemy o planach, bo się szanujemy.</li>
        </ul>
      </Card>

      <Quote>
        Osiemnaste urodziny to moment, w którym odpowiedzialność przejmuje się od rodziców, a nie dostaje w dawkach.
      </Quote>

      {/* --- SEKACJA ZE ZDJĘCIEM RUDA.JPG - WYKADROWANE W DÓŁ --- */}
      <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant border border-border/50">
          <p className="text-xs text-gray-400 mt-4 mb-1">Fotografia - Błażej Dylla</p>
          <img 
            src="/ruda.jpg" 
            alt="Zdjęcie" 
            className="w-full h-full object-cover" 
            style={{ objectPosition: 'center bottom' }} 
          />
        </div>
      <div className="relative grid md:grid-cols-[1fr,1fr] gap-8 my-16 items-stretch">
        <Card className="m-0 flex flex-col justify-center">
          <h2 className="text-2xl font-display text-foreground mb-3">Partnerstwo zamiast nadzoru</h2>
          <p className="text-foreground/80 leading-relaxed">
            Chcemy, żeby relacja z Wami opierała się na partnerstwie. Mega luz w temacie wyjść to dla nas najlepszy dowód na to, że widzicie w nas dojrzałych ludzi.
          </p>
        </Card>
        
      </div>

    </PageShell>
  );
}
