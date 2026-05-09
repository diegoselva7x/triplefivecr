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
        minHeight: '100vh',
        padding: '120px 0 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
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

      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Tag pill */}
        <span className="mono" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 14px',
          borderRadius: '999px',
          border: '1px solid rgba(10,14,13,0.18)',
          background: 'rgba(255,255,255,0.35)',
          backdropFilter: 'blur(8px)',
          fontSize: '12px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0A0E0D', flexShrink: 0 }} />
          COSTA RICA · EST. 2024
        </span>

        {/* 555 balloon image */}
        <div style={{
          position: 'relative',
          width: 'min(720px, 86vw)',
          margin: '28px auto 6px',
          display: 'grid',
          placeItems: 'center',
        }}>
          {/* Glow halo */}
          <div style={{
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
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', margin: '28px auto 0' }}>
          <a
            href={SITE.tickets}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 22px',
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
            Conseguir Entradas <span style={{ display: 'inline-block', transition: 'transform .2s' }}>→</span>
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 22px',
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
            @triplefivecr <span style={{ display: 'inline-block', transition: 'transform .2s' }}>↗</span>
          </a>
        </div>
      </div>

      {/* Ticker */}
      <div
        aria-hidden="true"
        style={{
          marginTop: '44px',
          borderTop: '1px solid rgba(10,14,13,0.18)',
          borderBottom: '1px solid rgba(10,14,13,0.18)',
          background: 'rgba(255,255,255,0.18)',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          padding: '14px 0',
          width: '100%',
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
