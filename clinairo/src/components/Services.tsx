import { motion } from "motion/react";
import { Headphones, Calendar, MessageSquare, PhoneMissed, Settings2, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "AI Receptionist System",
      description: "24/7 patient call answering with human-like AI voice. Handles bookings, FAQs, and routing without ever missing a beat.",
      icon: Headphones,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "AI Appointment Booking",
      description: "Automated scheduling with seamless calendar integration. Confirms, reschedules, and optimizes your clinic's capacity.",
      icon: Calendar,
      color: "bg-brand-50 text-brand-600",
    },
    {
      title: "WhatsApp Patient Support",
      description: "Instant responses on the world's most popular messaging app. Reminders, follow-ups, and support delivered instantly.",
      icon: MessageSquare,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Missed Call Recovery",
      description: "Never lose a lead again. Automatic SMS follow-ups for every missed call ensure patients feel heard and re-engaged.",
      icon: PhoneMissed,
      color: "bg-red-50 text-red-600",
    },
    {
      title: "Clinic Workflow Automation",
      description: "Deep CRM integrations and desk automation. Streamline tasks and let your staff focus on high-quality patient care.",
      icon: Settings2,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Performance Analytics",
      description: "Detailed insights into call volume, booking rates, and patient satisfaction to continuously improve your clinic's growth.",
      icon: BarChart3,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Our Services</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Elite AI Solutions for <br /><span className="text-gradient">Modern Healthcare</span>
          </p>
          <p className="text-lg text-slate-600">
            We provide a comprehensive suite of AI tools designed specifically for clinics that prioritize patient experience and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-200 transition-all hover:shadow-xl hover:shadow-slate-200/50 group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 flex items-center text-sm font-bold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <Settings2 size={14} className="ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
