'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hero-gradient sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo className="h-12 w-auto text-white" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="nav-link">Início</Link>
              <Link href="/areas" className="nav-link">Áreas de Atuação</Link>
              <Link href="/sobre" className="nav-link">Sobre</Link>
              <Link href="/equipe" className="nav-link">Equipe</Link>
              <Link href="/contato" className="nav-link">Contato</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-secondary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="nav-link block px-3 py-2">Início</Link>
            <Link href="/areas" className="nav-link block px-3 py-2">Áreas de Atuação</Link>
            <Link href="/sobre" className="nav-link block px-3 py-2">Sobre</Link>
            <Link href="/equipe" className="nav-link block px-3 py-2">Equipe</Link>
            <Link href="/contato" className="nav-link block px-3 py-2">Contato</Link>
          </div>
        </div>
      )}
    </nav>
  );
}