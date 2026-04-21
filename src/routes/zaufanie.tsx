import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card, Quote } from "@/components/PageShell";

// --- TU JEST IMPORT - Upewnij się, że plik w assets nazywa się robert-ochrona.jpg ---
import robertOchronaImg from "@/assets/nastawianie.jpg";

export const Route = createFileRoute("/zaufanie")({
  head: () => ({
    meta: [
      { title: "Fundament zaufania — Wiadomość do Rodziców" },
      { name: "description", content: "Dlaczego zaufanie to najważniejszy krok w dorosłość." },
      { property: "og:title", content: "Fundament zaufania — Wiadomość do Rodziców" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Rozdział 5 · Kluczowy"
      title="Zaufanie jako fundament"
      intro="To nie jest prośba o ślepą wiarę. To zaproszenie do partnerstwa, które pozwala nam wszystkim wejść w dorosłość z poczuciem bezpieczeństwa i szacunku."
    >
      <Card>
        <h2 className="text-2xl font-display text-foreground mb-3">Grupa, której możecie ufać</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Spędzamy ze sobą dużo czasu i widzę, jak kształtują się nasze charaktery. To nie jest grupa przypadkowych ludzi — to paczka świadomych, młodych dorosłych, którzy potrafią zadbać o siebie nawzajem. Każdy z nas wie, gdzie leżą granice bezpieczeństwa i zdrowego rozsądku.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Wspieramy się w trudniejszych chwilach i pilnujemy, by nikt nie czuł się wykluczony. Wiemy, kiedy odpuścić, kiedy wrócić do domu i jak zachować się w sytuacjach, które wymagają powagi. Jesteśmy ekipą, która zamiast problemów, chce budować wspólną przyszłość opartą na szczerości.
        </p>
      </Card>

      <Quote>
        Zaufanie nie jest nagrodą za bycie nieomylnym. To narzędzie, dzięki któremu uczymy się odpowiedzialności za własne wybory.
      </Quote>

      <Card>
        <h2 className="text-2xl font-display text-foreground mb-3">Dlaczego warto nam ufać?</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <h3 className="font-bold text-accent italic">Większa otwartość</h3>
            <p className="text-sm text-foreground/70">
              Kiedy czujemy, że nam ufacie, nie mamy potrzeby ukrywania planów. Mówimy otwarcie, gdzie idziemy i z kim będziemy, bo wiemy, że spotka się to ze zrozumieniem.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-accent italic">Odpowiedzialność za czas</h3>
            <p className="text-sm text-foreground/70">
              Kiedy dajecie nam wolność w decydowaniu o tym, kiedy wrócić, my w zamian dajemy Wam pewność, że wrócimy bezpiecznie i w pełnym porozumieniu. To zaufanie sprawia, że sami pilnujemy rozsądku lepiej, niż zrobiłby to jakikolwiek zegarek.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-accent italic">Bezpieczeństwo w grupie</h3>
            <p className="text-sm text-foreground/70">
              Pilnujemy się nawzajem. Jeśli ktoś czuje się gorzej lub potrzebuje pomocy, grupa reaguje natychmiast. Nikt nie zostaje sam — to nasza żelazna zasada.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-accent italic">Dojrzałe reakcje</h3>
            <p className="text-sm text-foreground/70">
              Uczymy się rozwiązywać problemy rozmową, a nie brawurą. Wasze zaufanie sprawia, że czujemy się dorosli — i tak też zaczynamy postępować.
            </p>
          </div>
        </div>
      </Card>

      <Card className="mb-10">
        <h2 className="text-2xl font-display text-foreground mb-3">Moje osobiste zobowiązanie</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Jako osoba, która często inicjuje te spotkania, czuję się odpowiedzialny za każdego członka naszej grupy. Obiecuję, że Wasze dzieci będą w bezpiecznym, szanującym się towarzystwie. Moim priorytetem jest to, by każdy wrócił do domu zadowolony i bezpieczny.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Jeżeli zdecydujecie się na ten kolejny krok w stronę zaufania, gwarantuję, że odpłacimy się lojalnością i odpowiedzialnością.
        </p>
        
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-foreground/80 leading-relaxed font-display italic text-xl">
            Z szacunkiem i wdzięcznością,<br />
            Robert Ślęzak<br />
            <span className="text-sm not-italic font-body text-muted-foreground tracking-wide uppercase">Przyjaciel i partner w budowaniu Waszego spokoju</span>
          </p>
        </div>
      </Card>

      {/* --- TWOJE ZDJĘCIE NA KONIEC STRONY --- */}
      
      <div className="mt-16 flex justify-center">
        <div className="max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white">
          <div className="p-5 border-t border-gray-100">
            <p className="text-center text-sm italic text-muted-foreground mt-1">
              Osobiste spotkanie jeśli im nie zaufacie
            </p>
          </div>
          <img 
            src={robertOchronaImg} 
            alt="Ochrona i nastawianie mózgu" 
            className="w-full h-auto"
          />
          
        </div>
      </div>
      {/* ------------------------------------------- */}

    </PageShell>
  );
}