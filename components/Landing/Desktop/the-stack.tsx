const TheStack = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 relative border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Where HoneyComb Lives in Your Stack
            </h3>
            <p className="text-lg text-gray-400">
              The modern GTM stack has 3 layers. Most companies are missing the top one.
            </p>
          </div>

          {/* Stack Layers Visualization */}
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            
            {/* Layer 3: SOI - HoneyComb (Top) */}
            <div className="group relative transform hover:-translate-y-2 transition-all duration-300 z-30">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-[#1A1A1A] rounded-xl p-8 border border-amber-500/50">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.5 3.5L22 12l-4.5 8.5h-11L2 12l4.5-8.5h11z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">System of Intelligence (SOI)</h4>
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider">
                        The Missing Layer
                      </span>
                    </div>
                    <p className="text-gray-300 mb-1 font-medium">HoneyComb</p>
                    <p className="text-gray-500 text-sm">
                      Reads signals, plans actions, orchestrates across people, and improves itself automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="h-8 w-0.5 bg-gradient-to-b from-amber-500/50 to-purple-500/20 mx-auto -my-2 relative z-0" />

            {/* Layer 2: SOE (Middle) */}
            <div className="group relative transform hover:-translate-y-1 transition-all duration-300 z-20">
              <div className="bg-[#111111] rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-6 transition-opacity">
                  <div className="flex-shrink-0 w-14 h-14 bg-purple-900/20 rounded-xl flex items-center justify-center border border-purple-500/20">
                    <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-white mb-1">System of Engagement (SOE)</h4>
                    <p className="text-gray-300 text-sm mb-1">Outreach / Salesloft</p>
                    <p className="text-gray-400 text-xs">
                      Executes sequences blindly. Doesn&apos;t know &quot;when&quot; or &quot;why&quot;.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="h-8 w-0.5 bg-white/10 mx-auto -my-2 relative z-0" />

            {/* Layer 1: SOR (Bottom) */}
            <div className="group relative transform hover:-translate-y-1 transition-all duration-300 z-10">
              <div className="bg-[#111111] rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-6 transition-opacity">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-500/20">
                    <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-white mb-1">System of Record (SOR)</h4>
                    <p className="text-gray-300 text-sm mb-1">Salesforce / HubSpot</p>
                    <p className="text-gray-400 text-xs">
                      Stores data. Doesn&apos;t tell you what to do next.
                    </p>
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

export default TheStack;
