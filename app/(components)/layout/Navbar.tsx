"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">ProfitEngine</Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="text-gray-700 hover:text-gray-900 transition">Fonctionnalités</a>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition">Blog</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition">Contact</Link>
        </div>
        <div className="hidden md:block">
          <button className="rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition">Se connecter</button>
        </div>
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/90 backdrop-blur px-4 pb-4 space-y-4">
          <a href="#features" className="block pt-4 text-gray-700">Fonctionnalités</a>
          <Link href="/blog" className="block text-gray-700">Blog</Link>
          <Link href="/contact" className="block text-gray-700">Contact</Link>
          <button className="w-full rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition">Se connecter</button>
        </div>
      )}
    </header>
  );
}
