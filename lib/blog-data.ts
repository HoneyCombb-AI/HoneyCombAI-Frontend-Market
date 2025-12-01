export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  coverImage: string;
  author: string;
  role?: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "missing-gtm-layer",
    title: "The Missing GTM Layer Quietly Decaying Your Pipeline",
    excerpt: "Somewhere between “this looks interesting” and “we’re ready to buy”, a huge chunk of pipeline just fades away. That “somewhere” is what I think of as the missing GTM layer.",
    content: `
      <p class="mb-6 text-lg leading-relaxed">On paper, most B2B GTM machines look solid.</p>
      <p class="mb-6 text-lg leading-relaxed">You’ve got marketing automation humming, campaigns running, content shipped, events lined up. You’ve got sales engagement platforms, dialers, sequencers, dashboards. The tech stack is full, the reports are impressive.</p>
      <p class="mb-6 text-lg leading-relaxed">And yet… opportunities still leak out in between.</p>
      <p class="mb-6 text-lg leading-relaxed">Somewhere between “this looks interesting” and “we’re ready to buy”, a huge chunk of pipeline just fades away.</p>
      <p class="mb-8 text-lg leading-relaxed">That “somewhere” is what I think of as the missing GTM layer — and once you see it, you can’t unsee it.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900">The Layer Between Marketing and Sales That Doesn’t Show Up in Diagrams</h2>
      
      <p class="mb-6 text-lg leading-relaxed">If you strip GTM down to its simplest layers, most teams effectively run on three:</p>
      
      <div class="bg-yellow-50 p-6 rounded-xl mb-8 border border-yellow-100">
        <h3 class="text-xl font-bold mb-3 text-gray-900">Layer 1 – Demand generation.</h3>
        <p class="text-gray-700">Marketing automation captures leads, scores activity, nurtures, retargets. HubSpot, Marketo, ad spend, content — all of that lives here. The output: MQLs flowing into the CRM.</p>
      </div>

      <div class="bg-yellow-50 p-6 rounded-xl mb-8 border border-yellow-100">
        <h3 class="text-xl font-bold mb-3 text-gray-900">Layer 3 – Sales execution.</h3>
        <p class="text-gray-700">Sales engagement tools send emails, manage sequences, log calls. SDRs and BDRs spend their days here, grinding through targets and booked meeting numbers.</p>
      </div>

      <p class="mb-6 text-lg leading-relaxed">Between those two is <strong>Layer 2</strong> — the messy, human layer where real work happens:</p>
      
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700 marker:text-yellow-500">
        <li>Researching accounts and people</li>
        <li>Qualifying and prioritizing</li>
        <li>Deciding who to go after first</li>
        <li>Watching for signals and timing</li>
        <li>Coordinating outreach across multiple buyer groups</li>
        <li>Building context for a clean handoff to AEs</li>
      </ul>
      
      <p class="mb-6 text-lg leading-relaxed">Every rep knows this layer. It’s the “open 10 LinkedIn tabs, a few spreadsheets, three Slack threads and ‘I’ll remember to follow up’ notes” part of the job.</p>
      <p class="mb-8 text-lg leading-relaxed">It just doesn’t exist as a product category. It barely exists on org charts. But this is exactly where the majority of opportunities die.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900">What Really Happens in the Missing Layer?</h2>
      
      <p class="mb-6 text-lg leading-relaxed">Let’s be fair to GTM teams: no one is sitting on leads intentionally.</p>
      <p class="mb-6 text-lg leading-relaxed">The problem is the scale and speed of what Layer 2 is expected to handle.</p>
      <p class="mb-6 text-lg leading-relaxed">Hundreds (or thousands) of MQLs hit the system every month. For each one, the “ideal” workflow looks like this:</p>
      
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700 marker:text-yellow-500">
        <li><strong>20–25 minutes of proper research</strong> – company context, persona mapping, likely pain points, relevant triggers.</li>
        <li><strong>Another ~10 minutes</strong> to personalize outreach beyond just “first name + company”.</li>
        <li><strong>Ongoing monitoring:</strong> did they come back to the site, hit pricing, invite colleagues, forward an email?</li>
        <li><strong>Coordinating multithreaded outreach</strong> inside the same account so you don’t message four people with the exact same line.</li>
      </ul>
      
      <p class="mb-6 text-lg leading-relaxed">Do that properly and you’re over half an hour per prospect. That math doesn’t work when you’re staring at a queue of 177 leads plus outbound accounts.</p>
      <p class="mb-6 text-lg leading-relaxed">So people do what they have to do:</p>
      
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700 marker:text-yellow-500">
        <li>Shortcut research</li>
        <li>Lean on templates with light customization</li>
        <li>Let sequences run without reacting to micro-signals</li>
        <li>Single-thread the account because multithreading manually is too heavy to juggle at volume</li>
      </ul>
      
      <p class="mb-6 text-lg leading-relaxed">It’s not that reps aren’t working. They’re doing the best they can inside broken math.</p>
      <p class="mb-8 text-lg leading-relaxed">Layer 2 isn’t failing because teams don’t care. It’s failing because, at current volumes, handling this manually is humanly impossible.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900">Why This Layer Stays Invisible (Even Though It’s Where Conversion Happens)</h2>
      
      <p class="mb-6 text-lg leading-relaxed">There are a few reasons this gap keeps getting ignored:</p>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">There’s no obvious category for it.</h3>
          <p class="text-gray-700 text-lg">Marketing automation is a category. Sales engagement is a category. CRM is a category. “The orchestration layer between marketing and sales?"</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">Ownership is fragmented.</h3>
          <p class="text-gray-700 text-lg">Ops has a piece, marketing has a piece, sales has a piece. Because it’s spread across roles and teams, no one is explicitly accountable for how this layer performs. And we all know: when everyone owns it, no one really owns it.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">Metrics don’t call it out.</h3>
          <p class="text-gray-700 text-lg">Marketing proudly reports MQLs. Sales reports opportunities and closed revenue. Very few teams can confidently answer: “What actually happens to leads between MQL and opp, and where exactly do they leak?”</p>
        </div>
      </div>
      
      <p class="mb-8 text-lg leading-relaxed font-medium text-gray-900 border-l-4 border-yellow-500 pl-6 py-2 bg-yellow-50/50">The tough truth: companies converting ~20% of opportunities versus 5% haven’t magically found better leads or superhuman reps. They’ve simply made this middle layer smarter — automated research, real-time signal detection, and multithreaded orchestration instead of manual grind.</p>

      <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900">Turning the Missing Layer Into a System of Intelligence</h2>
      
      <p class="mb-6 text-lg leading-relaxed">This is where Honeycomb comes in.</p>
      <p class="mb-6 text-lg leading-relaxed">I don’t believe we need yet another siloed GTM tool. We need a system of intelligence that sits across the stack — the “brain” that watches what’s happening, understands context, and recommends what to do next.</p>
      <p class="mb-6 text-lg leading-relaxed">For me, Honeycomb is that missing Layer 2 turned into a product:</p>
      
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700 marker:text-yellow-500">
        <li>It takes in data from marketing, CRM, sales engagement, and public signals.</li>
        <li>It builds the buyer map — the real stakeholders, not just whoever filled a form.</li>
        <li>It detects intent and timing in real time instead of letting high-intent behavior vanish into a queue.</li>
        <li>It orchestrates actions across personas: who to engage, with what angle, and when.</li>
        <li>It learns from outcomes so the system gets sharper over time.</li>
      </ul>
      
      <p class="mb-6 text-lg leading-relaxed">The point isn’t to replace reps. It’s to stop asking humans to do what a machine can do better: keep track of hundreds of micro-signals, across dozens of accounts, and turn that into a prioritized, adaptive plan.</p>
      <p class="mb-6 text-lg leading-relaxed">We’re not trying to “fix SDRs” or rewrite how sales works from scratch.</p>
      <p class="mb-6 text-lg leading-relaxed">We’re trying to stop wasting the work they’re already doing by making the GTM layer between marketing and sales truly intelligent instead of painfully manual.</p>
      <p class="mb-6 text-lg leading-relaxed">That’s the layer I care about.</p>
      <p class="mb-8 text-lg font-bold text-gray-900">That’s the gap we’re building Honeycomb for.</p>
    `,
    date: "Dec 2, 2025",
    coverImage: "/images/blog-cover.png",
    author: "Ankush Nagathan",
    role: "CEO of HoneyComb",
    category: "Manifesto"
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
