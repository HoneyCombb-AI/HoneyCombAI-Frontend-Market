import DesktopLanding from "@/components/Landing/DesktopLanding";
import MobileLanding from "@/components/Landing/MobileLanding";
import { JSX } from "react";

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

const HomePage = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Desktop - hidden on mobile */}
      <div className="hidden md:block">
        <DesktopLanding />
      </div>

      {/* Mobile - hidden on desktop */}
      <div className="block md:hidden">
        <MobileLanding />
      </div>
    </div>
  );
};

export default HomePage;