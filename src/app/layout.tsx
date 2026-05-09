import type { Metadata } from 'next';
import { Bricolage_Grotesque, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/providers/LenisProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-body',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: '555 Triple Five | Productora de Eventos en Costa Rica',
  description: 'Productora de eventos y experiencias en Costa Rica. Conciertos, fiestas y los mejores artistas. Conocé quiénes somos y comprá tus entradas.',
  keywords: ['555', 'triple five', 'triplefive', 'productora eventos costa rica', 'conciertos costa rica', 'fiestas cr', 'triplefivecr'],
  authors: [{ name: '555 Triple Five CR' }],
  metadataBase: new URL('https://triplefivecr.com'),
  openGraph: {
    title: '555 Triple Five | Productora de Eventos CR',
    description: 'Experiencias que no se olvidan. Productora de eventos en Costa Rica.',
    url: 'https://triplefivecr.com',
    siteName: '555 Triple Five',
    type: 'website',
    locale: 'es_CR',
    images: [
      {
        url: '/images/brand/logo-full.png',
        width: 1200,
        height: 630,
        alt: '555 Triple Five CR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '555 Triple Five | Eventos CR',
    description: 'Productora de eventos en Costa Rica.',
    images: ['/images/brand/logo-full.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bricolage.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '555 Triple Five',
              url: 'https://triplefivecr.com',
              logo: 'https://triplefivecr.com/images/brand/logo-full.png',
              description: 'Productora de eventos y experiencias en Costa Rica.',
              sameAs: ['https://www.instagram.com/triplefivecr/'],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'CR',
              },
            }),
          }}
        />
      </head>
      <body>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
