import { motion } from "motion/react";
import { Clock, MousePointerClick, ShieldCheck, Users } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Answer Rate", value: "100%", sub: "24/7 Availability" },
    { label: "Lead Recovery", value: "40%", sub: "Average Increase" },
    { label: "Response Time", value: "< 2s", sub: "Instant AI Response" },
    { label: "Staff Time Saved", value: "15h", sub: "Weekly per Clinic" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" 
                  alt="Doctor with Tablet" 
                  className="rounded-3xl shadow-lg border border-slate-100"
                />
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" 
                  alt="Modern Lab" 
                  className="rounded-3xl shadow-lg border border-slate-100"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600" 
                  alt="Medical Professional" 
                  className="rounded-3xl shadow-lg border border-slate-100"
                />
                <div className="bg-brand-600 rounded-3xl p-8 text-white aspect-square flex flex-col justify-end">
                  <p className="text-3xl font-display font-bold mb-2">98%</p>
                  <p className="text-sm text-brand-100 uppercase tracking-wider font-semibold">Patient Satisfaction Rate</p>
                </div>
              </div>
            </div>
            {/* Playful badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">HIPAA Conscious</p>
                <p className="text-xs text-slate-500">Secure AI Workflows</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Why Clinairo?</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
              Helping Modern Clinics <br />
              <span className="text-gradient">Scale With Intelligence</span>
            </p>
            <div className="space-y-6 text-lg text-slate-600 mb-10 leading-relaxed">
              <p>
                In the modern healthcare landscape, a missed call is a missed patient. Clinairo was born to solve the most common bottlenecks in clinic operations: overwhelmed front desks and slow patient response times.
              </p>
              <p>
                We provide premium AI automation that feels natural, not robotic. By automating repetitive tasks, we empower your medical staff to focus on what they do best — providing exceptional patient care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-display font-bold text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-sm font-bold text-slate-500">{stat.label}</p>
                  <p className="text-[10px] text-brand-600 font-bold uppercase tracking-wider">{stat.sub}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-brand-600 font-bold text-lg hover:gap-4 transition-all">
              Learn more about our mission
              <Clock size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
