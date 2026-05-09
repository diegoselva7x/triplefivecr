'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { SITE, TICKER_ITEMS } from '@/lib/constants';

const allTickerItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

export default function Hero() {
  const sparksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sparksRef.current) return;
    const sparks = sparksRef.current.querySelectorAll<HTMLElement>('.spark');
    sparks.forEach((el) => {
      el.style.animationDelay = (Math.random() * 3).toFixed(2) + 's';
    });
  }, []);

  return (
    <header
      id="top"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Sparkles */}
      <div ref={sparksRef} aria-hidden="true">
        <span className="spark lg" style={{ top: '18%', left: '8%' }}>✦</span>
        <span className="spark" style={{ top: '12%', right: '14%' }}>✦</span>
        <span className="spark sm" style={{ top: '38%', left: '18%' }}>✦</span>
        <span className="spark sm" style={{ top: '48%', right: '22%' }}>✦</span>
        <span className="spark lg" style={{ top: '62%', left: '6%' }}>✦</span>
        <span className="spark" style={{ top: '70%', right: '8%' }}>✦</span>
      </div>

      {/* Main content — centered vertically in the remaining space above the ticker */}
      <div
        className="wrap"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
          paddingTop: '80px',
          paddingBottom: '0',
          width: '100%',
        }}
      >
        {/* Logo full — chrome style above tag pill */}
        <div style={{ marginBottom: '24px' }}>
          <Image
            src="/images/brand/logo-full.png"
            alt="555 Triple Five"
            width={160}
            height={60}
            priority
            style={{
              height: '44px',
              width: 'auto',
              filter: 'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(20,32,28,0.25))',
              opacity: 0.9,
            }}
          />
        </div>

        {/* Tag pill */}
        <span
          className="mono"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 14px',
            borderRadius: '999px',
            border: '1px solid rgba(10,14,13,0.18)',
            background: 'rgba(255,255,255,0.35)',
            backdropFilter: 'blur(8px)',
            fontSize: '11px',
            letterSpacing: '0.16em',
            color: '#0A0E0D',
          }}
        >
          <span style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: '#0A0E0D',
            flexShrink: 0,
            display: 'inline-block',
          }} />
          COSTA RICA · EST. 2024
        </span>

        {/* 555 balloon image */}
        <div style={{
          position: 'relative',
          width: 'min(680px, 82vw)',
          margin: '20px auto 4px',
          display: 'grid',
          placeItems: 'center',
        }}>
          {/* Glow halo */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            inset: '-10% -6%',
            background: 'radial-gradient(55% 45% at 50% 55%, rgba(255,255,255,0.5), transparent 65%)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />
          <Image
            src="/images/brand/555-balloon-v2.png"
            alt="555 Triple Five — globos cromados"
            width={720}
            height={600}
            priority
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 30px 60px rgba(20,32,28,0.45)) drop-shadow(0 6px 0 rgba(20,32,28,0.18))',
            }}
          />
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          <a
            href={SITE.tickets}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 20px',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'transform .15s ease, box-shadow .2s',
              background: '#0A0E0D',
              color: '#fff',
              boxShadow: '0 10px 30px -10px rgba(10,14,13,0.5)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 14px 34px -10px rgba(10,14,13,0.6)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(10,14,13,0.5)';
            }}
          >
            <Image
              src="/images/brand/logo-eventcr-entradas.png"
              alt="eventcr"
              width={18}
              height={18}
              style={{ width: '18px', height: '18px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
            Conseguir Entradas
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 20px',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'transform .15s ease',
              background: 'rgba(255,255,255,0.5)',
              color: '#0A0E0D',
              border: '1px solid rgba(10,14,13,0.18)',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
          >
            <Image
              src="/images/brand/logo-instagram.avif"
              alt="Instagram"
              width={18}
              height={18}
              style={{ width: '18px', height: '18px', objectFit: 'contain' }}
            />
            @triplefivecr
          </a>
        </div>
      </div>

      {/* Ticker — pinned to bottom of viewport */}
      <div
        aria-hidden="true"
        style={{
          borderTop: '1px solid rgba(10,14,13,0.18)',
          borderBottom: '1px solid rgba(10,14,13,0.18)',
          background: 'rgba(255,255,255,0.18)',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          padding: '14px 0',
          width: '100%',
          flexShrink: 0,
        }}
      >
        <div style={{
          display: 'inline-flex',
          gap: '48px',
          animation: 'scroll 38s linear infinite',
        }}>
          {allTickerItems.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontWeight: 800,
                fontSize: '32px',
                letterSpacing: '-0.02em',
                color: '#0A0E0D',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '48px',
              }}
            >
              {item}
              <span style={{ color: '#fff', fontWeight: 400, textShadow: '0 0 12px rgba(255,255,255,0.6)' }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
