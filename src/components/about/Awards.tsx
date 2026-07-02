import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const awards = [
  { year: "2025", title: "3 Michelin Stars", org: "The Michelin Guide" },
  { year: "2024", title: "Best Fine Dining", org: "World Culinary Awards" },
  { year: "2023", title: "Chef of the Year", org: "James Beard Foundation" },
  { year: "2023", title: "Outstanding Wine Program", org: "Wine Spectator" }
];

export function Awards() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-8 h-[1px] bg-gold" />
                 <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Excellence</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-[1.1] tracking-tight">
                Awards & Recognition
              </h3>
              <p className="text-cream/60 font-light text-[15px] leading-relaxed mb-8">
                Our relentless pursuit of perfection has been recognized by the world's most prestigious culinary institutions.
              </p>
              
              <div className="flex items-center gap-4 border border-gold/20 bg-gold/5 p-6 rounded-2xl w-fit">
                <div className="flex gap-1 text-gold">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <div className="h-4 w-[1px] bg-cream/20" />
                <span className="text-[10px] uppercase tracking-widest font-semibold">4.9 Guest Rating</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-cream/10 p-8 rounded-3xl hover:bg-white/5 transition-colors group relative overflow-hidden"
                >
                  <Award size={48} strokeWidth={0.5} className="text-gold/20 absolute -bottom-4 -right-4 group-hover:text-gold/40 transition-colors" />
                  <span className="text-gold font-serif text-xl block mb-4">{award.year}</span>
                  <h4 className="text-2xl font-serif mb-2 text-cream">{award.title}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-cream/50 font-medium">{award.org}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
