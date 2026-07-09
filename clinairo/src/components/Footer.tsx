import { Link } from "react-router-dom";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">C</span>
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-slate-900">
                Clinairo.
              </span>
            </Link>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              Redefining clinic operations through intelligent AI automation and human-like patient communication.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-600 hover:border-brand-200 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@clinairo.com" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-600 hover:border-brand-200 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/#about" className="text-slate-500 hover:text-brand-600 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-500 hover:text-brand-600 transition-colors">Careers</Link></li>
              <li><Link to="/case-studies" className="text-slate-500 hover:text-brand-600 transition-colors">Case Studies</Link></li>
              <li><a href="#contact" className="text-slate-500 hover:text-brand-600 transition-colors">Contact</a></li>
              <li><a href="#how-it-works" className="text-slate-500 hover:text-brand-600 transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-slate-500 hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-500 hover:text-brand-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-display font-bold text-slate-900 mb-2">Connect with Us</h4>
            <p className="text-sm text-slate-500 mb-4">Stay updated with the latest in healthcare AI.</p>
            <a href="mailto:contact@clinairo.com" className="group flex items-center gap-2 text-brand-600 font-semibold text-sm">
              contact@clinairo.com
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {currentYear} Clinairo Automation Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Powered by Clinairo AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
