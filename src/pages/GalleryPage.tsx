import { GalleryHero } from '../components/gallery/GalleryHero';
import { MasonryGrid } from '../components/gallery/MasonryGrid';
import { Reservations } from '../components/Reservations';

export function GalleryPage() {
  return (
    <main className="min-h-screen bg-cream">
      <GalleryHero />
      <MasonryGrid />
      <Reservations />
    </main>
  );
}
