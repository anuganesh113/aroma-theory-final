import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-charcoal/20 pt-20 pb-10 text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img src="/logo.png" alt="Aroma Theory Logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="font-light text-cream/60 text-sm leading-relaxed mb-6">
              A modern fine-dining experience redefining the relationship between scent and taste.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream/50 hover:text-amber transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-cream/50 hover:text-amber transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-cream/50 hover:text-amber transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-6">Explore</h3>
            <ul className="space-y-3 font-light text-cream/70 text-sm">
              <li><Link to="/about" className="hover:text-amber transition-colors">Our Philosophy</Link></li>
              <li><Link to="/menu" className="hover:text-amber transition-colors">Menus</Link></li>
              <li><Link to="/experience" className="hover:text-amber transition-colors">Experiences</Link></li>
              <li><Link to="/gallery" className="hover:text-amber transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-amber transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-6">Contact</h3>
            <ul className="space-y-3 font-light text-cream/70 text-sm">
              <li>128 Culinary Ave.</li>
              <li>Metropolis, NY 10001</li>
              <li className="pt-2">+1 (555) 123-4567</li>
              <li>info@aromatheory.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-6">Newsletter</h3>
            <p className="font-light text-cream/60 text-sm leading-relaxed mb-4">
              Subscribe to receive updates on seasonal menus and exclusive events.
            </p>
            <form className="flex border-b border-cream/30 pb-2 focus-within:border-amber transition-colors">
              <input 
                type="email" 
                placeholder="Email address" 
                required
                className="bg-transparent w-full focus:outline-none font-light text-sm text-cream placeholder:text-cream/30"
              />
              <button 
                type="submit"
                className="text-xs uppercase tracking-widest font-medium text-amber hover:text-amber-hover transition-colors ml-2"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-cream/40">
          <p>&copy; {new Date().getFullYear()} Aroma Theory. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
