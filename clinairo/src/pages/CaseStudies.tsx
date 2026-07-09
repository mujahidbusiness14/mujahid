import { motion } from "motion/react";
import { 
  Star, 
  Check, 
  X, 
  ChevronRight, 
  Phone, 
  MessageSquare, 
  PhoneMissed, 
  HelpCircle, 
  Calendar, 
  Clock, 
  Bot, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Moon, 
  Timer, 
  Hourglass, 
  UserCheck 
} from "lucide-react";
// @ts-ignore
const caseStudyVideo = "/Dr_Abubakar-Feedback-About-Clinairo.mp4";

const CaseStudies = () => {
  const challengeItems = [
    "When Dr. Abubakar Siddique was unavailable during consultations, appointment requests could not be handled",
    "When all assistants were simultaneously occupied, incoming patient calls went unanswered",
    "Zero after-hours coverage — patients calling evenings and weekends received no response",
    "Patients seeking clinic information after hours had no way to get answers",
    "No fallback system when both doctor and assistants were unavailable simultaneously"
  ];

  const solutionItems = [
    "24/7 AI Voice Receptionist answering all inbound patient calls",
    "Automated patient information delivery covering clinic details and treated conditions",
    "Automated appointment scheduling at any hour without staff involvement",
    "Seamless AI-to-human handoff connecting patients to assistants when needed",
    "Hybrid AI and human workflow creating always-available patient communication"
  ];

  const stats = [
    {
      metric: "Clinic Availability",
      before: "Office hours only",
      after: "24/7 — Always On",
      icon: Clock,
      color: "brand"
    },
    {
      metric: "After-Hours Inquiries",
      before: "0 handled",
      after: "47 per month",
      icon: Moon,
      color: "blue"
    },
    {
      metric: "Appointments via AI",
      before: "0 automated",
      after: "31 booked",
      icon: Calendar,
      color: "brand"
    },
    {
      metric: "Missed Calls Recovered",
      before: "0",
      after: "23 per month",
      icon: PhoneMissed,
      color: "red"
    },
    {
      metric: "Response Time",
      before: "Hours or next day",
      after: "Under 5 seconds",
      icon: Timer,
      color: "green"
    },
    {
      metric: "Staff Hours Saved",
      before: "0",
      after: "6 hours per week",
      icon: Hourglass,
      color: "amber"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white overflow-hidden">
      {/* 1. PAGE HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest text-brand-600 uppercase mb-4 block">
            Client Results
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight mb-6">
            Real Clinics. Real Results.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            See how Clinairo's AI Front Desk transforms patient communication for healthcare practices across the industry.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* 2. CASE STUDY CARD — DR. ABUBAKAR SIDDIQUE */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl p-6 md:p-12 mb-20">
          
          {/* CARD HEADER */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-slate-100 pb-8 mb-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-brand-50 text-brand-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Neurology Practice
                </span>
                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2.5 py-1 rounded-full text-xs font-bold">
                  <Star size={14} fill="currentColor" />
                  <span>4.9 Stars</span>
                </div>
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
                Dr. Abubakar Siddique
              </h2>
              <p className="text-lg text-slate-600 font-medium mt-1">
                Consultant Interventional Neurologist & Stroke Neurologist
              </p>
              <span className="inline-block text-xs font-mono font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg mt-4 border border-slate-200">
                MBBS · FCPS (Neurology) · PMDC Verified · 18 Years Experience
              </span>
            </div>
          </div>

          {/* PART 1 — VIDEO SECTION */}
          <div className="mb-12 text-center">
            <h3 className="text-sm font-bold tracking-wider text-brand-600 uppercase mb-4 text-center">
              Watch Dr. Abubakar Siddique Share His Experience
            </h3>
            <div className="relative max-w-2xl mx-auto h-[600px] aspect-[9/16] w-auto rounded-3xl overflow-hidden bg-slate-900 shadow-xl border-4 border-slate-50 group">
              <video 
                src={caseStudyVideo} 
                controls 
                preload="metadata" 
                className="w-full h-full object-contain"
                poster="https://images.unsplash.com/photo-1576091160550-217359bc211a?auto=format&fit=crop&q=80&w=1000"
              />
            </div>
            <p className="text-center text-sm text-slate-500 italic mt-4 max-w-2xl mx-auto">
              "Dr. Abubakar Siddique shares how Clinairo transformed patient appointment management at his neurology clinic."
            </p>
          </div>

          <hr className="border-slate-100 my-10" />

          {/* PART 2 — WRITTEN CASE STUDY SECTION */}
          <div className="space-y-12">
            
            {/* THE PROBLEM */}
            <div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-red-500 rounded-full inline-block"></span>
                The Challenge
              </h3>
              <div className="pl-4 border-l-2 border-red-200 space-y-4">
                {challengeItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-sm mt-1">•</span>
                    <p className="text-slate-600 leading-relaxed text-base">{item}</p>
                  </div>
                ))}
              </div>

              {/* DOCTOR'S QUOTE (Problem) */}
              <div className="mt-8 bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
                <span className="absolute top-2 left-4 text-6xl font-serif text-brand-200 select-none">“</span>
                <blockquote className="relative z-10 pl-6 text-slate-700 italic text-lg font-medium leading-relaxed">
                  "I had a problem — sometimes I am not available, my assistants are not available. And I decided to use some artificial intelligence system for this purpose."
                </blockquote>
                <cite className="block pl-6 mt-3 text-sm font-bold text-slate-900 not-italic">
                  — Dr. Abubakar Siddique
                </cite>
              </div>
            </div>

            {/* WHAT CLINAIRO IMPLEMENTED */}
            <div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-brand-600 rounded-full inline-block"></span>
                The Solution
              </h3>
              <div className="pl-4 border-l-2 border-brand-200 space-y-4">
                {solutionItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-brand-600 font-bold text-sm mt-1">•</span>
                    <p className="text-slate-600 leading-relaxed text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RESULTS TABLE */}
            <div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-green-500 rounded-full inline-block"></span>
                The Results
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, idx) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider font-display">
                          {stat.metric}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-600">
                          <IconComponent size={20} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 font-bold uppercase">Before:</span>
                          <span className="text-sm text-slate-500 line-through">{stat.before}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 font-bold uppercase">After:</span>
                          <span className="text-lg font-bold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-md">
                            {stat.after}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* MAIN TESTIMONIAL QUOTE */}
            <div className="bg-brand-50/40 border-l-4 border-brand-600 p-6 md:p-8 rounded-r-2xl relative">
              <span className="absolute top-2 left-6 text-7xl font-serif text-brand-100 select-none">“</span>
              <p className="relative z-10 pl-6 text-slate-700 font-medium text-lg leading-relaxed italic">
                "After adopting this system, I have no problem in giving appointments to my patients any time of the day. 24/7 my system is available. My patients always get information about my clinic, about the diseases I treat. It is very easy for them to make an appointment through the AI system. And through the AI system, they can also contact my assistants. With this hybrid system, I have an excellent approach towards the appointment of my patients. I am very easy and very happy after adopting the Clinairo system."
              </p>
              <cite className="block pl-6 mt-4 text-sm font-bold text-slate-900 not-italic">
                — Dr. Abubakar Siddique, Consultant Neurologist
              </cite>
            </div>

          </div>
        </div>

        {/* 3. HOW IT WORKS VISUALIZATION SECTION */}
        <section 
          className="relative py-16 rounded-[3rem] border border-slate-200 overflow-hidden mb-20 bg-cover bg-center shadow-xl"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600')" }}
        >
          {/* Glassmorphic overlay */}
          <div className="absolute inset-0 bg-white/92 backdrop-blur-md z-0"></div>

          <div className="relative z-10 px-6 md:px-12">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight uppercase">
                How It Works
              </h2>
            </div>

            {/* THREE-COLUMN FLOW DIAGRAM */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 xl:gap-6 items-center mb-16">
              {/* Column 1 - Patients */}
              <div className="lg:col-span-3 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center lg:text-left mb-4">
                  Patients
                </div>
                
                <div className="bg-white p-2.5 xl:p-3.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2 xl:gap-3">
                  <div className="w-7 h-7 xl:w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone size={14} />
                  </div>
                  <span className="text-[11px] xl:text-sm font-medium text-slate-700 leading-tight">Calls after hours</span>
                </div>

                <div className="bg-white p-2.5 xl:p-3.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2 xl:gap-3">
                  <div className="w-7 h-7 xl:w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <MessageSquare size={14} />
                  </div>
                  <span className="text-[11px] xl:text-sm font-medium text-slate-700 leading-tight">Sends WhatsApp message</span>
                </div>

                <div className="bg-white p-2.5 xl:p-3.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2 xl:gap-3">
                  <div className="w-7 h-7 xl:w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <PhoneMissed size={14} />
                  </div>
                  <span className="text-[11px] xl:text-sm font-medium text-slate-700 leading-tight">Call goes unanswered</span>
                </div>

                <div className="bg-white p-2.5 xl:p-3.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2 xl:gap-3">
                  <div className="w-7 h-7 xl:w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <HelpCircle size={14} />
                  </div>
                  <span className="text-[11px] xl:text-sm font-medium text-slate-700 leading-tight">Asks a FAQ question</span>
                </div>

                <div className="bg-white p-2.5 xl:p-3.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2 xl:gap-3">
                  <div className="w-7 h-7 xl:w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <Calendar size={14} />
                  </div>
                  <span className="text-[11px] xl:text-sm font-medium text-slate-700 leading-tight">Needs appointment reminder</span>
                </div>
              </div>

              {/* Connection Arrow 1 */}
              <div className="lg:col-span-1 flex flex-col items-center justify-center text-center py-4 lg:py-0">
                <span className="text-[9px] xl:text-[11px] font-bold text-brand-600 uppercase tracking-wider mb-2 leading-tight text-center px-1">
                  Patient Inquiries 24/7
                </span>
                <div className="flex lg:flex-col gap-1 items-center justify-center text-brand-600 animate-pulse">
                  <ChevronRight className="rotate-90 lg:rotate-0 shrink-0" size={16} />
                  <ChevronRight className="rotate-90 lg:rotate-0 shrink-0" size={16} />
                </div>
              </div>

              {/* Column 2 - Clinairo AI Front Desk */}
              <div className="lg:col-span-4 bg-brand-600 text-white rounded-3xl p-4 xl:p-6 shadow-xl relative overflow-hidden border border-brand-500">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-brand-500 rounded-full opacity-30 blur-2xl"></div>
                
                <div className="text-center mb-6 relative z-10">
                  <div className="w-10 h-10 bg-white text-brand-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <Bot size={20} />
                  </div>
                  <h4 className="text-lg xl:text-xl font-bold font-display tracking-tight">Clinairo AI Front Desk</h4>
                  <p className="text-[10px] text-brand-200 mt-0.5 uppercase tracking-wider">Core Intelligence Hub</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 relative z-10">
                  {[
                    "24/7 AI Receptionist",
                    "AI Appointment Booking",
                    "Missed Call Text-Back",
                    "WhatsApp Support",
                    "Appointment Reminders",
                    "Patient FAQ Assistant",
                    "CRM Synchronization",
                    "Daily Reports"
                  ].map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="bg-brand-700/60 p-2 xl:p-2.5 rounded-xl border border-brand-500/40 flex items-center gap-1.5 text-left"
                    >
                      <CheckCircle2 size={12} className="text-brand-300 shrink-0" />
                      <span className="text-[10px] xl:text-xs font-semibold leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connection Arrow 2 */}
              <div className="lg:col-span-1 flex flex-col items-center justify-center text-center py-4 lg:py-0">
                <span className="text-[9px] xl:text-[11px] font-bold text-green-600 uppercase tracking-wider mb-2 leading-tight text-center px-1">
                  Automated Actions
                </span>
                <div className="flex lg:flex-col gap-1 items-center justify-center text-green-600 animate-pulse">
                  <ChevronRight className="rotate-90 lg:rotate-0 shrink-0" size={16} />
                  <ChevronRight className="rotate-90 lg:rotate-0 shrink-0" size={16} />
                </div>
              </div>

              {/* Column 3 - Bright Smile Dental */}
              <div className="lg:col-span-3 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center lg:text-left mb-4">
                  Bright Smile Dental
                </div>

                <div className="bg-white p-2.5 xl:p-3.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2 xl:gap-3">
                  <div className="w-7 h-7 xl:w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="text-[11px] xl:text-sm font-medium text-slate-700 leading-tight">Every call answered</span>
                </div>

                <div className="bg-white p-2.5 xl:p-3.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2 xl:gap-3">
                  <div className="w-7 h-7 xl:w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="text-[11px] xl:text-sm font-medium text-slate-700 leading-tight">Appointment booked automatically</span>
                </div>

                <div className="bg-white p-2.5 xl:p-3.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2 xl:gap-3">
                  <div className="w-7 h-7 xl:w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="text-[11px] xl:text-sm font-medium text-slate-700 leading-tight">Patient receives SMS confirmation</span>
                </div>

                <div className="bg-white p-2.5 xl:p-3.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2 xl:gap-3">
                  <div className="w-7 h-7 xl:w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="text-[11px] xl:text-sm font-medium text-slate-700 leading-tight">Doctor notified instantly</span>
                </div>

                <div className="bg-white p-2.5 xl:p-3.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2 xl:gap-3">
                  <div className="w-7 h-7 xl:w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="text-[11px] xl:text-sm font-medium text-slate-700 leading-tight">Daily report delivered</span>
                </div>
              </div>
            </div>

            {/* Core Stat Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 relative z-10">
              <div className="bg-white/75 backdrop-blur-sm p-6 rounded-[2rem] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex items-start gap-4 hover:bg-white hover:shadow-[0_12px_40px_rgb(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-white text-brand-600 flex items-center justify-center shrink-0 border border-brand-100/40 shadow-sm">
                  <Phone size={22} className="stroke-[2]" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-slate-800 text-[17px] leading-snug">Zero Missed Calls</h5>
                  <p className="text-sm text-slate-500 font-normal leading-relaxed mt-1">AI captures every patient opportunity 24/7</p>
                </div>
              </div>

              <div className="bg-white/75 backdrop-blur-sm p-6 rounded-[2rem] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex items-start gap-4 hover:bg-white hover:shadow-[0_12px_40px_rgb(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-white text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/40 shadow-sm">
                  <Clock size={22} className="stroke-[2]" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-slate-800 text-[17px] leading-snug">Instant Response 24/7</h5>
                  <p className="text-sm text-slate-500 font-normal leading-relaxed mt-1">Average connection and answering time is immediate</p>
                </div>
              </div>

              <div className="bg-white/75 backdrop-blur-sm p-6 rounded-[2rem] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex items-start gap-4 hover:bg-white hover:shadow-[0_12px_40px_rgb(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-white text-green-600 flex items-center justify-center shrink-0 border border-green-100/40 shadow-sm">
                  <UserCheck size={22} className="stroke-[2]" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-slate-800 text-[17px] leading-snug">No Extra Staff Needed</h5>
                  <p className="text-sm text-slate-500 font-normal leading-relaxed mt-1">Handles high volumes of traffic effortlessly</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. BOTTOM CTA SECTION */}
        <section className="bg-slate-900 rounded-[3rem] text-white p-8 md:p-16 text-center relative overflow-hidden border border-slate-850">
          <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-brand-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -left-32 -top-32 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Join clinics already using Clinairo to automate patient communication and recover missed appointments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <a 
                href="/#contact"
                className="w-full sm:w-auto bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-900/40"
              >
                Book a Free Demo
              </a>
              <a 
                href="/#services"
                className="w-full sm:w-auto bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CaseStudies;
