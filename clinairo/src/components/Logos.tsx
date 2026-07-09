import { motion } from "motion/react";
import { Stethoscope, Activity, Sparkles, HeartPulse, ShieldPlus, Landmark } from "lucide-react";

const Logos = () => {
  const clinics = [
    { name: "BrightSmile Dental", icon: Stethoscope },
    { name: "Nova Med Spa", icon: Sparkles },
    { name: "Harmony Wellness", icon: HeartPulse },
    { name: "Peak Chiropractic", icon: Activity },
    { name: "Revive Aesthetics", icon: ShieldPlus },
    { name: "Elite Care Clinic", icon: Landmark },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-xl font-display font-bold text-slate-900 tracking-tight mb-10">
          Trusted by Industry Leaders in Modern Healthcare
        </h2>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {clinics.map((clinic, index) => (
            <motion.div
              key={clinic.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 group cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-brand-50 transition-colors">
                <clinic.icon size={18} className="text-brand-600" />
              </div>
              <span className="font-display font-semibold text-slate-900 text-sm tracking-tight uppercase group-hover:text-brand-600 transition-colors">
                {clinic.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
