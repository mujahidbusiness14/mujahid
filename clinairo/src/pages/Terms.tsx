const Terms = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Clinairo platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site or our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Use License</h2>
            <p>
              Clinairo grants you a non-exclusive, non-transferable, revocable license to access and use our AI automation tools solely for your professional clinic operations. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Modify or copy our proprietary AI models or software</li>
              <li>Use the services for any illegal or unauthorized purpose</li>
              <li>Attempt to reverse engineer any software contained on Clinairo's platform</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. Service Levels & Support</h2>
            <p>
              We strive to provide 99.9% uptime for our AI voice and messaging services. However, Clinairo does not guarantee uninterrupted service. Support is provided according to your specific service tier agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">4. Accuracy of AI Output</h2>
            <p>
              While our AI is highly advanced, you acknowledge that AI-generated communications may occasionally contain errors. Clinairo provides tools for you to monitor and correct AI interactions. The clinic remains ultimately responsible for clinical outcomes and patient medical advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">5. Payment & Subscription</h2>
            <p>
              Fees for our services are billed in advance on a monthly or annual basis. All fees are non-refundable unless otherwise required by law or specified in your custom Service Agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Clinairo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Clinairo's platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">7. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
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

export default Terms;
