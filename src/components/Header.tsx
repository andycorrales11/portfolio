/* -----------------------------------------------------------------------------
   Header component — fixed, translucent bar with social links
   -----------------------------------------------------------------------------*/

'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

// TODO: replace the placeholders below with your actual profile URLs
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

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-black/30 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / initials */}
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-widest text-cyan-200 drop-shadow-[0_0_4px_rgba(0,255,255,0.7)]"
          aria-label="Home page"
        >
          AC
        </Link>

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
              <Icon className="h-5 w-5 text-cyan-200 transition-transform duration-150 group-hover:scale-110 group-focus-visible:scale-110 drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
