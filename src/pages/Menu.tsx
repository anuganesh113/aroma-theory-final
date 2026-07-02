import { MenuHero } from '../components/menu/MenuHero';
import { CategoryNavigation } from '../components/menu/CategoryNavigation';
import { FeaturedDishes } from '../components/menu/FeaturedDishes';
import { MenuSection } from '../components/menu/MenuSection';
import { ChefRecommendations } from '../components/menu/ChefRecommendations';
import { TastingMenu } from '../components/menu/TastingMenu';
import { SeasonalSpecials } from '../components/menu/SeasonalSpecials';
import { DessertGallery } from '../components/menu/DessertGallery';
import { DrinksSection } from '../components/menu/DrinksSection';
import { DietaryGuide } from '../components/menu/DietaryGuide';
import { CustomerFavorites } from '../components/menu/CustomerFavorites';
import { FAQSection } from '../components/menu/FAQSection';
import { MenuCTASection } from '../components/menu/MenuCTASection';

import { startersData, saladsData, mainsData, dessertsData } from '../data/menuData';

export function MenuPage() {
  return (
    <main className="min-h-screen bg-charcoal text-cream">
      <MenuHero />
      <CategoryNavigation />
      <FeaturedDishes />
      
      {/* Category Sections */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <MenuSection id="starters" title="Starters" dishes={startersData} />
        <MenuSection id="salads" title="Salads" dishes={saladsData} />
        <MenuSection id="mains" title="Main Course" dishes={mainsData} />
      </div>

      <ChefRecommendations />
      <TastingMenu />
      <SeasonalSpecials />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <MenuSection id="desserts" title="A La Carte Desserts" dishes={dessertsData} />
      </div>
      
      <DessertGallery />
      <DrinksSection />
      <DietaryGuide />
      <CustomerFavorites />
      <FAQSection />
      <MenuCTASection />
    </main>
  );
}
