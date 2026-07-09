import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, Info, CheckCircle2, Loader2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    clinicName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus("success");
      setResponseMsg("Thank you! We'll be in touch within 2-4 business hours.");
      setFormData({ name: "", clinicName: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setResponseMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-16 border border-slate-200 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Get in Touch</h2>
              <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Let's Build Your <br />
                <span className="text-gradient">Clinics' Future</span>
              </p>
              <p className="text-lg text-slate-600 mb-10 max-w-md">
                Ready to automate your patient communication? Schedule a free consultation with our team and see Clinairo in action.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-brand-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Us</p>
                    <p className="text-xl font-bold text-slate-900">contact@clinairo.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 flex gap-4">
                <Info className="text-brand-600 flex-shrink-0" />
                <p className="text-sm text-brand-900 font-medium leading-relaxed">
                  Our specialists are typically able to respond within 2-4 business hours for a detailed consultation request.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl border border-slate-100">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Request Sent!</h3>
                    <p className="text-slate-600 mb-8">{responseMsg}</p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="text-brand-600 font-bold border-b-2 border-brand-600 hover:text-brand-700 transition-colors"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                        <input 
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text" 
                          placeholder="Jane Doe"
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-600 focus:bg-white transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Clinic Name</label>
                        <input 
                          required
                          name="clinicName"
                          value={formData.clinicName}
                          onChange={handleChange}
                          type="text" 
                          placeholder="Elite Wellness Clinic"
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-600 focus:bg-white transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                        <input 
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email" 
                          placeholder="jane@clinic.com"
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-600 focus:bg-white transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                        <input 
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          type="tel" 
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-600 focus:bg-white transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                      <textarea 
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your clinic's current front-desk challenges..."
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-600 focus:bg-white transition-all outline-none resize-none"
                      ></textarea>
                    </div>
                    
                    {status === "error" && (
                      <p className="text-red-500 text-sm font-medium mt-2">{responseMsg}</p>
                    )}

                    <button 
                      disabled={status === "loading"}
                      type="submit"
                      className="w-full bg-brand-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-100 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Schedule Your Free Consultation
                          <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;