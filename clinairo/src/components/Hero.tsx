import { motion } from "motion/react";
import { ArrowRight, PhoneCall, Calendar, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              Next-Gen Clinic Automation
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-slate-900 mb-6">
              AI Front Desk Systems for <span className="text-gradient">Modern Clinics</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Clinairo helps healthcare clinics automate patient communication, appointment booking, and front-desk operations using human-like AI voice agents and smart automation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-brand-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-200 flex items-center justify-center gap-2 group"
              >
                Book a Demo
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Clinic Owner"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="text-slate-500 font-medium">Trusted by 50+ Modern Clinics</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-square lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Clinic Reception"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Float Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[240px]"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <PhoneCall size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Missed Call Recovered</p>
                <p className="text-sm font-bold text-slate-900">Dr. Smith's Dental</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-8 glass-morphism p-5 rounded-2xl shadow-xl flex flex-col gap-3 min-w-[200px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600">Patient Confirmed</span>
                <CheckCircle2 size={14} className="text-green-500" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Sarah Jenkins</p>
                  <p className="text-[10px] text-slate-500">Teeth Whitening — 2:00 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 -left-10 bg-slate-900 p-5 rounded-2xl shadow-2xl text-white flex items-center gap-4"
            >
              <div className="bg-brand-500 p-2.5 rounded-lg">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs text-brand-200">Appointments Booked Today</p>
                <p className="text-2xl font-bold font-display">24</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StarIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default Hero;
