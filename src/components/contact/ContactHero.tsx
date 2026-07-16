import { motion } from 'framer-motion';

export function ContactHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2000&h=1200" 
          alt="Restaurant interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-cream" />
      </div>

      <div className="relative z-10 text-center px-6 md:px-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="w-12 h-[1px] bg-gold" />
             <h2 className="text-eyebrow font-sans uppercase text-gold">Reach Out</h2>
             <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-cream leading-[1.1] tracking-tight">
            Get in Touch
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
