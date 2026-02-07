import React from "react";

const InDepthResearch = () => {
  return (
    <section className="bg-white py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-sm font-bold tracking-wide uppercase mb-6">
              Deep Account Intelligence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Stop guessing what to do next.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              HoneyComb builds a living dossier on every account—mapping{" "}
              <strong className="text-black">stakeholders, signals, strategies, and pain points</strong>{" "}
              so your team can engage with the right message, on the right channel, at the right time.
            </p>
            
            <div className="flex flex-col gap-4">
              {[
                "Buying signals tracked in real-time",
                "Persona-based messaging angles (not generic personalization)",
                "Coordinated engagement + follow-through recommendations",
                "Timing relevance scoring + next best action",
                "Clear rationale: why this account / stakeholder / now"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full opacity-50 pointer-events-none" />
            
            <div className="relative bg-[#111111] rounded-2xl border border-gray-200 shadow-2xl overflow-hidden">
              {/* Window Controls */}
              <div className="h-10 bg-[#1A1A1A] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-8">
                {/* Profile Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                      JF
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">John Finch</h3>
                      <p className="text-gray-400 text-sm">VP Sales at TechCo</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">Hot</span>
                    <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">Analyzed</span>
                  </div>
                </div>

                {/* Analysis Cards */}
                <div className="space-y-4">
                  {/* Why Reach Out */}
                  <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wide">Why Reach Out</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-gray-300 text-sm font-semibold mb-1">Buying Signals</h4>
                        <ul className="space-y-1">
                          <li className="text-gray-500 text-xs flex items-start gap-2">
                            <span className="text-amber-500 mt-0.5">•</span> Direct post by VP Sales recruiting Sales Leaders
                          </li>
                          <li className="text-gray-500 text-xs flex items-start gap-2">
                            <span className="text-amber-500 mt-0.5">•</span> Multiple AVP Sales reqs and delivery role hiring
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Account Overview */}
                  <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wide">Account Overview</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      John Finch is VP Sales at TechCo, a Salesforce Summit Partner. The company is in a hiring surge across sales leadership and technical roles.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5" />
                        <p className="text-gray-500 text-xs">Strategic priorities inferred: expand regional coverage, accelerate pipeline from events/marketing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InDepthResearch;
