import Image from "next/image";

const InDepthResearch = () => {
  return (
    <section className="hero-heading-left mt-20">
      <div className="w-layout-grid uui-layout23_component grid grid-cols-1 items-start gap-x-8 gap-y-8 lg:grid-cols-[0.75fr_1fr]">
        <div className="uui-layout23_content-left">
          <div className="uui-heading-subheading-4 mb-4 text-sm font-semibold text-black">
            &quot;I don&apos;t know any software that lets you do this.&quot;
          </div>
          <h2 className="pro---feature-title-2 text-[48px] font-bold leading-tight text-black">
            In-Depth Research
          </h2>
        </div>
        <div className="uui-layout23_content-right self-center">
          <div className="uui-text-size-large-4 text-xl leading-8 text-gray-700">
            We surface the data that matters most to you.{" "}
            <strong className="font-bold text-black">
              If it&apos;s on the internet, we can track it
            </strong>
            , analyze it, and deliver it directly to your workflow.
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="w-full rounded-xl border border-gray-200 bg-amber-50/60 p-4 shadow-sm">
          <div className="flex w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white lg:min-h-[500px] lg:flex-row">
            <div className="flex w-full items-center justify-center border-b border-black/10 pb-4 lg:w-[45%] lg:border-b-0 lg:border-r lg:pb-0">
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-none">
                <Image
                  src="/Research 1.png"
                  alt="In-Depth Research - Social Activity Analysis"
                  width={1398}
                  height={1684}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-center pt-4 lg:w-[55%] lg:pt-0">
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-none">
                <Image
                  src="/Research 2.png"
                  alt="In-Depth Research - Strategic Recommendations"
                  width={1482}
                  height={1474}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
          <p className="mt-3 text-center font-semibold text-xs text-black">&ldquo;Unique to our Sales requirements&rdquo;</p>
        </div>
      </div>
    </section>
  );
};

export default InDepthResearch;
