import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Clock, Home, Car, Users, Heart, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wiadomość do Rodziców z Lublińca — Robert Ślęzak" },
      { name: "description", content: "Otwarta rozmowa o tym, dlaczego warto pozwolić córkom dłużej zostać na mieście, imprezach i spotkaniach ze znajomymi w Lublińcu." },
      { property: "og:title", content: "Wiadomość w formie strony do Rodziców z Lublińca" },
      { property: "og:description", content: "O zaufaniu, dorastaniu i wspólnych chwilach — od Roberta Ślęzaka." },
    ],
  }),
  component: Index,
});

const sections = [
  { to: "/godzina-wyjscia", label: "Godzina wyjścia", icon: Clock, desc: "Dlaczego trochę później to nic złego." },
  { to: "/godzina-przyjazdu", label: "Godzina przyjazdu", icon: Home, desc: "Bezpieczny powrót — zawsze." },
  { to: "/uzytkowanie-auta", label: "Użytkowanie auta", icon: Car, desc: "Odpowiedzialnie, rozsądnie, bez ryzyka." },
  { to: "/zajecia-w-grupie", label: "Zajęcia w grupie", icon: Users, desc: "Co tak naprawdę robimy razem." },
  { to: "/zaufanie", label: "Zaufanie do dziecka", icon: Heart, desc: "Najważniejszy fundament nastoletnich lat." },
] as const;

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.13_75/0.18),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-medium mb-6">
            Drodzy Rodzice z okolic Lublińca
          </div>
          <h1 className="text-5xl md:text-7xl font-display text-foreground leading-[1.05] mb-8">
            Pozwólcie im trochę{" "}
            <em className="text-primary not-italic relative">
              dłużej
              <span className="absolute bottom-1 left-0 w-full h-2 bg-accent/40 -z-10 rounded-full" />
            </em>{" "}
            pobyć razem.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
            Ta strona nie jest prośbą o nic wielkiego. To opowieść o tym, jak wyglądają nasze spotkania, dlaczego są dla Waszych dzieci ważne — i dlaczego warto im trochę bardziej zaufać.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/godzina-wyjscia"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              Zacznij czytać <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/zaufanie"
              className="inline-flex items-center justify-center gap-2 border border-border bg-card px-7 py-3.5 rounded-full text-sm font-medium text-foreground hover:border-primary transition-all"
            >
              O zaufaniu
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-16 w-full">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
          <img 
  src="/zdjecie_grupowe.jpg" 
  alt="Nasza grupa" 
  className="w-full h-auto object-cover max-h-[600px]"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 w-full">
        <div className="grid md:grid-cols-2 gap-4">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.to}
                to={s.to}
                className={`group bg-card border border-border rounded-2xl p-7 hover:border-primary hover:shadow-[var(--shadow-elegant)] transition-all ${
                  i === 4 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-display text-2xl text-foreground">{s.label}</h3>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground font-light">{s.desc}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="font-display italic text-2xl text-foreground/80 leading-relaxed">
            „Wasze dzieci są mądre, dojrzałe i zasługują na zaufanie. A ja jestem tu po to, żeby Wam to udowodnić."
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            — Robert Ślęzak, dobry znajomy i przyjaciel Waszych dzieci
          </p>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center">
        <p className="text-xs text-muted-foreground">Lubliniec · 2026</p>
      </footer>
    </div>
  );
}
