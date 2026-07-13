import { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';

const categories = [
  { id: 'starters', name: 'Starters', icon: '🍽️' },
  { id: 'salads', name: 'Salads', icon: '🥗' },
  { id: 'pasta', name: 'Pasta', icon: '🍝' },
  { id: 'mains', name: 'Main Course', icon: '🥩' },
  { id: 'seafood', name: 'Seafood', icon: '🍣' },
  { id: 'vegetarian', name: 'Vegetarian', icon: '🌱' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'beverages', name: 'Beverages', icon: '🍷' },
  { id: 'cocktails', name: 'Cocktails', icon: '🍸' },
];

export function CategoryNavigation() {
  const [activeId, setActiveId] = useState('starters');
  
  useEffect(() => {
    const handleScroll = () => {
      // Find the current active section based on scroll position
      const sections = categories.map(cat => document.getElementById(`category-${cat.id}`));
      
      let currentActive = activeId;
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section's top is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentActive = section.id.replace('category-', '');
          }
        }
      });
      
      if (currentActive !== activeId) {
        setActiveId(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(`category-${id}`);
    if (element) {
      const offset = 100; // Account for sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-[72px] md:top-[80px] z-40 bg-charcoal/95 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex overflow-x-auto hide-scrollbar py-3 md:py-4 gap-2 md:gap-4 items-center snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={cn(
                "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap transition-all duration-300 snap-start font-medium text-xs sm:text-sm border",
                activeId === cat.id 
                  ? "bg-white/10 text-gold border-white/20" 
                  : "bg-transparent text-white/70 border-white/10 hover:border-gold hover:text-white"
              )}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
