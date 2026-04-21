import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card, Quote } from "@/components/PageShell";

// --- IMPORT ZDJĘĆ ---
import osiemnastkaImg from "@/assets/18.jpg";
import imprezaImg from "@/assets/impreza.jpg";

export const Route = createFileRoute("/zajecia-w-grupie")({
  head: () => ({
    meta: [
      { title: "Zajęcia w grupie — Wiadomość do Rodziców" },
      { name: "description", content: "Co tak naprawdę robimy razem — od Katowic po strych u Dominiki." },
      { property: "og:title", content: "Zajęcia w grupie — Co robimy?" },
      { property: "og:description", content: "Bilard, wspólne wyjazdy i spokojne wieczory — pełna transparentność." },
    ],
  }),
  component: Page,
});

const activities = [
  { 
    t: "Bilard i pingpong u Dominiki", 
    d: "Nasze centrum dowodzenia na strychu. To nie tylko sport, ale setki godzin rozmów przy stole. Turnieje są zacięte, ale zawsze kończą się śmiechem." 
  },
  { 
    t: "Wypady do Katowic i większych miast", 
    d: "Eksplorujemy miasto — od wystaw i kina, po szukanie najlepszej kawy w okolicy. Uczymy się logistyki w dużym mieście i po prostu cieszymy się inną energią niż ta codzienna." 
  },
  { 
    t: "Spokojne posiedzenia w domu", 
    d: "Najbardziej wartościowy czas. Siedzimy i gadamy o tym, co nas czeka po szkole, planujemy kolejne wypady albo oglądamy coś razem. Bezpieczny, domowy klimat." 
  },
  { 
    t: "Rywalizacja na kręglach", 
    d: "Regularne wypady, żeby sprawdzić, kto tym razem zrobi najwięcej strike'ów. To idealny sposób na rozładowanie stresu po ciężkim tygodniu w szkole." 
  },
  { 
    t: "Parki trampolin", 
    d: "Godzina solidnego wycisku i zabawy. Może i mamy 18 lat, ale skakanie na trampolinach to wciąż najlepszy sposób na wyrzucenie z siebie całej energii." 
  },
  { 
    t: "Wspólne jedzenie i testowanie lokali", 
    d: "Zamiast stać przy garach, wolimy wyjść na dobrego burgera albo zamówić coś na wspólny wieczór. To nasz czas na integrację – przy dobrym jedzeniu zawsze najlepiej się rozmawia." 
  },
];

function Page() {
  return (
    <PageShell
      eyebrow="Rozdział 4"
      title="Nasza wspólna codzienność"
      intro={`Zamiast pytać „po co?”, lepiej zapytać „z kim?”. Spędzamy czas w sposób, który pozwala nam odpocząć, ale też uczy nas bycia ze sobą w dorosłym świecie.`}
    >
      <Card className="mb-8">
        <h2 className="text-2xl font-display text-foreground mb-4">Więcej niż tylko „wyjście”</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Dla nas te spotkania to nie tylko ucieczka od obowiązków. To przestrzeń, w której uczymy się odpowiedzialności za siebie nawzajem. Kiedy jedziemy do innego miasta, musimy pilnować czasu i transportu. Kiedy jesteśmy u kogoś w domu, dbamy o to, by zostawić po sobie porządek.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Każdy z nas jest inny, ale łączy nas jedno — szacunek do siebie i do Waszego spokoju. Dlatego zawsze wiecie, gdzie jesteśmy, a nasze „zajęcia” to po prostu zdrowe, normalne życie młodych dorosłych.
        </p>
      </Card>

      {/* --- NOWY UKŁAD ZDJĘĆ: DYNAMICZNY KOLAŻ --- */}
      <div className="my-12 px-4 md:px-0">
        <div className="relative h-[500px] md:h-[600px] w-full max-w-7xl mx-auto overflow-hidden rounded-3xl bg-zinc-950 p-6 md:p-10 shadow-inner">
          
          {/* Tło kolażu - lekko rozmyte, ciemniejsze */}
          <div className="absolute inset-0 z-0 opacity-20 blur-sm">
            <img src={osiemnastkaImg} className="absolute inset-0 h-full w-full object-cover" />
          </div>

          <div className="relative z-10 grid h-full grid-cols-12 gap-6">
            
            {/* ZDJĘCIE 1 (Osiemnastka) - Duże, po lewej */}
            <div className="col-span-12 h-full md:col-span-7 group relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <img 
                src={osiemnastkaImg} 
                alt="Wspólna osiemnastka" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                <p className="font-display text-xl text-white">Wspólne świętowanie dorosłości</p>
                <p className="mt-1 text-sm text-gray-200">Kiedy 18-stka wchodzi z klasą i odpowiedzialnością.</p>
              </div>
            </div>

            {/* ZDJĘCIE 2 (Impreza) - Węższe, po prawej, lekko obrócone */}
            <div className="col-span-12 h-full md:col-span-5 group relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl transition-all duration-500 md:rotate-3 md:hover:rotate-0">
              <img 
                src={imprezaImg} 
                alt="Spotkanie grupy" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                <p className="font-display text-xl text-white">Zgrana paczka to podstawa</p>
                <p className="mt-1 text-sm text-gray-200">Najlepsze wspomnienia tworzą się wtedy, gdy po prostu jesteśmy sobą w gronie, które znamy od lat.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* ------------------------------------------- */}

      <Quote>
        W dorosłości najpiękniejsze jest to, że sami wybieramy ludzi, z którymi chcemy budować wspomnienia. Nasza grupa to właśnie taki świadomy wybór.
      </Quote>

      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {activities.map((a) => (
          <div key={a.t} className="bg-card border border-border rounded-xl p-6 hover:bg-accent/5 transition-colors shadow-sm">
            <h3 className="font-display text-xl text-foreground mb-2">{a.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">{a.d}</p>
          </div>
        ))}
      </div>

      <Card>
        <h2 className="text-2xl font-display text-foreground mb-4">Transparentność to podstawa</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Nie mamy przed Wami tajemnic. Jeśli robimy coś nowego, zawsze o tym wspominamy. Nasza grupa to nie jest „przypadkowa łapanka” z ulicy — to zgrana paczka osób, które znacie z imienia i z którymi czujemy się po prostu bezpiecznie. 
        </p>
        <div className="bg-accent/10 p-4 rounded-lg border border-accent/20 italic text-foreground/90 text-sm">
          „Chcemy, żebyście patrząc na nas, widzieli nie tylko dzieci, które chcą się bawić, ale młodych dorosłych, którzy potrafią zorganizować sobie czas z klasą.”
        </div>
      </Card>
    </PageShell>
  );
}