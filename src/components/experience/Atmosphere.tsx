import { motion } from 'framer-motion';

export function Atmosphere() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000&h=1200" 
          alt="Atmosphere" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-eyebrow font-sans uppercase text-gold mb-4">The Atmosphere</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Designed to Captivate
            </h3>
            <p className="text-cream/80 font-light leading-relaxed mb-6">
              Our space is more than a restaurant; it is a canvas designed to enhance your sensory experience. The lighting shifts subtly with each course, the acoustics are tuned to allow intimate conversation, and the decor blends modern elegance with natural elements.
            </p>
            <p className="text-cream/80 font-light leading-relaxed">
              Every chair, every piece of cutlery, and every glass has been selected to feel perfect in your hands, ensuring nothing distracts from the artistry on your plate.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.img 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=600&h=800" 
              alt="Interior detail" 
              className="rounded-lg object-cover h-[300px] w-full"
            />
            <motion.img 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80&w=600&h=800" 
              alt="Table setting" 
              className="rounded-lg object-cover h-[300px] w-full mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
