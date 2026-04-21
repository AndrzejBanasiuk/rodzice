import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { Link } from "@tanstack/react-router";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-6 pt-16 pb-10">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium mb-4">
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight mb-6">
            {title}
          </h1>
          {intro && (
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              {intro}
            </p>
          )}
        </section>
        <section className="max-w-3xl mx-auto px-6 pb-24">{children}</section>
      </main>
      <footer className="border-t border-border py-10 text-center">
        <p className="text-sm text-muted-foreground italic font-light">
          Z szacunkiem,{" "}
          <Link to="/" className="text-primary hover:underline not-italic font-medium">
            Robert Ślęzak
          </Link>
          {" "}— dobry znajomy i przyjaciel Waszych dzieci
        </p>
        <p className="text-xs text-muted-foreground mt-2">Lubliniec · 2026</p>
      </footer>
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-7 md:p-9 shadow-[var(--shadow-soft)] mb-5">
      {children}
    </div>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-4 border-accent pl-5 py-2 my-6 italic text-foreground/80 font-display text-lg">
      {children}
    </blockquote>
  );
}
