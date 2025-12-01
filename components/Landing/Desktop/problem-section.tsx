const ProblemSection = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Intro Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
                Why HoneyComb?
              </span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
              The Invisible Chokepoint in <br className="hidden md:block" />
              Your Revenue Engine
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              Most companies think their revenue problems come from not getting enough leads or not closing enough deals. But the real revenue leak happens in the middle—in the quiet, unowned space between interest and purchase.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Current State */}
            <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Current State</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Sales cycles are longer. Buying committees are fragmented. Deals stall after the first call. Your CRM shows &quot;Qualified&quot; but momentum dies silently.
                </p>
              </div>
            </div>

            {/* The Alternative */}
            <div className="group relative p-8 rounded-2xl bg-white/5 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">The Alternative</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  HoneyComb is the brain of your GTM motion. It maps stakeholders, reads signals, plans actions, and keeps your brand top-of-mind—automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Why it Matters Stat */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-4xl font-bold text-white">60–80%</span>
              <span className="text-left text-sm text-gray-400 leading-snug">
                of deals die in the mid-funnel<br />
                because no system is orchestrating the chaos.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
