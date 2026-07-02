import { ExperienceHero } from '../components/experience/ExperienceHero';
import { Experience as ExperienceOptions } from '../components/Experience';
import { TheJourney } from '../components/experience/TheJourney';
import { Atmosphere } from '../components/experience/Atmosphere';
import { Reservations } from '../components/Reservations';
import { Testimonials } from '../components/Testimonials';

export function ExperiencePage() {
  return (
    <main className="min-h-screen bg-cream">
      <ExperienceHero />
      {/* We reuse the interactive accordion from the homepage */}
      <ExperienceOptions />
      <TheJourney />
      <Atmosphere />
      <Testimonials />
      <Reservations />
    </main>
  );
}
