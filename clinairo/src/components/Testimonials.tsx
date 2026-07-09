import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Elena Rossi",
      clinic: "BrightSmile Dental",
      text: "Clinairo has completely changed our office dynamic. Our missed call rate dropped to zero and my receptionist is finally no longer drowning in phone calls. It's like having two extra staff members for a fraction of the cost.",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Marcus Thorne",
      clinic: "Peak Chiropractic",
      text: "The integration with our scheduling software was seamless. Patients love the instant responses on WhatsApp. We've seen a 25% increase in weekly bookings since implementing Clinairo's AI booking system.",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Sarah Chen",
      clinic: "Nova Med Spa",
      text: "We were worried AI would feel impersonal for an aesthetics clinic, but the Clinairo voice agents are incredibly human-like. Patients don't even realize they're talking to an AI half the time. Truly impressed.",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full border-x border-slate-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Patient & Provider Feedback</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-slate-900">
            Trusted by Elite <span className="text-gradient">Healthcare Providers</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <Quote className="text-brand-200 mb-4" size={40} />
                <p className="text-lg text-slate-700 leading-relaxed italic mb-8">
                  "{t.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm font-medium text-brand-600">{t.clinic}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale">
           <span className="font-display font-medium text-xl text-slate-400">Harmony Physiotherapy</span>
           <span className="font-display font-medium text-xl text-slate-400">Revive Aesthetics</span>
           <span className="font-display font-medium text-xl text-slate-400">Elite Care Clinic</span>
        </div>
      </div>
    </section>
  );
};

const StarIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default Testimonials;
