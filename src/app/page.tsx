import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import PastEvents from '@/components/sections/PastEvents';
import NextEvent from '@/components/sections/NextEvent';

export default function Home() {
  return (
    <main>
      {/* Mint gradient page wrapper: Hero + About + Team */}
      <div className="page">
        <Hero />
        <About />
        <Team />
      </div>
      {/* Dark section: Events */}
      <PastEvents />
      {/* Inverted mint gradient: Next Event */}
      <NextEvent />
    </main>
  );
}
