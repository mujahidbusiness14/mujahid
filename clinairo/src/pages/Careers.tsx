import { motion } from "motion/react";
import { Briefcase, Globe, Zap, Heart, ArrowRight } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "AI Solutions Engineer",
      type: "Full-time",
      location: "Remote / Hybrid",
      category: "Engineering",
    },
    {
      title: "Healthcare Implementation Specialist",
      type: "Full-time",
      location: "Remote",
      category: "Success",
    },
    {
      title: "Senior Product Designer (SaaS)",
      type: "Full-time",
      location: "Remote",
      category: "Design",
    },
    {
      title: "Growth Marketing Manager",
      type: "Full-time",
      location: "Remote",
      category: "Marketing",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">
            Join the Future of <span className="text-gradient">Healthcare AI</span>
          </h1>
          <p className="text-xl text-slate-600">
            We're building the next generation of intelligent tools for clinics worldwide. Join us in our mission to automate healthcare operations and improve patient experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Remote-First Culture</h3>
            <p className="text-slate-500">Work from anywhere in the world. We value talent and outcomes over office presence.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">High Innovation</h3>
            <p className="text-slate-500">We ship fast and leverage the latest AI models to solve real-world healthcare problems.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Human Impact</h3>
            <p className="text-slate-500">Every line of code you write helps clinic staff save time and patients get better care.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 px-2">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((job) => (
              <motion.div
                key={job.title}
                whileHover={{ x: 10 }}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-600 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">{job.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{job.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                  <p className="text-sm text-slate-500">{job.location}</p>
                </div>
                <div className="flex items-center gap-2 text-brand-600 font-bold group-hover:gap-4 transition-all">
                  Apply Now
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
