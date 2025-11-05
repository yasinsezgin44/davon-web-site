export default function CornerCTA() {
  return (
    <div className="fixed top-6 right-6 bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg z-40 max-w-xs opacity-90 hover:opacity-100 transition-all">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">
          Streamline Your Hospital Operations?
        </span>
        <a
          href="#contact"
          className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-red-50 transition-all text-center"
        >
          Get Started
        </a>
      </div>
      <button
        className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-6 h-6 text-xs hover:bg-gray-700 transition-colors"
        title="Close"
      >
        ×
      </button>
    </div>
  );
}
