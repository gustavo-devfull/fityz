
'use client';
import Image from 'next/image';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#about-us', label: 'QUEM SOMOS' },
  { href: '#products', label: 'PRODUTOS' },
  { href: '#where-to-buy', label: 'ONDE COMPRAR' }, // Assuming this section will be added or linked externally
  { href: '#contact', label: 'CONTATO' },
];

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Page load animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-md' : 'bg-transparent'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
      style={{ transitionProperty: 'background-color, box-shadow, backdrop-filter, opacity, transform' }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
      <Link href="/" className="block" aria-label="FITYZ Home">
  <Image
    src="/logo-fityz.jpg"
    alt="Logo FITYZ"
    height={120}
    width={9999} // Largura arbitrária, será ajustada automaticamente pelo Next com base na proporção
    className="h-[160px] w-auto object-contain"
    priority
  />
</Link>

<nav className="hidden items-center gap-4 md:flex">
  {navLinks.map((link, index) => (
    <Link
      key={link.href}
      href={link.href}
      className={`bg-black text-white px-4 py-2 rounded-md text-sm font-medium uppercase tracking-wider transition-all hover:bg-zinc-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      style={{
        transitionDelay: `${(index + 1) * 100}ms`,
        transitionProperty: 'opacity, transform, background-color',
      }}
    >
      {link.label}
    </Link>
  ))}
</nav>


        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu de navegação</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background text-foreground">
            <div className="flex h-full flex-col p-6">
              <Link href="/" className="mb-8 text-3xl font-bold text-foreground" aria-label="FITYZ Home">
                <span className="font-headline">FITYZ</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium uppercase tracking-wider text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

    