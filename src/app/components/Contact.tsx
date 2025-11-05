export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-black text-white text-center transition-all"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Get in touch with our team for personalized solutions.
        </p>
        <p className="text-sm text-gray-300 mb-10 italic">
          We&apos;ll respond within 24 hours with a customized proposal.
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-full border border-white bg-transparent text-white placeholder-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-full border border-white bg-transparent text-white placeholder-gray-300"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-4 rounded-2xl border border-white bg-transparent text-white placeholder-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-4 rounded-full font-semibold hover:bg-red-700 hover:scale-105 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
