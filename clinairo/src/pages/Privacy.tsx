const Privacy = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              At Clinairo, we are committed to protecting the privacy of our clinic partners and their patients. This Privacy Policy outlines how Clinairo Automation Inc. ("Clinairo", "we", "us", or "our") collects, uses, discloses, and safeguards personal information when you use our AI healthcare automation platform and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Data Privacy & HIPAA</h2>
            <p>
              We understand the sensitive nature of healthcare data. Clinairo processes patient information as a "Business Associate" under HIPAA (Health Insurance Portability and Accountability Act) for our US-based clients. We implement rigorous technical and organizational measures to ensure all workflows are HIPAA-conscious and that patient information is protected with industry-standard encryption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us through our website forms, during onboarding, and through the use of our services. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Clinic contact information (Name, Address, Email, Phone)</li>
              <li>Practitioner details and availability</li>
              <li>Patient communication logs (for AI training and service delivery)</li>
              <li>Technical data (IP address, browser type) for security and performance monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">4. How We Use Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide and maintain our AI automation services</li>
              <li>Train our AI models on your specific clinic workflows</li>
              <li>Improve response accuracy and patient satisfaction</li>
              <li>Communicate with you regarding service updates or support</li>
              <li>Ensure the security and integrity of our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">5. Cookies & Tracking</h2>
            <p>
              Our website uses cookies to enhance user experience and analyze traffic. You can control cookie settings through your browser. We do not sell your personal data or use patient communication data for third-party advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data handling practices, please contact our Data Protection Officer at <strong>privacy@clinairo.com</strong>.
            </p>
          </section>

          <p className="text-sm text-slate-400 border-t border-slate-100 pt-8 mt-12">
            Last Updated: May 18, 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
