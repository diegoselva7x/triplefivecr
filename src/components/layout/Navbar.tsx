'use client';

import { useState } from 'react';
import Image from 'next/image';
import { NAV_LINKS, SITE } from '@/lib/constants';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating pill nav */}
      <nav
        aria-label="Principal"
        style={{
          position: 'fixed',
          top: '14px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1340px',
          zIndex: 50,
          backdropFilter: 'blur(18px) saturate(140%)',
          WebkitBackdropFilter: 'blur(18px) saturate(140%)',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.3))',
          border: '1px solid rgba(255,255,255,0.55)',
          borderRadius: '999px',
          padding: '10px 14px 10px 22px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          boxShadow: '0 6px 30px rgba(20,32,28,0.10), inset 0 1px 0 rgba(255,255,255,0.7)',
        }}
      >
        {/* Logo — logo-full.png con estilo chrome */}
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ flexShrink: 0, lineHeight: 0 }}
          aria-label="555 Triple Five — inicio"
        >
          <Image
            src="/images/brand/logo-full.png"
            alt="555 Triple Five"
            width={120}
            height={44}
            style={{
              height: '32px',
              width: 'auto',
              filter: 'brightness(0) drop-shadow(0 1px 3px rgba(0,0,0,0.2))',
            }}
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', gap: '6px', margin: '0 auto' }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                padding: '8px 14px',
                borderRadius: '999px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#0A0E0D',
                transition: 'background .2s',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(10,14,13,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'none')}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA — Entradas con logo eventcr */}
        <a
          href={SITE.tickets}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '999px',
            background: '#0A0E0D',
            color: '#fff',
            fontWeight: 600,
            fontSize: '14px',
            transition: 'transform .15s ease',
            flexShrink: 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7CFFC4', boxShadow: '0 0 10px #7CFFC4', flexShrink: 0 }} />
          Entradas
        </a>

        {/* Hamburger */}
        <button
          className="nav-hamb"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
          style={{
            display: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '999px',
            background: '#0A0E0D',
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile fullscreen sheet */}
      <div
        role="dialog"
        aria-label="Menú móvil"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 60,
          background: 'rgba(10,14,13,0.92)',
          backdropFilter: 'blur(20px)',
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '80px 28px 28px',
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
          style={{
            position: 'absolute',
            top: '22px',
            right: '22px',
            width: '44px',
            height: '44px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'none',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            style={{
              color: '#fff',
              fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontWeight: 800,
              fontSize: '42px',
              lineHeight: 1.1,
              padding: '14px 0',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
              textAlign: 'left',
              background: 'none',
              cursor: 'pointer',
            }}
          >
            {link.label}
          </button>
        ))}

        <a
          href={SITE.tickets}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: '24px',
            fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontWeight: 800,
            fontSize: '24px',
            lineHeight: 1.1,
            color: '#7CFFC4',
          }}
        >
          Entradas →
        </a>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .nav-links, .nav-cta { display: none !important; }
          .nav-hamb { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
