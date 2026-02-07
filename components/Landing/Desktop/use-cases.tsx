"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Users, BarChart3, ShieldCheck } from "lucide-react";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("sdr");

  const tabs = [
    {
      id: "sdr",
      label: "SDRs",
      icon: Target,
      title: "Automate the Grunt Work",
      description: "Focus on selling, not busywork. HoneyComb gives SDRs a crisp account brief, explains why now is the right time, automates personalized outreach on email and LinkedIn, and recommends the next best action based on real signals.",
      benefits: [
        "Account briefs + stakeholder mapping",
        "Signal-based timing and prioritization",
        "Automated one-to-one personalization"
      ]
    },
    {
      id: "ae",
      label: "AEs",
      icon: Users,
      title: "Close Deals Faster",
      description: "After the first meeting, keep momentum. HoneyComb reacts to first-party intent + third-party signals and keeps engagement consistent across stakeholders.",
      benefits: [
        "Pre-meeting briefs + stakeholder relationship mapping",
        "Next best action + follow-up plans that don’t drift",
        "Signal-driven engagement to keep mindshare"
      ]
    },
    {
      id: "marketing",
      label: "Marketing",
      icon: BarChart3,
      title: "Align with Sales",
      description: "Turn intent into coordinated engagement. HoneyComb aligns campaigns, outbound, and follow-ups into one coherent story per buyer role.",
      benefits: [
        "Dynamic ICP refinement with conversion-linked signals",
        "Buyer-group coverage (not single-threaded leads)",
        "Closed-loop learnings from outcomes"
      ]
    },
    {
      id: "leadership",
      label: "Leadership",
      icon: ShieldCheck,
      title: "Predictable Revenue",
      description: "Own engagement upstream and downstream. See which signals matter, what actions are being taken, and why pipeline is (or isn’t) forming.",
      benefits: [
        "Traceable decisions: why target, why now, why this message",
        "Pipeline formation + velocity visibility",
        "Better conversions without brute-force activity"
      ]
    }
  ];

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            How HoneyComb Agents <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
              Help Every Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Agents that coordinate engagement across buyer roles, channels, and timing—so deals keep moving.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Navigation */}
          <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 lg:w-1/3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left min-w-[200px] lg:min-w-0 ${
                    isActive
                      ? "bg-amber-50 border border-amber-200 shadow-sm"
                      : "hover:bg-gray-50 border border-transparent"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      isActive ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg ${
                        isActive ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {tab.label}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Panel */}
          <div className="lg:w-2/3 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {tabs.map((tab) => {
                if (tab.id !== activeTab) return null;
                return (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl shadow-gray-200/50 h-full"
                  >
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {tab.title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {tab.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {tab.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                          </div>
                          <span className="text-gray-700 font-medium text-lg">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
