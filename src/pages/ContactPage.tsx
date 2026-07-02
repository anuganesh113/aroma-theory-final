import { ContactHero } from '../components/contact/ContactHero';
import { ContactInfo } from '../components/contact/ContactInfo';
import { Reservations } from '../components/Reservations';

export function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      <ContactHero />
      <ContactInfo />
      <Reservations />
    </main>
  );
}
