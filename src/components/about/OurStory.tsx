import { motion } from 'framer-motion';

const timeline = [
  { year: '2015', event: 'Founded' },
  { year: '2017', event: 'First Chef' },
  { year: '2019', event: 'First Award' },
  { year: '2022', event: 'Expansion' },
  { year: '2026', event: 'Present Day' },
];

export function OurStory() {
  return (
    <section className="py-24 md:py-32 bg-cream text-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] lg:h-[800px] rounded-[32px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200&h=1600" 
              alt="Restaurant founding" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/10" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-8 h-[1px] bg-gold" />
               <h2 className="text-eyebrow font-sans uppercase text-gold">Our Journey</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-[1.1] tracking-tight">
              A Legacy of Culinary Passion
            </h3>
            
            <div className="space-y-6 text-charcoal/70 font-light text-[15px] leading-relaxed mb-12">
              <p>
                Aroma Theory was born from a simple yet profound belief: that dining should be more than just a meal—it should be a transcendent experience. Our journey began with a passion for uncovering the deeply emotional connection between scent, taste, and memory.
              </p>
              <p>
                Driven by an unwavering commitment to quality and a love for genuine hospitality, our founders sought to create a sanctuary where every ingredient tells a story. From our humble beginnings to becoming a celebrated culinary destination, our focus has always remained on creating meaningful moments for our guests.
              </p>
            </div>

            {/* Timeline */}
            <div className="border-t border-charcoal/10 pt-10">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-charcoal mb-8">The Timeline</h4>
              <div className="flex flex-wrap gap-8 md:gap-12">
                {timeline.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <span className="text-gold font-serif text-2xl">{item.year}</span>
                    <span className="text-[10px] uppercase tracking-widest text-charcoal/50 font-medium">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
