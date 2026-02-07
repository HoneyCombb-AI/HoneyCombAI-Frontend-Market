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
              Engagement at Scale is the <br className="hidden md:block" />
              Missing GTM Capability
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              Revenue teams lose momentum both before pipeline exists and after the first meeting. Pre-pipeline, it&apos;s hard to build mindshare with the right stakeholders. Post-meeting, signals get missed, follow-through drifts, and buying committees go dark. Doing this manually—multi-stakeholder, coordinated engagement with persona-level relevance—isn&apos;t possible at scale.
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
                  Generic targeting, single-threaded outreach, and &quot;by default&quot; sequences. Reps can&apos;t coordinate across stakeholders, and they can&apos;t keep up with the sheer volume of intent signals. After the first meeting, engagement decays and momentum quietly disappears.
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
                  HoneyComb is the intelligence layer behind your GTM motion. It reads first-party and third-party intent signals, maps buying committees and buyer roles, understands persona context, and recommends the next best action per stakeholder. It augments your SDRs (human-in-the-loop) with precise, automated one-to-one personalization and coordinated engagement—so deals keep moving without relying on memory or manual effort.
                </p>
              </div>
            </div>
          </div>

          {/* Why it Matters Stat */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-4xl font-bold text-white">At scale</span>
              <span className="text-left text-sm text-gray-400 leading-snug">
                personalization + coordination + follow-through<br />
                become impossible without an intelligence layer.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
