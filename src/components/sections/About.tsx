'use client';

import Image from 'next/image';
import { CALENDAR_EVENTS } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0 80px', position: 'relative' }}>
      <span className="spark" style={{ top: '8%', right: '10%' }} aria-hidden="true">✦</span>
      <span className="spark sm" style={{ top: '30%', left: '6%' }} aria-hidden="true">✦</span>

      <div className="wrap">
        {/* Two-column header */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'end', marginBottom: '48px' }}
          className="about-head"
        >
          <h2 style={{
            fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontWeight: 800,
            fontSize: 'clamp(40px, 5.5vw, 88px)',
            lineHeight: 0.92,
            letterSpacing: '-0.035em',
            color: '#0A0E0D',
          }}>
            Artistas ticos e internacionales,{' '}
            <em style={{
              fontStyle: 'normal',
              background: 'linear-gradient(180deg,#fff 0%, #c9d4d0 50%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              filter: 'drop-shadow(0 2px 6px rgba(20,32,28,0.18))',
            }}>en Costa Rica.</em>
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.55, color: 'rgba(10,14,13,0.74)', maxWidth: '46ch' }}>
            Triple Five es una productora basada en San José. Traemos artistas ticos e internacionales al país y montamos los conciertos de principio a fin: booking, producción, venue y boletería.
          </p>
        </div>

        {/* Bento */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 'minmax(120px, auto)', gap: '14px' }}>

          {/* Dark card — Lo que hacemos */}
          <div style={{
            gridColumn: 'span 12',
            background: '#0A0E0D',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '24px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '24px',
          }}>
            <div>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>Lo que hacemos</div>
              <div style={{
                fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontWeight: 800,
                fontSize: 'clamp(26px, 2.7vw, 42px)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#fff',
                marginTop: '14px',
              }}>
                Booking nacional e internacional.<br />
                Producción end-to-end.<br />
                Venue y boletería.
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '18px' }} className="what-grid">
              <div>
                <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>Booking</div>
                <p style={{ marginTop: '6px', fontSize: '14px', lineHeight: 1.5, color: 'rgba(255,255,255,0.78)' }}>Artistas de CR y de afuera, traídos al país.</p>
              </div>
              <div>
                <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>Producción</div>
                <p style={{ marginTop: '6px', fontSize: '14px', lineHeight: 1.5, color: 'rgba(255,255,255,0.78)' }}>Sonido, luces, escenografía, staff.</p>
              </div>
              <div>
                <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>Venue &amp; ticket</div>
                <p style={{ marginTop: '6px', fontSize: '14px', lineHeight: 1.5, color: 'rgba(255,255,255,0.78)' }}>La Uruca y aliados. Boletería en eventcr.com.</p>
              </div>
            </div>
          </div>

          {/* Chrome card — Calendar */}
          <div style={{
            gridColumn: 'span 12',
            background: 'linear-gradient(160deg,#fff 0%, #d6dedb 35%, #8ea5a0 55%, #f6faf9 80%, #d6dedb 100%)',
            color: '#0A0E0D',
            borderRadius: '24px',
            padding: '24px 28px',
          }}>
            <div className="eyebrow" style={{
              color: 'rgba(10,14,13,0.65)',
              marginBottom: '18px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <span>Calendario · 2025–2026</span>
              <span>5 fechas</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }} className="calendar-grid">
              {CALENDAR_EVENTS.map((ev) => {
                const isPast = ev.status === 'pasado';
                const isNext = ev.status === 'proximo';
                const isTba = ev.status === 'tba';

                return (
                  <div
                    key={ev.date}
                    style={{
                      padding: '14px',
                      borderRadius: '14px',
                      background: isNext ? '#0A0E0D' : isTba ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.7)',
                      border: isTba ? '1px dashed rgba(10,14,13,0.28)' : '1px solid rgba(10,14,13,0.08)',
                      color: isNext ? '#fff' : '#0A0E0D',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0',
                    }}
                  >
                    <div className="mono" style={{
                      fontSize: '11px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: isNext ? 'rgba(255,255,255,0.6)' : 'rgba(10,14,13,0.55)',
                    }}>{ev.date}</div>

                    <div style={{
                      fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                      fontWeight: 800,
                      fontSize: '18px',
                      letterSpacing: '-0.02em',
                      marginTop: '6px',
                      lineHeight: 1.1,
                      color: isTba ? 'rgba(10,14,13,0.45)' : undefined,
                    }}>{ev.handle}</div>

                    <div className="mono" style={{
                      fontSize: '10px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      marginTop: '8px',
                      display: 'inline-block',
                      padding: '4px 8px',
                      borderRadius: '999px',
                      alignSelf: 'flex-start',
                      ...(isNext ? { background: '#7CFFC4', color: '#0A0E0D' } :
                        isPast ? { background: 'rgba(10,14,13,0.08)', color: 'rgba(10,14,13,0.55)' } :
                          { border: '1px solid rgba(10,14,13,0.22)', color: 'rgba(10,14,13,0.6)' }),
                    }}>
                      {isNext ? 'Próximo' : isPast ? 'Pasado' : 'TBA'}
                    </div>

                    {/* IG button — only for artists with instagram */}
                    {ev.instagram && (
                      <a
                        href={ev.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginTop: '10px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '5px 9px',
                          borderRadius: '999px',
                          background: isNext ? 'rgba(255,255,255,0.12)' : 'rgba(10,14,13,0.08)',
                          color: isNext ? '#fff' : '#0A0E0D',
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                          letterSpacing: '0.08em',
                          alignSelf: 'flex-start',
                          transition: 'opacity .15s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                      >
                        <Image
                          src="/images/brand/logo-instagram.avif"
                          alt="Instagram"
                          width={12}
                          height={12}
                          style={{
                            width: '12px',
                            height: '12px',
                            objectFit: 'contain',
                            filter: isNext ? 'brightness(0) invert(1)' : 'brightness(0)',
                          }}
                        />
                        Ver perfil
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .about-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .what-grid { grid-template-columns: 1fr !important; }
          .calendar-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
