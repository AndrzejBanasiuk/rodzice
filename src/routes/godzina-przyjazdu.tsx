import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card, Quote } from "@/components/PageShell";

// Import zdjęć z folderu assets
import blazejImg from "@/assets/blazej.jpg";
import lewyImg from "@/assets/lewy.jpg";

export const Route = createFileRoute("/godzina-przyjazdu")({
  head: () => ({
    meta: [
      { title: "Wolność i odpowiedzialność — Wiadomość do Rodziców" },
      { name: "description", content: "O dorosłych wyborach, spontanicznych powrotach i zaufaniu, które nie zna granic odległości." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Rozdział 2"
      title="Powroty na naszych zasadach"
      intro={`Pytanie „o której wróci?” z czasem traci na znaczeniu. Ważniejsze jest pytanie: „czy potrafi o siebie zadbać?”. Jako 18-latkowie odpowiadamy: tak.`}
    >
      <Card>
        <h2 className="text-2xl font-display text-foreground mb-3">Spontan nie zna granic</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Nieważne, czy jesteśmy kilka ulic dalej, czy właśnie spędzamy wieczór w Katowicach, Krakowie czy gdziekolwiek indziej. Dorosłość to umiejętność odnalezienia się w każdej przestrzeni i o każdej porze. Nie chcemy planować powrotu z zegarkiem w ręku jeszcze przed wyjazdem, bo najlepsze wyjazdy to te, w których czas przestaje mieć znaczenie, a liczy się chwila.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Sztywne ramy ograniczają, a my chcemy czerpać z życia pełnymi garściami. Jeśli wieczór się przedłuża, bo trafiliśmy na świetny koncert, ciekawą dyskusję czy po prostu dobrze nam się siedzi – zostajemy. To nie jest brak dyscypliny, to <strong>wolność wyboru</strong>, do której dojrzeliśmy.
        </p>
      </Card>

      {/* --- SEKCJA ZE ZDJĘCIAMI (DYNAMICZNY GRID) --- */}
      <div className="my-12 px-4">
        <div className="grid grid-cols-2 gap-4 md:gap-8 relative max-w-4xl mx-auto">
          {/* Zdjęcie 1 */}
          <div className="relative aspect-[3/4] rotate-[-2deg] hover:rotate-0 transition-transform duration-500 shadow-xl rounded-xl overflow-hidden border-[6px] border-white">
            <img 
              src={blazejImg} 
              alt="Fotografia - Błażej Dylla" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-[10px] p-1.5 text-center backdrop-blur-sm italic">
              
            </div>
          </div>

          {/* Zdjęcie 2 */}
          <div className="relative aspect-[3/4] rotate-[3deg] hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-xl overflow-hidden border-[6px] border-white mt-6 z-10">
            <img 
              src={lewyImg} 
              alt="Wspólny wyjazd" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Quote>
        Dorosłość to nie powrót przed zachodem słońca. To powrót wtedy, kiedy czujesz, że czas na dom – z pełną świadomością swoich decyzji.
      </Quote>

      <Card>
        <h2 className="text-2xl font-display text-foreground mb-3">Logistyka dorosłości</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Odległość to tylko liczba, a nie powód do stresu. Mamy 18 lat i pełną świadomość tego, jak bezpiecznie poruszać się między miastami, jak zorganizować transport i jak dbać o siebie nawzajem w grupie. Nie potrzebujemy „godziny policyjnej”, bo sami wyznaczamy granice swojego bezpieczeństwa.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Nasza zasada jest prosta: wracamy wtedy, kiedy uznamy to za stosowne. Niezależnie od tego, czy jest to północ, czy świt, dbamy o to, by każdy z nas dotarł bezpiecznie pod same drzwi. To nasza wspólna odpowiedzialność, której pilnujemy bardziej niż jakichkolwiek odgórnych zakazów.
        </p>
      </Card>

      <Card>
        <h2 className="text-2xl font-display text-foreground mb-3">Zaufanie ponad kontrolę</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Rozumiemy, że odległość czasem buduje niepokój, ale prosimy o jedno: zamieńcie ten niepokój w zaufanie. Budujemy relację opartą na partnerstwie. Nie prosimy o pozwolenie na zostanie dłużej – informujemy o naszych planach, bo jesteśmy dorośli i szanujemy Wasz spokój.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Krótki komunikat „zostajemy dłużej, wrócimy nad ranem” powinien być dla Was sygnałem, że wszystko jest pod kontrolą, a my potrafimy zarządzać swoim czasem i bezpieczeństwem. Luz z Waszej strony pozwala nam cieszyć się młodością bez poczucia winy. W naszym wieku „późno” to pojęcie względne.
        </p>
      </Card>

      <Card>
        <h2 className="text-2xl font-display text-foreground mb-3">Nasza deklaracja</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Spontan nie oznacza braku odpowiedzialności. Wręcz przeciwnie – wymaga jej więcej. Zamiast sztywnych zasad, dajemy Wam słowo:
        </p>
        <ul className="space-y-4 text-foreground/80 italic border-l-2 border-accent pl-4">
          <li>
            „Odległość nas nie przeraża – wiemy jak bezpiecznie wrócić z każdego miejsca, w którym jesteśmy.”
          </li>
          <li>
            „Jesteśmy 18-latkami, którzy cenią swój czas i prawo do spontaniczności. Nocne powroty to część naszego doświadczania świata.”
          </li>
          <li>
            „Dajcie nam przestrzeń na bycie dorosłymi, a my odwdzięczymy się szczerością i odpowiedzialnością.”
          </li>
        </ul>
      </Card>
    </PageShell>
  );
}