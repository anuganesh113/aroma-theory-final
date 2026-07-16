import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="py-32 md:py-48 bg-cream text-charcoal relative overflow-hidden"
    >
      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-5 flex justify-center">
        <h2 className="text-[15vw] font-serif leading-none whitespace-nowrap">OLFACTION</h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Narrative Text */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold" />
              <h2 className="text-eyebrow font-sans uppercase text-gold">
                Our Philosophy
              </h2>
            </div>
            
            <h3 className="text-display-section font-serif mb-10 text-charcoal">
              The Alchemy<br />of Olfaction
            </h3>
            
            <div className="space-y-6 text-charcoal/70 font-light text-body mb-10">
              <p>
                At Aroma Theory, we believe that the true essence of a meal is felt long before it touches the palate. 
                Our philosophy revolves around the profound and intricate connection between scent and taste—a delicate dance that awakens dormant memories.
              </p>
              <p>
                We use the highest quality, locally sourced ingredients and transform them using both time-honored techniques and modern culinary science. 
                Our aim is to trigger nostalgia and imagination, taking you on an immersive journey of the senses.
              </p>
            </div>
            
            {/* Pull Quote */}
            <blockquote className="relative pl-8 py-2">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold opacity-50" />
              <p className="font-serif text-display-card italic text-charcoal/90 leading-[1.6] mb-4">
                "It's not just a meal. It's a sensory narrative, crafted to linger in your memory long after the final course."
              </p>
              <footer className="text-eyebrow font-sans uppercase text-charcoal/50">
                — Julian Thorne, Head Chef
              </footer>
            </blockquote>
          </motion.div>

          {/* Editorial Image Composition */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 h-[600px] md:h-[800px] w-full flex items-center justify-center lg:justify-end">
            
            {/* Main Portrait Image */}
            <motion.div 
              style={{ y: y1 }}
              className="relative w-[85%] md:w-[70%] lg:w-[65%] h-[80%] z-10 shadow-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1000&h=1400" 
                alt="Chef smelling herbs" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-charcoal/10" />
            </motion.div>

            {/* Secondary Landscape Image overlapping */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-[10%] left-0 w-[55%] md:w-[45%] aspect-[4/3] z-20 shadow-2xl border-4 border-cream overflow-hidden hidden sm:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Detailed culinary ingredients" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
            </motion.div>

            {/* Premium CTA Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 right-4 md:right-12 z-30 bg-charcoal text-cream p-8 md:p-10 shadow-2xl max-w-[280px]"
            >
              <a href="#menu" className="group flex flex-col gap-6">
                <span className="font-serif text-display-card leading-[1.2]">
                  Experience<br/>Our Signature
                </span>
                <div className="flex items-center gap-4 text-gold">
                  <span className="text-eyebrow font-sans uppercase">View Menu</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                </div>
              </a>
            </motion.div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
