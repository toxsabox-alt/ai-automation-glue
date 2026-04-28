import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun, Mail, Send, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Оксана Терпенёва — Digital Systems Architect" },
      {
        name: "description",
        content:
          "Оксана Терпенёва — Digital Systems Architect. Соединяю хаос в структуру. Digital • AI • Автоматизация.",
      },
      { property: "og:title", content: "Оксана Терпенёва — Digital Systems Architect" },
      {
        property: "og:description",
        content: "Соединяю хаос в структуру. Digital • AI • Автоматизация.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Переключить тему"
      className="group fixed right-5 top-5 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/40 backdrop-blur-sm transition-all hover:bg-accent hover:scale-105"
    >
      {mounted && isDark ? (
        <Sun className="h-4 w-4 transition-transform group-hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_var(--glow)]"
    >
      <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
      <span>{label}</span>
    </a>
  );
}

function Index() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-between px-6 py-10">
      <ThemeToggle />

      {/* Spacer top */}
      <div aria-hidden className="h-4" />

      {/* Center block */}
      <section className="flex flex-1 flex-col items-center justify-center text-center">
        <h1
          className="animate-rise font-light leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.75rem)" }}
        >
          Оксана Терпенёва
        </h1>

        <p
          className="mt-3 animate-rise text-sm font-mono uppercase tracking-[0.25em] text-muted-foreground"
          style={{ animationDelay: "120ms" }}
        >
          Digital Systems Architect
        </p>

        <div
          className="my-8 h-px w-16 animate-rise bg-border"
          style={{ animationDelay: "220ms" }}
        />

        <p
          className="animate-rise max-w-xl text-balance text-lg italic text-foreground/90 sm:text-xl"
          style={{ animationDelay: "300ms" }}
        >
          Соединяю хаос в структуру.
        </p>

        <p
          className="mt-4 animate-rise font-mono text-xs tracking-widest text-muted-foreground sm:text-sm"
          style={{ animationDelay: "400ms" }}
        >
          Digital • AI • Автоматизация
        </p>

        <div
          className="mt-10 flex animate-rise flex-col items-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "520ms" }}
        >
          <ContactLink href="mailto:#" icon={Mail} label="email" />
          <ContactLink href="#" icon={Send} label="telegram" />
          <ContactLink href="#" icon={MessageCircle} label="max" />
        </div>
      </section>

      {/* Footer */}
      <footer className="font-mono text-[11px] tracking-widest text-muted-foreground">
        2026 © Все права защищены
      </footer>
    </main>
  );
}
