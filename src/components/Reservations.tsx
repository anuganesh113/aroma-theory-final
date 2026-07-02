import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Check } from 'lucide-react';

export function Reservations() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  return (
    <section id="reservations" className="bg-cream text-charcoal relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
        
        {/* LEFT COLUMN: Editorial Image */}
        <div className="hidden lg:block relative h-full w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200&h=1600" 
              alt="Romantic table setting" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for mood */}
            <div className="absolute inset-0 bg-charcoal/20 mix-blend-overlay" />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 md:py-32 relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto lg:mx-0 w-full"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-8 h-px bg-gold" />
               <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Join Us</h2>
            </div>
            
            <h3 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight leading-[1.1]">
              Reserve<br/>Your Table
            </h3>
            
            <p className="text-charcoal/50 font-light text-[13px] mb-12 leading-relaxed">
              Reservations are available up to three months in advance. 
              For private events or parties larger than 8, please contact our concierge directly.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="peer w-full bg-transparent border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors text-charcoal placeholder-transparent"
                    placeholder="Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 top-2 text-[11px] uppercase tracking-[0.15em] text-charcoal/40 transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-gold peer-valid:-top-4 peer-valid:text-[9px]"
                  >
                    Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="peer w-full bg-transparent border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors text-charcoal placeholder-transparent"
                    placeholder="Email"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 top-2 text-[11px] uppercase tracking-[0.15em] text-charcoal/40 transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-gold peer-valid:-top-4 peer-valid:text-[9px]"
                  >
                    Email
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="relative group">
                  <input 
                    type="date" 
                    id="date" 
                    required
                    className="peer w-full bg-transparent border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors text-charcoal placeholder-transparent"
                  />
                  <label 
                    htmlFor="date" 
                    className="absolute left-0 -top-4 text-[9px] uppercase tracking-[0.15em] text-charcoal/40 transition-all peer-focus:text-gold"
                  >
                    Date
                  </label>
                </div>
                
                <div className="relative group">
                  <select 
                    id="time" 
                    required
                    className="peer w-full bg-transparent border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors text-charcoal cursor-pointer appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-charcoal/40">Select</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                  <label 
                    htmlFor="time" 
                    className="absolute left-0 -top-4 text-[9px] uppercase tracking-[0.15em] text-charcoal/40 transition-all peer-focus:text-gold"
                  >
                    Time
                  </label>
                </div>
                
                <div className="relative group">
                  <select 
                    id="guests" 
                    required
                    className="peer w-full bg-transparent border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors text-charcoal cursor-pointer appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                  <label 
                    htmlFor="guests" 
                    className="absolute left-0 -top-4 text-[9px] uppercase tracking-[0.15em] text-charcoal/40 transition-all peer-focus:text-gold"
                  >
                    Guests
                  </label>
                </div>
              </div>

              <div className="pt-8">
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className="w-full relative overflow-hidden group border border-charcoal bg-charcoal text-white py-4 rounded-full transition-colors disabled:opacity-70 disabled:cursor-not-allowed h-14"
                >
                  <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  
                  <div className="relative z-10 flex justify-center items-center h-full">
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <Loader2 className="animate-spin" size={18} />
                        </motion.div>
                      ) : isSuccess ? (
                        <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-charcoal">
                          <Check size={18} /> Confirmed
                        </motion.div>
                      ) : (
                        <motion.span key="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[10px] uppercase tracking-[0.2em] font-semibold">
                          Request Reservation
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </div>
            </form>
            
            {/* Elegant Contact Footer */}
            <div className="mt-20 pt-10 border-t border-charcoal/10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[9px] uppercase tracking-[0.2em] font-semibold mb-3 text-charcoal">Location</h4>
                <p className="text-charcoal/60 font-light text-xs leading-relaxed">
                  128 Culinary Avenue<br/>
                  Metropolis, NY 10001
                </p>
              </div>
              <div>
                <h4 className="text-[9px] uppercase tracking-[0.2em] font-semibold mb-3 text-charcoal">Hours</h4>
                <p className="text-charcoal/60 font-light text-xs leading-relaxed">
                  Tue - Sun: 5:00 PM – 11:00 PM<br/>
                  Monday: Closed
                </p>
              </div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
