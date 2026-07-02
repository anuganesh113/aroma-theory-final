import { AboutHero } from '../components/about/AboutHero';
import { OurStory } from '../components/about/OurStory';
import { Philosophy } from '../components/about/Philosophy';
import { MeetTheChef } from '../components/about/MeetTheChef';
import { SignatureExperience } from '../components/about/SignatureExperience';
import { Ingredients } from '../components/about/Ingredients';
import { GalleryPreview } from '../components/about/GalleryPreview';
import { Awards } from '../components/about/Awards';
import { Testimonials } from '../components/Testimonials';
import { WhyChooseUs } from '../components/about/WhyChooseUs';
import { Sustainability } from '../components/about/Sustainability';
import { CTASection } from '../components/about/CTASection';

export function About() {
  return (
    <main className="min-h-screen bg-cream">
      <AboutHero />
      <OurStory />
      <Philosophy />
      <MeetTheChef />
      <SignatureExperience />
      <Ingredients />
      <GalleryPreview />
      <Awards />
      <Testimonials />
      <WhyChooseUs />
      <Sustainability />
      <CTASection />
    </main>
  );
}
