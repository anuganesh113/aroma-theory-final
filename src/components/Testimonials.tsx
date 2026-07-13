import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, Award, Users, Utensils, Leaf, Sparkles } from 'lucide-react';

const testimonialData = [
  {
    name: "Sarah Williams",
    role: "Food Blogger",
    date: "October 12, 2026",
    text: "The attention to detail was incredible. Every dish was beautifully presented, the flavors were unforgettable, and the service made us feel truly special. We can't wait to return.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Michael Chen",
    role: "Local Guide",
    date: "September 28, 2026",
    text: "One of the finest dining experiences we've ever had. From the warm welcome to the final dessert, everything exceeded expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Emma & James",
    role: "Anniversary Celebration",
    date: "September 15, 2026",
    text: "A perfect place for anniversaries and celebrations. Elegant atmosphere, outstanding cuisine, and exceptional hospitality.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const trustIndicators = [
  { icon: <Star size={24} strokeWidth={1.5} />, text: '4.9 Average Rating' },
  { icon: <Users size={24} strokeWidth={1.5} />, text: '2,500+ Happy Guests' },
  { icon: <Award size={24} strokeWidth={1.5} />, text: 'Award-Winning Dining' },
  { icon: <Utensils size={24} strokeWidth={1.5} />, text: 'Exceptional Service' },
  { icon: <Leaf size={24} strokeWidth={1.5} />, text: 'Fresh Ingredients Daily' }
];

// CountUp Component for 2500+
function CountUp({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 lg:py-40 bg-cream text-charcoal relative overflow-hidden">
      
      {/* Background Textures & Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-multiply" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
           
      {/* Blurred Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full bg-gold/15 blur-[120px]" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]" 
        />
      </div>
      
      {/* Decorative Particles / Leaves */}
      <div className="absolute top-[15%] left-[10%] text-gold/20 -rotate-45 pointer-events-none">
        <Leaf size={32} strokeWidth={1} />
      </div>
      <div className="absolute bottom-[40%] right-[8%] text-gold/20 rotate-12 pointer-events-none">
        <Sparkles size={24} strokeWidth={1} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="flex gap-1 text-gold">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold">Guest Experiences</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display-section font-serif text-charcoal mb-6 tracking-tight leading-[1.1]"
          >
            What Our Guests<br className="hidden md:block"/> Are Saying
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-charcoal/60 font-light text-[15px] leading-relaxed max-w-xl mx-auto"
          >
            From romantic dinners to family celebrations, discover why guests return to Aroma Theory for unforgettable dining experiences.
          </motion.p>
          
          {/* Rating Summary with Count Up */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col items-center justify-center py-6 px-12 bg-white/40 backdrop-blur-md rounded-2xl border border-gold/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="flex gap-1 text-gold mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={18} fill="currentColor" stroke="none" />
              ))}
            </div>
            <div className="text-display-card font-serif text-charcoal mb-2">4.9 / 5</div>
            <div className="text-[10px] uppercase tracking-widest font-medium text-charcoal/50">
              Based on <CountUp end={2500} />+ Happy Guests<br/>
              <span className="opacity-70 mt-1 block">Trusted by Locals & Visitors</span>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Cards (Mobile: Snap Scroll Carousel, Desktop: Grid) */}
        <div className="flex overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar">
          {testimonialData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="snap-center shrink-0 w-[85vw] sm:w-[340px] md:w-auto group bg-white/60 backdrop-blur-lg p-8 md:p-10 rounded-[24px] border border-gold/15 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(200,169,106,0.15)] hover:border-gold/40 hover:-translate-y-2 transition-all duration-500 relative flex flex-col"
            >
              <Quote className="absolute top-8 right-8 text-gold/10 group-hover:text-gold/20 transition-colors duration-500" size={50} strokeWidth={1} />
              
              <div className="flex gap-1 text-gold mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              
              <p className="font-serif text-lg md:text-xl leading-[1.7] text-charcoal mb-10 relative z-10 flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto border-t border-charcoal/5 pt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border border-gold/30 shadow-sm"
                />
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-charcoal text-[13px]">{testimonial.name}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-0.5">
                    <p className="text-charcoal/50 text-[10px] font-medium uppercase tracking-widest">
                      {testimonial.role}
                    </p>
                    <span className="hidden sm:inline text-charcoal/30">•</span>
                    <span className="text-charcoal/40 text-[10px] font-medium">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 pt-8 md:pt-16 mb-24 md:mb-32"
        >
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex flex-col items-center gap-3 text-charcoal/60 hover:text-gold transition-colors duration-300">
              <div className="text-gold/80 group-hover:scale-110 transition-transform">
                {indicator.icon}
              </div>
              <span className="text-[9px] uppercase tracking-widest font-semibold text-center max-w-[120px]">
                {indicator.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Call To Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-charcoal text-cream rounded-[32px] md:rounded-[40px] p-12 md:p-24 relative overflow-hidden shadow-2xl"
        >
          {/* CTA Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
               
          <div className="absolute -top-24 -right-24 text-white/5 rotate-45 pointer-events-none">
             <Leaf size={200} strokeWidth={0.5} />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="text-display-section font-serif mb-6 leading-[1.1] tracking-tight">
              Create Your Own<br/>Memorable Experience
            </h3>
            <p className="text-cream/60 font-light text-sm md:text-[15px] mb-10 md:mb-12 leading-relaxed max-w-lg">
              Join thousands of satisfied guests and discover why Aroma Theory is one of the city's favorite dining destinations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
              <a 
                href="#reservations" 
                className="bg-gold text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-gold-hover hover:scale-105 transition-all text-center shadow-[0_0_30px_rgba(200,169,106,0.3)]"
              >
                Reserve a Table
              </a>
              <a 
                href="#menu" 
                className="bg-transparent border border-cream/30 text-cream px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-cream hover:text-charcoal transition-colors text-center"
              >
                View Our Menu
              </a>
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Hide scrollbar utility for the carousel */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
