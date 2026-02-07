import React from "react";

const ResultsSection = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Agentic Growth Systems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
              Produce Real Results
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            HoneyComb makes your SDR team 10x more effective by augmenting their workflow with context, timing, and next best actions—human-in-the-loop.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { value: "2x", label: "Pipeline Growth" },
            { value: "3x", label: "ARR Expansion" },
            { value: "70%", label: "More Deals" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative group p-8 rounded-2xl bg-[#111111] border border-white/10 hover:border-amber-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-6xl font-bold text-white mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-xl text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
              HoneyComb AI — Built for B2B Tech
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Self-Executing",
              desc: "Dynamic, self-executing and learning revenue cycle. Not yet another GTM tool.",
            },
            {
              title: "Autonomous or Co-Pilot",
              desc: "Use as a co-pilot for your team OR as an autonomous system that acts on your behalf.",
            },
            {
              title: "Capture Learnings",
              desc: "Preserves enterprise know-how and learns from feedback loops.",
            },
            {
              title: "Reduce Risk",
              desc: "Mitigates risk of overestimating performance – hits targets with GTM execution.",
            },
          ].map((feature, idx) => (
            <div key={idx} className="text-left p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
