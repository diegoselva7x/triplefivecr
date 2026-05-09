'use client';

import Image from 'next/image';
import { useCountdown } from '@/hooks/useCountdown';
import { NEXT_EVENT, SITE } from '@/lib/constants';

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, '0');
}

export default function NextEvent() {
  const { days, hours, minutes, seconds } = useCountdown(NEXT_EVENT.date);

  const targetDate = new Date(NEXT_EVENT.date);
  const formattedDate = targetDate
    .toLocaleDateString('es-CR', { day: '2-digit', month: 'short', year: 'numeric' })
    .toUpperCase();

  return (
    <section
      id="next"
      style={{
        background: 'linear-gradient(180deg, oklch(0.74 0.10 178) 0%, oklch(0.84 0.09 176) 60%, oklch(0.92 0.06 178) 100%)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial overlays */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: '-10% -5%',
        background: [
          'radial-gradient(60% 40% at 50% 0%, rgba(255,255,255,0.6), transparent 60%)',
          'radial-gradient(50% 30% at 50% 100%, rgba(20,32,28,0.18), transparent 60%)',
        ].join(', '),
        pointerEvents: 'none',
      }} />

      {/* Sparkles */}
      <span className="spark lg" style={{ top: '14%', left: '10%' }} aria-hidden="true">✦</span>
      <span className="spark" style={{ top: '22%', right: '14%' }} aria-hidden="true">✦</span>
      <span className="spark sm" style={{ top: '60%', left: '18%' }} aria-hidden="true">✦</span>
      <span className="spark sm" style={{ top: '70%', right: '22%' }} aria-hidden="true">✦</span>

      <div className="wrap" style={{ position: 'relative', textAlign: 'center' }}>
        {/* Eyebrow */}
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 14px',
          borderRadius: '999px',
          background: '#0A0E0D',
          color: '#fff',
          fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
          fontSize: '11px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#7CFFC4',
            boxShadow: '0 0 10px #7CFFC4',
            animation: 'pulse 1.4s ease-in-out infinite',
            flexShrink: 0,
          }} />
          Próximo Evento · Coming Soon
        </span>

        {/* Title */}
        <h2 style={{
          fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
          fontWeight: 800,
          fontSize: 'clamp(48px, 7vw, 128px)',
          lineHeight: 0.88,
          letterSpacing: '-0.04em',
          color: '#fff',
          margin: '20px auto 12px',
          textShadow: '0 2px 0 rgba(20,32,28,0.18), 0 18px 40px rgba(20,32,28,0.22)',
        }}>
          {NEXT_EVENT.title}<br />
          <em style={{
            fontStyle: 'normal',
            background: 'linear-gradient(180deg,#fff 0%, #c9d4d0 35%, #6e7c77 55%, #f6faf9 80%, #d6dedb 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'drop-shadow(0 4px 8px rgba(20,32,28,0.25))',
          }}>{NEXT_EVENT.year}</em>
        </h2>

        {/* Countdown */}
        <div
          aria-live="polite"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '14px',
            margin: '48px auto 32px',
            maxWidth: '1100px',
          }}
          className="countdown-grid"
        >
          {[
            { v: pad(days), k: 'Días' },
            { v: pad(hours), k: 'Horas' },
            { v: pad(minutes), k: 'Minutos' },
            { v: pad(seconds), k: 'Segundos' },
          ].map(({ v, k }) => (
            <div
              key={k}
              style={{
                background: '#0A0E0D',
                color: '#fff',
                borderRadius: '22px',
                padding: '28px 14px 24px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div aria-hidden="true" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.08), transparent 30%)',
                pointerEvents: 'none',
              }} />
              <div suppressHydrationWarning style={{
                fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontWeight: 800,
                fontSize: 'clamp(56px, 9vw, 128px)',
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                background: 'linear-gradient(180deg,#fff 0%, #c9d4d0 40%, #fff 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontVariantNumeric: 'tabular-nums',
              }}>{v}</div>
              <div style={{
                fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                marginTop: '10px',
              }}>{k}</div>
            </div>
          ))}
        </div>

        {/* Meta */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '36px',
          flexWrap: 'wrap',
          margin: '24px 0 12px',
        }}>
          {[
            { label: 'Artista', value: NEXT_EVENT.artist },
            { label: 'Venue', value: NEXT_EVENT.venue },
            { label: 'Fecha', value: formattedDate },
            { label: 'Mesas VIP', value: NEXT_EVENT.vipPhone },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                fontSize: '12px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(10,14,13,0.7)',
              }}
            >
              {label}
              <b style={{
                display: 'block',
                fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontWeight: 800,
                fontSize: '24px',
                letterSpacing: '-0.02em',
                textTransform: 'none',
                color: '#0A0E0D',
                marginTop: '4px',
              }}>{value}</b>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
          <a
            href={NEXT_EVENT.tickets}
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
              background: '#0A0E0D',
              color: '#fff',
              boxShadow: '0 10px 30px -10px rgba(10,14,13,0.5)',
              transition: 'transform .15s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
          >
            Conseguir Entradas →
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
              background: 'rgba(255,255,255,0.5)',
              color: '#0A0E0D',
              border: '1px solid rgba(10,14,13,0.18)',
              backdropFilter: 'blur(8px)',
              transition: 'transform .15s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
          >
            Info en Instagram ↗
          </a>
        </div>

        {/* Flyer card */}
        <figure style={{
          margin: '64px auto 0',
          maxWidth: '1100px',
          padding: '14px',
          background: '#0A0E0D',
          borderRadius: '24px',
          boxShadow: '0 30px 80px -30px rgba(10,14,13,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset',
          position: 'relative',
        }}>
          {/* Chrome border ring */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            inset: '-1px',
            borderRadius: '25px',
            padding: '1px',
            background: 'linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.25) 70%, rgba(255,255,255,0.05))',
            WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
            opacity: 0.6,
          }} />
          <div style={{ borderRadius: '14px', overflow: 'hidden', background: '#000', aspectRatio: '1440/600' }}>
            <Image
              src={NEXT_EVENT.flyer}
              alt={`${NEXT_EVENT.title} ${NEXT_EVENT.year} — ${NEXT_EVENT.artist} · ${formattedDate} · ${NEXT_EVENT.venue}`}
              width={1440}
              height={600}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <figcaption style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 8px 4px',
            color: 'rgba(255,255,255,0.65)',
          }}>
            <span className="mono" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase' }}>Flyer Oficial</span>
            <span className="mono" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase' }}>15 · 05 · 2026</span>
          </figcaption>
        </figure>
      </div>

      <style>{`
        @media (max-width: 660px) {
          .countdown-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
