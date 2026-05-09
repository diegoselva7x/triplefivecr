'use client';

import { NAV_LINKS, SITE } from '@/lib/constants';

export default function Footer() {
  return (
    <footer style={{ background: '#0A0E0D', color: '#fff', padding: '80px 0 40px', position: 'relative', overflow: 'hidden' }}>
      {/* Giant 555 watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: 'translate(-50%, -30%)',
        fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
        fontWeight: 800,
        fontSize: 'clamp(180px, 28vw, 440px)',
        letterSpacing: '-0.06em',
        lineHeight: 0.8,
        background: 'linear-gradient(180deg,#fff 0%, #6e7c77 30%, #1a2521 60%, transparent 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        opacity: 0.6,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>555</div>

      <div className="wrap">
        {/* 4-col grid */}
        <div style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '36px',
          paddingTop: '80px',
        }}
          className="foot-grid"
        >
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontWeight: 800,
              fontSize: '96px',
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
              background: 'linear-gradient(180deg,#fff 0%, #c9d4d0 40%, #6e7c77 60%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}>555</div>
            <div style={{ marginTop: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.7)', maxWidth: '32ch', lineHeight: 1.5 }}>
              Triple Five CR · Productora de eventos y experiencias en Costa Rica.
            </div>
          </div>

          {/* Navegar */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '14px' }}>
              Navegar
            </h4>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ display: 'block', padding: '6px 0', color: '#fff', fontSize: '15px', opacity: 0.85, transition: 'opacity .15s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '14px' }}>
              Contacto
            </h4>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '6px 0', color: '#fff', fontSize: '15px', opacity: 0.85, transition: 'opacity .15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
            >@triplefivecr</a>
            <a href={`mailto:${SITE.email}`} style={{ display: 'block', padding: '6px 0', color: '#fff', fontSize: '15px', opacity: 0.85, transition: 'opacity .15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
            >{SITE.email}</a>
          </div>

          {/* Acción */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '14px' }}>
              Acción
            </h4>
            <a href={SITE.tickets} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '6px 0', color: '#fff', fontSize: '15px', opacity: 0.85, transition: 'opacity .15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
            >Entradas →</a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '6px 0', color: '#fff', fontSize: '15px', opacity: 0.85, transition: 'opacity .15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
            >Bookings →</a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '6px 0', color: '#fff', fontSize: '15px', opacity: 0.85, transition: 'opacity .15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
            >Press kit →</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          marginTop: '60px',
          fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
          fontSize: '11px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div>© 2026 Triple Five CR · Todos los derechos reservados</div>
          <div>Made in Costa Rica · 09°56&apos;N 84°05&apos;W</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .foot-grid > div:first-child div:first-child { font-size: 64px !important; }
        }
      `}</style>
    </footer>
  );
}
