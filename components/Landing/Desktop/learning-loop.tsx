import React from "react";
import { Brain, LineChart, GitBranch, CheckCircle2 } from "lucide-react";

const LearningLoop = () => {
  return (
    <section className="bg-white py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-sm font-bold tracking-wide uppercase mb-6">
            Continuous Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Your GTM motion gets smarter with every interaction
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            HoneyComb doesn&apos;t just execute tasks. It captures learnings across your entire sales motion—what messaging worked, which ICP segments convert, which personas engage best, what was said in meetings, and which signals consistently lead to pipeline. This learning loop is the first step to GTM clarity: break your GTM into small, solvable pieces, learn what works, and improve continuously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Brain className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Messaging + meeting learnings</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Learn which narratives, objections, and moments in conversations move deals forward—then reuse those learnings when a similar account shows up again.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <LineChart className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">ICP + persona refinement</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Get sharper on who to target and who to engage inside the account. Learn which personas respond, which stakeholders to add early, and which segments consistently convert.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <GitBranch className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Decision tracing</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Understand why HoneyComb recommended an action for a specific account, stakeholder, and moment in time—grounded in signals, context, and outcomes.
            </p>
          </div>
        </div>

        <div className="mt-14 max-w-4xl mx-auto rounded-2xl border border-amber-200 bg-amber-50 p-8">
          <div className="flex items-start gap-4">
            <div className="mt-1 h-7 w-7 rounded-full bg-white border border-amber-200 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="h-4 w-4 text-amber-700" />
            </div>
            <p className="text-gray-800 leading-relaxed">
              The result is a repeatable, explainable engagement system: clearer targeting, better messaging, and faster learning across the team—without losing the human judgment that makes great selling work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningLoop;
