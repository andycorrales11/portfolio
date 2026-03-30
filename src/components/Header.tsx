/* -----------------------------------------------------------------------------
   Header component — fixed, translucent bar with nav links and social links
   -----------------------------------------------------------------------------*/

'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socials = [
  {
    href: 'https://github.com/andycorrales11',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/andres-corrales-d0ubl3m1nt/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://twitter.com/andycorralesss',
    label: 'Twitter',
    icon: Twitter,
  },
  {
    href: 'https://instagram.com/andycorraless',
    label: 'Instagram',
    icon: Instagram,
  },
];

const navLinks = [
  { href: '/projects', label: 'projects' },
  { href: '/log', label: 'log' },
  { href: '/about', label: 'about' },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-[#050505]/80 backdrop-blur-sm border-b border-[#00ff41]/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / initials */}
        <Link
          href="/"
          className="font-[family-name:var(--font-pixel)] text-sm font-bold tracking-widest text-[#00ff41] drop-shadow-[0_0_4px_rgba(0,255,65,0.7)]"
          aria-label="Home page"
        >
          AC
        </Link>

        {/* Page nav links */}
        <nav className="hidden sm:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="font-mono text-sm text-[#00ff41]/70 transition-colors hover:text-[#00ff41] hover:drop-shadow-[0_0_4px_rgba(0,255,65,0.6)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <nav className="flex gap-6">
          {socials.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Icon className="h-5 w-5 text-[#00ff41] transition-transform duration-150 group-hover:scale-110 group-focus-visible:scale-110 drop-shadow-[0_0_6px_rgba(0,255,65,0.6)]" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
