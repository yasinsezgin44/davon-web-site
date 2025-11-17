export default function TestimonialSection() {
  return (
    <section className="section-muted">
      <div className="container-narrow section-padding">
        <div className="text-center mb-10">
          <p className="section-eyebrow mb-3">Customer story</p>
          <h2 className="section-heading text-balance mb-4">
            &ldquo;We reduced processing time from days to hours.&rdquo;
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Technical and clinical engineering teams use Davon to move from
            reactive firefighting to proactive maintenance and continuous
            improvement across their hospitals.
          </p>
        </div>

        <div className="card p-8 md:p-10 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            &ldquo;Before Davon, consolidating maintenance, calibration, and
            compliance data across our sites took days. Now our teams have a
            single, reliable view of every asset and work order. We can focus on
            supporting clinicians and patients instead of chasing spreadsheets.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-semibold text-gray-900">Head of Clinical Engineering</p>
              <p className="text-sm text-gray-500">
                Large multi-site healthcare group
              </p>
            </div>
            <div className="text-sm text-gray-500">
              *Illustrative testimonial based on typical Davon customer outcomes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


