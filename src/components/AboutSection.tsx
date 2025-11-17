export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-balance mb-6">
                20+ Years of Healthcare Innovation
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Davon enhances the operational efficiency of healthcare
                  institutions and contributes to their success through the
                  strength of its references. With over two decades of
                  experience in the healthcare industry, we combine deep domain
                  expertise with innovative technology.
                </p>
                <p>
                  Our customer-centric approach and commitment to continuous
                  improvement ensure we deliver solutions that truly fit
                  clinical engineering and facility management teams, from work
                  order management and asset tracking to analytics and
                  reporting.
                </p>
              </div>
            </div>
          </div>

          <div className="card card-hover p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-8">
              Global Innovation, Local Trust
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">20+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  1000+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  Technical Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">15K+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  Hospital Beds
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  400K+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  Managed Assets
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
