import { useScrollAnimation } from './useScrollAnimation';

export default function Hero() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({ threshold: 0.4 });
  const { elementRef: descriptionRef, isVisible: descriptionVisible } = useScrollAnimation({ threshold: 0.5 });
  const { elementRef: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation({ threshold: 0.6 });

  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-40 text-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100 to-transparent opacity-30 animate-gradient"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-red-400 rounded-full animate-float opacity-20"></div>
      <div className="absolute top-32 right-16 w-6 h-6 bg-red-500 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-red-300 rounded-full animate-float opacity-25" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 right-10 w-5 h-5 bg-red-400 rounded-full animate-float opacity-20" style={{ animationDelay: '0.5s' }}></div>

      {/* Animated Wave Background */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-100 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Main Title with Animation */}
        <h1
          ref={titleRef as any}
          className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none text-black uppercase tracking-tight transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          ENSURE PATIENT SAFETY &
          <br />
          <span className="text-red-600 animate-glow">OPTIMIZE HOSPITAL OPERATIONS</span>
        </h1>

        {/* Subtitle with Staggered Animation */}
        <h2
          ref={subtitleRef as any}
          className={`text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-700 transition-all duration-1000 delay-300 ${
            subtitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          The Command Center for Hospital Asset Management: Reduce Costs, Automate Maintenance, Ensure Compliance
        </h2>

        {/* Description with Animation */}
        <p
          ref={descriptionRef as any}
          className={`text-base md:text-lg lg:text-xl mb-12 max-w-4xl mx-auto text-gray-600 leading-relaxed transition-all duration-1000 delay-500 ${
            descriptionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          Your platform gives you the power to connect, track, and maintain every asset in your hospital.
          Trusted by hospital operators nationwide to automate maintenance, ensure compliance, and protect patient safety.
        </p>

        {/* Animated CTA Buttons */}
        <div
          ref={buttonsRef as any}
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${
            buttonsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#contact"
            className="bg-red-600 text-white px-12 py-6 rounded-lg font-bold text-xl hover-lift animate-pulse-gentle border-2 border-red-600 hover:bg-red-700 hover:shadow-2xl group relative overflow-hidden"
          >
            <span className="relative z-10">Request a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-red-600 text-red-600 px-12 py-6 rounded-lg font-semibold text-xl hover-scale hover:bg-red-50 hover:shadow-xl transition-all duration-300 group"
          >
            <span className="group-hover:animate-pulse">Take the Product Tour</span>
          </a>
        </div>

        {/* Animated Counter */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <p className="text-sm text-gray-500 italic">
              Join <span className="font-bold text-red-600 animate-pulse-gentle">200+</span> hospitals already protecting patient safety and optimizing operations
            </p>
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
