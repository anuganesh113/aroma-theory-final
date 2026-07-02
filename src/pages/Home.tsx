import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { MenuHighlights } from '../components/MenuHighlights';
import { Experience } from '../components/Experience';
import { Gallery } from '../components/Gallery';
import { Reservations } from '../components/Reservations';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MenuHighlights />
      <Experience />
      <Gallery />
      <Reservations />
      <Testimonials />
    </main>
  );
}
