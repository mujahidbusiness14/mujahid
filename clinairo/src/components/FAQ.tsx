import { useState, type Key } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../lib/utils";

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
  };
  key?: Key;
}

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI receptionist work?",
      answer: "Our AI receptionist uses advanced natural language processing to understand patient requests over the phone or text. It can answer questions about your services, handle booking intent, and route complex calls to your human staff in real-time.",
    },
    {
      question: "Can it integrate with our scheduling system?",
      answer: "Yes, Clinairo integrates with most major HIPAA-compliant scheduling and EHR platforms including Jane, Cliniko, Practice Better, and standard Google Calendar/Outlook systems.",
    },
    {
      question: "Does it work after clinic hours?",
      answer: "Absolutely. One of the biggest benefits of Clinairo is 24/7 availability. Your clinic can capture bookings and handle patient inquiries late at night or during weekends without requiring any human presence.",
    },
    {
      question: "Can patients book appointments automatically?",
      answer: "Yes. Once the AI identifies a patient wants to book, it checks your real-time availability through the integrated calendar and secures the slot instantly, sending confirmation messages to the patient.",
    },
    {
      question: "Is the system customizable for our clinic?",
      answer: "Every clinic is unique. During onboarding, we help you train the AI on your specific services, pricing, practitioner bios, and common patient questions to ensure it sounds like a member of your own team.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Questions & Answers</h2>
          <p className="text-4xl font-display font-bold text-slate-900">Common Inquiries</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 group"
      >
        <span className="group-hover:text-brand-600 transition-colors uppercase tracking-tight text-sm md:text-base">{faq.question}</span>
        <div className={cn("p-2 rounded-full transition-colors", isOpen ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-400")}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
