
import React from 'react';
import { Metadata } from 'next';
import Header from "@/components/Landing/Desktop/header";
import Footer from "@/components/Landing/Desktop/footer";
import { MobileHeader } from "@/components/Landing/Mobile/MobileHeader";

export const metadata: Metadata = {
  title: 'Privacy Policy | HoneyComb AI',
  description: 'Privacy Policy and Terms of Use for HoneyComb AI.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
       {/* Navigation */}
       <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      <main className="pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-16">
          {/* Header Section */}
          <div className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-500 font-medium">
              Effective Date: 10 November 2025
            </p>
          </div>

          {/* Content Section */}
          <div className="space-y-12 text-lg text-gray-600 leading-relaxed font-sans">
            
            <section>
              <p className="mb-6">
                HoneyComb AI ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the rights you have.
              </p>
              <p>
                By using our website or signing up for our beta, you agree to the practices described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                When you visit our website or sign up for early access to our beta, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-gray-900">Personal Information</strong> — such as your name, email address, company name, and role.</li>
                <li><strong className="text-gray-900">Usage Information</strong> — including IP address, browser type, and pages visited (via cookies or analytics tools).</li>
              </ul>
              <p className="mt-4">
                We do not knowingly collect sensitive personal data such as health, financial, or government ID information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide access to our beta program.</li>
                <li>Communicate updates about HoneyComb AI and our services.</li>
                <li>Improve our website and user experience.</li>
                <li>Comply with legal or regulatory obligations.</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                3. Sharing Your Information
              </h2>
              <p className="mb-4">
                We only share your information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With trusted service providers who help us operate our website (e.g., email or analytics services).</li>
                <li>When required by law or to protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                4. Cookies and Tracking
              </h2>
              <p>
                We may use cookies or similar technologies to understand how visitors interact with our site. You can adjust your browser settings to reject cookies, but some features may not work properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                5. Your Rights
              </h2>
              <p className="mb-4">
                Depending on where you live, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access or request a copy of your personal information.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Opt out of marketing emails at any time by clicking "unsubscribe."</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at <a href="mailto:contact@honeycomb.ai" className="text-amber-600 hover:text-amber-700 font-medium underline decoration-amber-200 underline-offset-4 transition-colors">contact@honeycomb.ai</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                6. Data Security
              </h2>
              <p>
                We take reasonable steps to protect your information from unauthorized access or misuse. However, no system can be 100% secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                7. International Visitors
              </h2>
              <p>
                Our services are primarily directed to users in India. If you access our site from outside India, please note that your information will be processed and stored in India and may be subject to Indian laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will post the new policy on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                9. Terms of Use
              </h2>
              <p>
                <strong className="text-gray-900 block mb-2">Acceptance of Terms</strong>
                By using our website or signing up for the beta, you agree to these Terms of Use. If you do not agree, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                10. Use of Services
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least 18 years old to sign up for the beta.</li>
                <li>You agree to use the site and beta services only for lawful purposes.</li>
                <li>You may not attempt to interfere with the site's operation or security.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                11. Beta Program
              </h2>
              <p>
                Our beta program and custom demo is provided "as is" and without any guarantees. We may add, remove, or modify features at any time. Participation in the services is at our discretion, and we may revoke access at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                12. Intellectual Property
              </h2>
              <p>
                All content, branding, and technology on this site are the property of HoneyComb AI or our licensors. You may not copy, reproduce, or distribute our content without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                13. Limitation of Liability
              </h2>
              <p className="mb-4">
                HoneyComb AI is not liable for any damages resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use (or inability to use) our site or services.</li>
                <li>Unauthorized access to your information.</li>
                <li>Errors, interruptions, or downtime.</li>
              </ul>
              <p className="mt-4">
                To the fullest extent permitted by law, our liability is limited to the amount you paid us (if any) in the past 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                14. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of India, without regard to conflict of law principles.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="mb-8">
                If you have questions or concerns about this Privacy Policy, please email us at: <a href="mailto:contact@honeycomb.ai" className="text-amber-600 hover:text-amber-700 font-medium underline decoration-amber-200 underline-offset-4 transition-colors">contact@honeycomb.ai</a>
              </p>
              <p className="text-sm text-gray-400">
               Copyright ©2025 HoneyComb AI. All rights reserved | Privacy Policy
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
