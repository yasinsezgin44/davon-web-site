export default function FinalCtaSection() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container-narrow section-padding">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Hospital Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join leading healthcare institutions worldwide that trust Davon to
            enhance patient safety, optimize maintenance operations, and achieve
            operational excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Start Your Free Trial
            </a>
            <a
              href="#features"
              className="btn-outline border-white text-white hover:bg-white hover:text-gray-900"
            >
              Schedule a Demo
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free 30-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Full platform access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
