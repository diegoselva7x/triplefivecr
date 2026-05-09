'use client';

import Image from 'next/image';
import { TEAM } from '@/lib/constants';

export default function Team() {
  return (
    <section id="team" style={{ padding: '80px 0', position: 'relative' }}>
      <span className="spark sm" style={{ top: '8%', right: '30%' }} aria-hidden="true">✦</span>

      <div className="wrap">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '36px',
          gap: '24px',
          flexWrap: 'wrap',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontWeight: 800,
            fontSize: 'clamp(38px, 4.5vw, 72px)',
            lineHeight: 0.95,
            letterSpacing: '-0.035em',
            color: '#0A0E0D',
            maxWidth: '14ch',
          }}>
            El equipo detrás de cada producción.
          </h2>
          <div className="eyebrow" style={{ color: 'rgba(10,14,13,0.6)' }}>
            5 personas · CR · Detrás de cada montaje
          </div>
        </div>

        {/* 5-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }} className="team-grid">
          {TEAM.map((member) => (
            <article
              key={member.name}
              style={{
                background: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(255,255,255,0.6)',
                borderRadius: '16px',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                backdropFilter: 'blur(10px)',
                transition: 'transform .2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
            >
              {/* Photo placeholder */}
              <div style={{
                aspectRatio: '1/1',
                borderRadius: '12px',
                background: [
                  'repeating-linear-gradient(135deg, #c9d4d0 0px, #c9d4d0 2px, #e5edea 2px, #e5edea 14px)',
                  'linear-gradient(160deg,#fff 0%, #d6dedb 50%, #fff 100%)',
                ].join(', '),
                backgroundBlendMode: 'multiply',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(10,14,13,0.08)',
              }}>
                <span style={{
                  position: 'absolute',
                  left: '8px',
                  bottom: '8px',
                  fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                  fontSize: '9px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#0A0E0D',
                  background: 'rgba(255,255,255,0.75)',
                  padding: '4px 7px',
                  borderRadius: '999px',
                }}>
                  [ Foto · {member.label} ]
                </span>
              </div>

              {/* Meta */}
              <div style={{ padding: '12px 6px 2px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontWeight: 800,
                  fontSize: '18px',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#0A0E0D',
                }}>
                  {member.name}
                </h3>
                <div style={{
                  fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(10,14,13,0.6)',
                  lineHeight: 1.3,
                  whiteSpace: 'pre-line',
                }}>
                  {member.role}
                </div>
              </div>

              {/* Instagram handle button */}
              <a
                href={member.instagram || `https://instagram.com/${member.handle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  margin: '8px 2px 2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 500,
                  padding: '6px 10px',
                  borderRadius: '999px',
                  background: '#0A0E0D',
                  color: '#fff',
                  alignSelf: 'flex-start',
                  fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                  letterSpacing: '0.04em',
                  transition: 'opacity .15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <Image
                  src="/images/brand/logo-instagram.avif"
                  alt="Instagram"
                  width={12}
                  height={12}
                  style={{ width: '12px', height: '12px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
                {member.handle} ↗
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .team-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 660px) { .team-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
