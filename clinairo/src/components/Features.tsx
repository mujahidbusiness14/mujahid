import { motion } from "motion/react";
import { Check, Globe, Shield, Zap, MessageSquare, Database, Users, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    { title: "24/7 AI Support", description: "Always on, never sick, handling calls and messages day or night.", icon: Zap },
    { title: "HIPAA-Conscious", description: "Built with security and privacy as the core foundation for medical data.", icon: Shield },
    { title: "Human-Like Voice", description: "Sophisticated AI agents that provide warm, natural, and helpful conversations.", icon: MessageSquare },
    { title: "CRM Integrations", description: "Connects instantly with platforms like Jane, Cliniko, and Salesforce.", icon: Database },
    { title: "Smart Reminders", description: "Automatic appointment follow-ups via SMS and WhatsApp to reduce no-shows.", icon: ClockIcon },
    { title: "Multilingual Support", description: "Support your patients in their preferred language effortlessly.", icon: Globe },
    { title: "Scalable Systems", description: "Perfect for single locations or enterprise-level multi-clinic groups.", icon: TrendingUp },
    { title: "Seamless Handoffs", description: "AI handles the basics and routes complex cases to human staff instantly.", icon: Users },
  ];

  return (
    <section id="features" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-brand-600/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-4">The Platform</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Sophisticated tech, <br />
              <span className="text-brand-400">Simple execution.</span>
            </p>
            <p className="text-lg text-slate-400">
              Explore the advanced features that make Clinairo the leading choice for high-volume healthcare clinics.
            </p>
          </div>
          <a href="#contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors whitespace-nowrap">
            Schedule a Free Consultation
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-400">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[2.5rem] bg-brand-600 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10 lg:w-2/3">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to transform your clinic's productivity?</h3>
            <p className="text-brand-100 text-lg mb-0">Join dozens of clinics saving an average of 15 hours per week with Clinairo.</p>
          </div>
          <div className="relative z-10 lg:w-1/3 flex lg:justify-end">
            <a href="#contact" className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold text-center w-full lg:w-auto shadow-xl hover:scale-105 transition-transform">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClockIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export default Features;
