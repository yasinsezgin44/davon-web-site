export default function Faq() {
  return (
    <section className="py-24 bg-white transition-all">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">
              What is CMMS?
            </h3>
            <p className="text-black">
              Computerized Maintenance Management System helps streamline
              maintenance processes.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">
              How does EAM benefit hospitals?
            </h3>
            <p className="text-black">
              Enterprise Asset Management optimizes asset tracking and improves
              operational efficiency.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">
              Is the system customizable?
            </h3>
            <p className="text-black">
              Yes, our solutions are tailored to meet specific hospital
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
