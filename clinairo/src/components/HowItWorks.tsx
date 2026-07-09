import { motion } from "motion/react";
import { Link2, LayoutGrid, Zap, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Connect Your Clinic",
      description: "Seamlessly integrate Clinairo with your existing VoIP system and EHR/Calendar in minutes.",
      icon: Link2,
    },
    {
      title: "Customize AI Workflows",
      description: "Tailor the AI's personality, knowledge base, and booking rules to match your clinic's unique style.",
      icon: LayoutGrid,
    },
    {
      title: "Automate Patient Communication",
      description: "Deploy your AI receptionist and WhatsApp agents to handle communications across all channels 24/7.",
      icon: Zap,
    },
    {
      title: "Improve Efficiency & Bookings",
      description: "Watch your appointment rates climb as missed calls vanish and front-desk workload drops.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">The Process</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Four Steps to a <br />
              <span className="text-gradient">Self-Running Front Desk</span>
            </p>
            <p className="text-lg text-slate-600 mb-12 max-w-lg">
              We've simplified the transition to AI. Our onboarding team handles the heavy lifting so you can focus on your patients.
            </p>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-6 relative">
                  {index !== steps.length - 1 && (
                    <div className="absolute top-16 left-8 bottom-0 w-0.5 bg-slate-100 hidden sm:block" />
                  )}
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-display font-bold text-xl z-10 shadow-lg shadow-brand-100">
                    0{index + 1}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-16">
            <div className="bg-brand-50 p-10 lg:p-16 rounded-[3rem] border border-brand-100 flex flex-col items-center text-center max-w-md">
              <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-brand-600 mb-8">
                <Zap size={40} fill="currentColor" className="opacity-20" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Ready to Automate?</h3>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Experience the power of Clinairo's AI systems in your own clinic. Setup takes less than 24 hours.
              </p>
              <a 
                href="#contact" 
                className="w-full bg-brand-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-100 hover:scale-105 active:scale-95"
              >
                Book Your Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
