import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'HOME', to: '/' },
  { name: 'ABOUT', to: '/about' },
  { name: 'MENU', to: '/menu' },
  { name: 'EXPERIENCE', to: '/experience' },
  { name: 'GALLERY', to: '/gallery' },
  { name: 'CONTACT', to: '/contact' },
];

export function Navbar() {
  const scrollPosition = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isScrolled = scrollPosition > 20;

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 md:px-8',
          isScrolled ? 'pt-4' : 'pt-6 md:pt-8'
        )}
      >
        <div 
          className={cn(
            'flex items-center justify-between w-full max-w-[1400px] transition-all duration-500 rounded-full px-6 md:px-10',
            isScrolled 
              ? 'bg-[rgb(30,48,70)] py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/10' 
              : 'bg-transparent py-3 md:py-4'
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img 
              src="/logo.png" 
              alt="Aroma Theory Logo" 
              className={cn(
                "w-auto object-contain transition-all duration-500 group-hover:opacity-80 group-hover:scale-105",
                isScrolled ? "h-12 md:h-16" : "h-16 md:h-24"
              )} 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-4 xl:mx-8 gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  className={cn(
                    "relative px-3 xl:px-4 py-2 text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 rounded-full",
                    isActive ? "text-gold" : "text-white/70 hover:text-white"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-indicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex shrink-0">
            <Link
              to="/#reservations"
              className={cn(
                "group relative overflow-hidden px-6 xl:px-7 py-2.5 rounded-full text-[10px] xl:text-[11px] font-button font-semibold tracking-widest transition-all duration-300 flex items-center gap-2",
                isScrolled
                  ? "bg-gold text-white hover:bg-gold-hover shadow-[0_0_20px_rgba(177,148,93,0.3)] hover:shadow-[0_0_30px_rgba(177,148,93,0.5)]"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-charcoal backdrop-blur-md"
              )}
            >
              <span className="relative z-10">RESERVE</span>
              <ChevronRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden shrink-0">
            <button
              className="text-white p-2 hover:text-gold transition-colors bg-white/5 rounded-full backdrop-blur-md border border-white/10"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[rgb(30,48,70)]/95 backdrop-blur-xl z-[60] flex flex-col"
          >
            <div className="flex justify-end p-6 md:p-8">
              <button
                className="text-white p-3 hover:text-gold transition-colors bg-white/5 rounded-full border border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center space-y-6 px-6 pb-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className={cn(
                      "text-2xl md:text-4xl font-serif tracking-widest uppercase transition-all duration-300",
                      location.pathname === link.to ? "text-gold" : "text-white hover:text-gold"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-8 w-full max-w-[300px]"
              >
                <Link
                  to="/#reservations"
                  className="flex items-center justify-center gap-2 px-10 py-4 bg-gold text-white font-button font-semibold tracking-widest rounded-full text-sm hover:bg-gold-hover transition-colors w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>RESERVE TABLE</span>
                  <ChevronRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
