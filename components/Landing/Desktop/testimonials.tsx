import Image from "next/image";

interface Testimonial {
  name: string;
  title: string;
  quoteHeadline: string;
  quoteBody: string;
  avatarUrl: string;
  avatarAlt: string;
}

const testimonialsData: Testimonial[] = [
{
  name: 'Kiriti Kapavari',
  title: "Outreach @ Cocreate",
  quoteHeadline: '"Actionable insights, not noise"',
  quoteBody: 'Honeycomb\'s signals help us prioritize outreach with confidence. Less guessing, more meaningful conversations.',
  avatarUrl: '/Kiriti .jpeg',
  avatarAlt: 'Kiriti Kapavari'
},
{
  name: 'Suresh Narasimha',
  title: "Director @ Justbooks",
  quoteHeadline: '"We focus on accounts that actually matter"',
  quoteBody: 'We use Honeycomb to zero-in on the right timing and context. It\'s simplified our process and improved outcomes.',
  avatarUrl: '/Suresh sir.jpeg',
  avatarAlt: 'Suresh Narasimha'
}];


const TestimonialCard = ({ name, title, quoteHeadline, quoteBody, avatarUrl, avatarAlt }: Testimonial) => {
  return (
    <div className="bg-[#111111] border border-white/10 text-white rounded-2xl p-8 flex flex-col h-full hover:border-amber-500/30 transition-colors duration-300">
      <div className="rounded-full mb-8 overflow-hidden border-2 border-amber-500/20" style={{ width: 96, height: 96 }}>
        <Image
          src={avatarUrl}
          alt={avatarAlt}
          width={96}
          height={96}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-2xl font-semibold leading-snug mb-4 text-amber-400">
        {quoteHeadline}
      </h3>
      <p className="text-base text-gray-300 flex-grow mb-8 font-normal leading-relaxed">
        {quoteBody}
      </p>
      <div className="mt-auto">
        <p className="font-semibold text-base text-white">{name}</p>
        <p className="text-sm text-gray-500 !whitespace-pre-line">{title}</p>
      </div>
    </div>);

};

const Testimonials = () => {
  return (
    <section className="bg-[#0A0A0A] py-[120px] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="font-bold text-white text-[48px] leading-[1.2]">
            Don&apos;t Just Take Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
              Word for It
            </span>
          </h2>
          <p className="mt-6 text-gray-400 text-[20px] leading-[1.6]">
            Trusted by modern outbound and revenue teams.
          </p>
        </div>
        <div className="mt-20 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
            {testimonialsData.map((testimonial) =>
              <TestimonialCard key={testimonial.name} {...testimonial} />
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default Testimonials;