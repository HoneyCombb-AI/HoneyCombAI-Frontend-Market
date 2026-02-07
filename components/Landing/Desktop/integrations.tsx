import Image from "next/image";

const logos = [
  {
    src: "https://cdn.prod.website-files.com/66a999af2125597557ba7b53/676aa91929e1562c96bf454f_HubSpot_Logo.png",
    alt: "Hubspot logo",
    width: 139,
    height: 40,
  },
  {
    src: "https://cdn.prod.website-files.com/66a999af2125597557ba7b53/67697bc2a75dc198b9c68033_Salesforce.com_logo.svg.png",
    alt: "Salesforce logo",
    width: 112,
    height: 78,
  },
  {
    src: "https://cdn.prod.website-files.com/66a999af2125597557ba7b53/676986f38b7e384f00e1ca2c_salesloft-logo-full-color-rgb-1.png",
    alt: "Salesloft logo",
    width: 151,
    height: 30,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2dd489b6-fdb0-4898-abbb-cc7b5e9464d3-getbirddog-ai/assets/images/67698720f280652b742c2772_outreach_logo-25.png?",
    alt: "Outreach.com logo",
    width: 160,
    height: 32,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2dd489b6-fdb0-4898-abbb-cc7b5e9464d3-getbirddog-ai/assets/svgs/6769873ca2db7ab7a3832a81_Pipedrive_Logo-6.svg?",
    alt: "Pipedrive logo",
    width: 150,
    height: 30,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2dd489b6-fdb0-4898-abbb-cc7b5e9464d3-getbirddog-ai/assets/svgs/6769892a72e42e362ad936fe_ZoomInfo_logo_(2024).svg-7.png?",
    alt: "Zoominfo Logo",
    width: 153,
    height: 27,
  },
  {
    src: "https://cdn.prod.website-files.com/66a999af2125597557ba7b53/6769f74813ceee709e7128fe_logo_gmail_lockup_default_2x_r5.png",
    alt: "Gmail Logo",
    width: 125,
    height: 47,
  },
  {
    src: "https://cdn.prod.website-files.com/66a999af2125597557ba7b53/6769879b91e38a3c7aaa895c_64a53c0afb60da307f97799a_Uky9NSwNCinNGBQn98J_CelGXVzxt-EBT5RuKF0Woz0.svg",
    alt: "Apollo.io logo",
    width: 80,
    height: 80,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2dd489b6-fdb0-4898-abbb-cc7b5e9464d3-getbirddog-ai/assets/images/676aa89ba87731fce6f18978_664ffc89ff539b531cc46813_Clay-logo-black-2024-27.webp?",
    alt: "Clay logo",
    width: 85,
    height: 28,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2dd489b6-fdb0-4898-abbb-cc7b5e9464d3-getbirddog-ai/assets/images/676987648b7e384f00e233f2_instantly_logo-28.png?",
    alt: "Instantly.ai logo",
    width: 136,
    height: 30,
  },
];

export default function Integrations() {
  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background Amber Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="flex-shrink-0 text-center lg:text-left max-w-xl">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-sm font-bold tracking-wide uppercase mb-6">
              Seamless Connectivity
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6">
              Orchestrates With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                Your Existing Stack
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              HoneyComb feeds intelligence directly into your CRM, engagement tools, and meeting workflows. No new tabs. No data silos. Just pure orchestration across pre-pipeline and post-meeting execution.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 text-black font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Bi-directional Sync</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-black font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Real-time Updates</span>
              </div>
            </div>
          </div>

          {/* Right Content - Logo Grid */}
          <div className="flex flex-col items-center w-full max-w-2xl">
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-6">
              {logos.map((logo) => (
                <div 
                  key={logo.alt} 
                  className="group flex h-24 items-center justify-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    loading="lazy"
                    className="max-h-10 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
              
              {/* "More" Card */}
              <div className="flex h-24 items-center justify-center p-6 bg-amber-50 rounded-xl border border-amber-100">
                <span className="text-amber-700 font-bold text-lg">30+ More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}