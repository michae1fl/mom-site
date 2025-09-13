"use client";
import Link from "next/link";
import { Container } from "@/app/components/container";
import { useEffect, useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <Container className="h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-xl">Dr. Folasade Femi-Lawal</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/speaking">Speaking Highlights</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button className="md:hidden rounded-xl border px-3 py-1.5 text-sm" onClick={() => setOpen(true)}>Menu</button>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 grid content-start gap-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button className="rounded-lg border px-2 py-1 text-sm" onClick={() => setOpen(false)}>Close</button>
            </div>
            {["/","/about","/publications","/speaking","/contact"].map((href) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="py-2 border-b">
                {href === "/" ? "Home" : href.slice(1).replace("-", " ").replace(/\b\w/g, s => s.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
