import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Wstęp" },
  { to: "/godzina-wyjscia", label: "Godzina wyjścia" },
  { to: "/godzina-przyjazdu", label: "Godzina przyjazdu" },
  { to: "/uzytkowanie-auta", label: "Użytkowanie auta" },
  { to: "/zajecia-w-grupie", label: "Zajęcia w grupie" },
  { to: "/zaufanie", label: "Zaufanie do dziecka" },
  { to: "/nasza-galeria", label: "Nasza galeria" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-lg group-hover:scale-105 transition-transform">
            R
          </div>
          <div className="leading-tight">
            <div className="font-display text-base text-foreground">Robert Ślęzak</div>
            <div className="text-xs text-muted-foreground">Wiadomość do Rodziców w formie strony · Lubliniec</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-primary font-medium rounded-md bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground border-b border-border last:border-0"
                activeProps={{ className: "py-3 text-sm text-primary font-medium border-b border-border last:border-0" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
