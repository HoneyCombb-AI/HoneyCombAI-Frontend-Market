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
          <div className="flex w-full rounded-lg overflow-hidden bg-white border border-gray-200 min-h-[500px]">
            <div className="w-[45%] border-r border-black/10 flex items-center justify-center">
              <Image
                src="/Research 1.png"
                alt="In-Depth Research - Social Activity Analysis"
                width={1398}
                height={1684}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[55%] flex items-center justify-center">
              <Image
                src="/Research 2.png"
                alt="In-Depth Research - Strategic Recommendations"
                width={1482}
                height={1474}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="mt-3 text-center font-semibold text-xs text-black">&ldquo;Unique to our Sales requirements&rdquo;</p>
        </div>
      </div>
    </section>
  );
};

export default InDepthResearch;