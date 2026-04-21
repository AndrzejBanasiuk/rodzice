import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card, Quote } from "@/components/PageShell";

// --- IMPORT ZDJĘĆ ---
import derzkoImg from "@/assets/derzko.jpg";
import magdaImg from "@/assets/magda.jpg";
import misiowozImg from "@/assets/misiowoz.jpg";

export const Route = createFileRoute("/uzytkowanie-auta")({
  head: () => ({
    meta: [
      { title: "Mobilność i zaufanie — Wiadomość do Rodziców" },
      { name: "description", content: "O tym, dlaczego kluczyki do auta to dla nas symbol zaufania i dorosłości." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Rozdział 3"
      title="Auto, czyli wolność na czterech kółkach"
      intro="Samochód to dla nas coś więcej niż środek transportu. To dowód na to, że wierzycie w naszą odpowiedzialność i dajecie nam przestrzeń do bycia dorosłymi."
    >
      <Card>
        <h2 className="text-2xl font-display text-foreground mb-3">Kluczyki w rękach 18-latka</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Wiemy, że pożyczenie samochodu to dla każdego rodzica spory stres – nie chodzi tylko o samo auto, ale o zaufanie do naszych umiejętności. Chcemy, żebyście wiedzieli, że traktujemy to priorytetowo. Mamy 18 lat, prawo jazdy w kieszeni i głowę na karku. Pozwolenie na swobodne korzystanie z auta to dla nas sygnał, że traktujecie nas jak partnerów.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Zamiast ograniczeń, prosimy o kredyt zaufania. Auto pozwala nam na spontaniczność – czy to szybki wypad do innego miasta, czy bezpieczny powrót z imprezy w środku nocy, bez czekania na pociągi czy drogie taxi. To element naszej mobilnej dorosłości.
        </p>
      </Card>

      {/* --- ZDJĘCIE MISIOWOZU: NATURALNE PROPORCJE, ŻEBY WAS BYŁO WIDAĆ --- */}
      <div className="my-10 flex justify-center">
        <div className="max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white">
          <img 
            src={misiowozImg} 
            alt="Nasza ekipa" 
            className="w-full h-auto object-contain"
          />
          
        </div>
      </div>

      <Quote>
        Auto w naszych rękach to nie brawura, to możliwość dotarcia tam, gdzie rodzą się najlepsze wspomnienia.
      </Quote>

      <Card>
        <h2 className="text-2xl font-display text-foreground mb-3">Dlaczego możecie być spokojni?</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Dojrzeliśmy do tego, by dbać o rzeczy, które nam powierzacie. Rozumiemy wartość samochodu i koszty jego utrzymania. Kiedy bierzemy auto, nie robimy tego, by szaleć na drodze, ale by spędzić czas na własnych zasadach, będąc niezależnymi od rozkładów jazdy czy pogody.
        </p>
        <ul className="space-y-4 text-foreground/80 italic border-l-2 border-accent pl-4">
          <li>
            „Dbamy o auto jak o własne – wiemy, że Wasz spokój zależy od naszej rozsądnej jazdy.”
          </li>
          <li>
            „Możliwość pożyczenia samochodu sprawia, że czujemy się docenieni jako dorośli ludzie.”
          </li>
          <li>
            „Niezależność, którą nam dajecie, wraca do Was w postaci naszej wdzięczności i odpowiedzialności.”
          </li>
        </ul>
      </Card>

      {/* --- DERZKO I MAGDA: CZYSTY UKŁAD OBOK SIEBIE --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
          <img src={derzkoImg} alt="Derzko" className="w-full h-[450px] object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
          <img src={magdaImg} alt="Magda" className="w-full h-[450px] object-cover" />
        </div>
      </div>

      <Card>
        <h2 className="text-2xl font-display text-foreground mb-3">Wspólny układ</h2>
        <p className="text-foreground/80 leading-relaxed">
          Pozwalając nam brać samochód, inwestujecie w naszą samodzielność. My ze swojej strony gwarantujemy, że zawsze wracamy bezpiecznie, szanujemy sprzęt i doceniamy to, że nie musimy prosić o podwózkę. To układ, w którym wszyscy wygrywają – my mamy wolność, a Wy macie dorosłe, ogarnięte dzieci, które potrafią o siebie zadbać na trasie.
        </p>
      </Card>
    </PageShell>
  );
}