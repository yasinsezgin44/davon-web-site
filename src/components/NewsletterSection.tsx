"use client";

export default function NewsletterSection() {
  return (
    <section className="section-muted">
      <div className="container-narrow section-padding">
        <div className="card p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Healthcare Innovation
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights on CMMS best practices, regulatory updates,
            and product announcements delivered to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 h-12 px-4 rounded-full border border-gray-300 bg-white text-gray-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe Now
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Join 2,500+ healthcare professionals. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
