import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function ContactInfo() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 4000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-cream text-charcoal relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">We'd love to hear from you</h2>
            <p className="text-charcoal/70 font-light mb-12 leading-relaxed">
              Whether you have a question about our seasonal menus, private dining options, or simply want to say hello, our team is ready to answer all your questions.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold mb-1">Visit Us</h4>
                  <p className="font-light text-charcoal/70">128 Culinary Ave.<br/>Metropolis, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold mb-1">Call Us</h4>
                  <p className="font-light text-charcoal/70">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold mb-1">Email Us</h4>
                  <p className="font-light text-charcoal/70">info@aromatheory.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold mb-1">Hours</h4>
                  <p className="font-light text-charcoal/70">
                    Tue - Thu: 5:30 PM - 10:00 PM<br/>
                    Fri - Sat: 5:00 PM - 11:00 PM<br/>
                    Sun: 4:00 PM - 9:00 PM<br/>
                    Mon: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-black/5"
          >
            <h3 className="text-2xl font-serif mb-6">Send a Message</h3>
            
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                  <Send className="text-green-500" size={32} />
                </div>
                <h4 className="text-xl font-serif text-charcoal">Message Sent!</h4>
                <p className="text-charcoal/60 font-light">Thank you for reaching out. We will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-semibold text-charcoal/70 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    disabled={formState === 'submitting'}
                    className="w-full bg-cream border border-charcoal/10 rounded-lg px-4 py-3 font-light focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-semibold text-charcoal/70 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    disabled={formState === 'submitting'}
                    className="w-full bg-cream border border-charcoal/10 rounded-lg px-4 py-3 font-light focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] uppercase tracking-widest font-semibold text-charcoal/70 mb-2">Subject</label>
                  <select 
                    id="subject"
                    disabled={formState === 'submitting'}
                    className="w-full bg-cream border border-charcoal/10 rounded-lg px-4 py-3 font-light focus:outline-none focus:border-gold transition-colors disabled:opacity-50 appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="private">Private Dining & Events</option>
                    <option value="press">Press & Media</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-semibold text-charcoal/70 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required 
                    disabled={formState === 'submitting'}
                    className="w-full bg-cream border border-charcoal/10 rounded-lg px-4 py-3 font-light focus:outline-none focus:border-gold transition-colors resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full bg-charcoal text-white py-4 rounded-lg text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {formState === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <>Send Message <Send size={14} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
