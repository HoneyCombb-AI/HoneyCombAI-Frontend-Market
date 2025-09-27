import Customization from "@/components/Landing/Desktop/customization";
import DailySignals from "@/components/Landing/Desktop/daily-signals";
import Faq from "@/components/Landing/Desktop/faq";
import FinalCta from "@/components/Landing/Desktop/final-cta";
import Footer from "@/components/Landing/Desktop/footer";
import Header from "@/components/Landing/Desktop/header";
import HeroSection from "@/components/Landing/Desktop/hero";
import ImplementationTimeline from "@/components/Landing/Desktop/implementation-timeline";
import InDepthResearch from "@/components/Landing/Desktop/in-depth-research";
import Integrations from "@/components/Landing/Desktop/integrations";
import SocialProof from "@/components/Landing/Desktop/social-proof";
import Testimonials from "@/components/Landing/Desktop/testimonials";
import Script from "next/script";

export default function DesktopLanding() {
      
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <DailySignals />
        <div className="bg-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <div className="py-20">
              <InDepthResearch />
            </div>
          </div>
        </div>
        <ImplementationTimeline />
        <Customization />
        <Integrations />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />

      <Script
        id="cal-embed"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if(typeof namespace === "string"){
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");

            Cal("init", "30min", {origin:"https://app.cal.com"});
            Cal.ns["30min"]("ui", {
              "theme":"light",
              "cssVarsPerTheme":{
                "light":{"cal-brand":"#ff8900"},
                "dark":{"cal-brand":"#ffdd00"}
              },
              "hideEventTypeDetails":false,
              "layout":"month_view"
            });
          `
        }}
      />

      <Script
        id="header-scroll-animation"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              let showBookDemo = false;
              const button = document.querySelector('.scroll-triggered-button');

              if (!button) return;

              // Set transition for smooth animations
              button.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';

              const handleScroll = () => {
                const heroSection = document.getElementById('hero-section');
                const finalCtaSection = document.getElementById('final-cta-section');
                const headerHeight = 80;

                let shouldShowButton = true;

                // Hide button if hero section is visible
                if (heroSection) {
                  const heroBottom = heroSection.getBoundingClientRect().bottom;
                  if (heroBottom > headerHeight) {
                    shouldShowButton = false;
                  }
                }

                // Hide button if final CTA section is visible
                if (finalCtaSection && shouldShowButton) {
                  const finalCtaRect = finalCtaSection.getBoundingClientRect();
                  const finalCtaTop = finalCtaRect.top;
                  const finalCtaBottom = finalCtaRect.bottom;
                  const windowHeight = window.innerHeight;
                  const triggerDistance = 300;

                  if (finalCtaTop < (windowHeight - triggerDistance) && finalCtaBottom > headerHeight) {
                    shouldShowButton = false;
                  }
                }

                if (shouldShowButton !== showBookDemo) {
                  showBookDemo = shouldShowButton;

                  if (shouldShowButton) {
                    button.style.opacity = '1';
                    button.style.transform = 'translateX(0)';
                    button.style.pointerEvents = 'auto';
                  } else {
                    button.style.opacity = '0';
                    button.style.transform = 'translateX(20px)';
                    button.style.pointerEvents = 'none';
                  }
                }
              };

              window.addEventListener('scroll', handleScroll);
              handleScroll(); // Initial call to set correct state
            })();
          `
        }}
      />
    </>
  );
}