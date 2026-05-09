'use client';

import { PAST_EVENTS, SITE } from '@/lib/constants';

export default function PastEvents() {
  return (
    <section
      id="events"
      style={{
        background: '#0A0E0D',
        color: '#fff',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glows */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: [
          'radial-gradient(60% 40% at 80% 0%, rgba(124,255,196,0.15), transparent 60%)',
          'radial-gradient(40% 50% at 0% 100%, rgba(124,255,196,0.10), transparent 60%)',
        ].join(', '),
        pointerEvents: 'none',
      }} />

      <div className="wrap">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '24px',
          flexWrap: 'wrap',
          marginBottom: '48px',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontWeight: 800,
            fontSize: 'clamp(40px, 5vw, 84px)',
            lineHeight: 0.92,
            letterSpacing: '-0.035em',
            maxWidth: '18ch',
          }}>
            Noches que se quedaron{' '}
            <em style={{
              fontStyle: 'normal',
              background: 'linear-gradient(180deg,#fff 0%, #8ea5a0 50%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}>en la memoria.</em>
          </h2>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 18px',
              borderRadius: '999px',
              background: '#fff',
              color: '#0A0E0D',
              fontWeight: 600,
              fontSize: '14px',
              flexShrink: 0,
            }}
          >
            Ver más en Instagram <span>↗</span>
          </a>
        </div>

        {/* Gallery */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '14px' }} className="gallery-grid">
          {PAST_EVENTS.map((event) => {
            const isWide = event.variant === 'wide';
            return (
              <article
                key={event.id}
                style={{
                  position: 'relative',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  background: '#1a2521',
                  gridColumn: isWide ? 'span 7' : 'span 5',
                  aspectRatio: isWide ? 'auto' : '3/4',
                  minHeight: isWide ? '520px' : undefined,
                  cursor: 'pointer',
                  transition: 'transform .35s ease',
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-6px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
              >
                {/* Overlay for text readability */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.55))',
                  paddingTop: '80px',
                }} />

                {/* Label */}
                <span style={{
                  position: 'absolute',
                  left: '18px',
                  top: '18px',
                  fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: '6px 10px',
                  borderRadius: '999px',
                  backdropFilter: 'blur(6px)',
                }}>
                  {event.label}
                </span>

                {/* Tags */}
                <div style={{
                  position: 'absolute',
                  right: '18px',
                  top: '18px',
                  display: 'flex',
                  gap: '6px',
                  flexWrap: 'wrap',
                  maxWidth: '55%',
                  justifyContent: 'flex-end',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                    fontSize: '10px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    padding: '5px 9px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#fff',
                  }}>{event.tag.toUpperCase().replace('@', '')}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                    fontSize: '10px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    padding: '5px 9px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#fff',
                  }}>SOLD OUT</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .gallery-grid > article { grid-column: span 12 !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  );
}
