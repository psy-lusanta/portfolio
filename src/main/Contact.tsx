import { motion } from 'framer-motion';
import BlurText from '../components/Blurtext';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-zinc-950 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <BlurText 
            text="Let's Work Together"
            delay={50}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4"
          />
          <p className="text-zinc-400 text-base md:text-lg max-w-md mx-auto px-4">
            Have a project in mind? I'm currently available for new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16">
          
          {/* Contact Form - Takes more space on larger screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-6 md:space-y-8"
          >
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors text-base"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors text-base"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">Message</label>
              <textarea 
                rows={7}
                className="w-full bg-zinc-900 border border-white/10 rounded-3xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors resize-y text-base"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition-all text-base md:text-lg active:scale-[0.97]"
            >
              Send Message
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-10 md:space-y-12">
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Get in touch</h3>
              <div className="space-y-8 text-zinc-300">
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 text-xl">✉️</div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Email</p>
                    <a 
                      href="mailto:cyrusjames.dev@gmail.com" 
                      className="hover:text-white transition-colors break-all"
                    >
                      cyrusjames.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 text-xl">📍</div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Location</p>
                    <p>Quezon City, Philippines</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 text-xl">⏰</div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Availability</p>
                    <p className="leading-relaxed">
                      Currently open for freelance and full-time opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium mb-5 text-zinc-400">Connect with me</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "GitHub", url: "https://github.com/psy-lusanta" },
                  { name: "LinkedIn", url: "#" },
                  { name: "Twitter", url: "#" },
                  { name: "Instagram", url: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/30 rounded-2xl transition-all text-sm text-center"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}