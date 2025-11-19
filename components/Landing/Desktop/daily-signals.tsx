import Image from "next/image";

const DailySignals = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[1200px] px-6 py-[120px] md:px-10">
        <div className="mb-20 text-center">
          <h1 className="text-white text-5xl font-bold leading-tight">
            Every Sales Team Needs a Researcher
          </h1>
        </div>

        <section>
          <div className="grid grid-cols-1 items-start gap-x-12 lg:grid-cols-2">
            <div>
              <p className="text-gray-400 text-xl leading-relaxed">
                &ldquo;Honeycomb has transformed our outbound strategy&rdquo;
              </p>
              <h2 className="mt-4 text-white text-5xl font-bold leading-tight">
                Daily Signals
              </h2>
            </div>
            <div className="mt-8 lg:mt-0">
              <p className="text-gray-300 text-xl leading-relaxed">
                Track sales signals across all your accounts to{" "}
                <strong className="font-semibold text-white">
                  uncover opportunities as they happen
                </strong>
                . From specific keywords in job postings to executives
                discussing next year&apos;s plans, sales signals help you{" "}
                <strong className="font-semibold text-white">
                  engage at the right time
                </strong>
                .
              </p>
            </div>
          </div>

          <a href="#" className="mt-16 block -mx-6 md:mx-0">
            <div className="flex w-full max-w-[900px] mx-auto items-center justify-center rounded-2xl border border-white/20 bg-black/40 p-2 md:p-4">
              <Image
                src="/Signals.png"
                alt="Daily Signals Dashboard"
                width={900}
                height={500}
                loading="lazy"
                className="h-auto w-full max-w-full rounded-lg object-contain"
              />
            </div>
          </a>
          <p className="mt-2 text-center font-semibold text-xs text-white">&ldquo;Unique to our Sales requirements&rdquo;</p>
        </section>
      </div>
    </section>
  );
};

export default DailySignals;
