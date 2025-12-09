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
  },
  {
    slug: "signals-vs-intent",
    title: "ABM & Intent Data Were the First Generation. Signals and GTM Intelligence is the Future.",
    excerpt: "For more than a decade, Account-Based Marketing (ABM) ran on one fundamental input: intent data. But the world it was built for no longer exists. Signals are the new intelligence layer.",
    content: `
      <p class="mb-6 text-lg leading-relaxed">For more than a decade, Account-Based Marketing (ABM) ran on one fundamental input: intent data.</p>
      <p class="mb-6 text-lg leading-relaxed">When companies like Bombora, G2, and later 6sense turned intent into a category, it reshaped how marketing prioritized accounts. It was seen as the missing intelligence layer — the promise that “if an account is researching your problem, you’ll know.”</p>
      
      <p class="mb-6 text-lg leading-relaxed">It was groundbreaking for its time.</p>
      <p class="mb-6 text-lg leading-relaxed">But the world it was built for no longer exists.</p>
      
      <p class="mb-6 text-lg leading-relaxed">Buying behavior has changed. Committees have expanded. Digital noise has exploded. Stakeholders move faster than intent data can refresh.</p>
      
      <p class="mb-8 text-lg leading-relaxed">And today, the truth is simple: <strong>Intent data and first-generation ABM cannot keep up with how enterprise deals actually move.</strong></p>

      <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900">Where ABM + Intent Fall Short (And Why They’re Mostly Noise Now)</h2>
      
      <p class="mb-6 text-lg leading-relaxed">Classic ABM models rely heavily on broad signals: keyword surges, category consumption, comparison pages, IP lookups, and inferred interest.</p>
      <p class="mb-6 text-lg leading-relaxed">But here’s the problem:</p>
      
      <div class="bg-yellow-50 p-6 rounded-xl mb-8 border border-yellow-100">
        <p class="font-medium text-gray-900">Intent does not tell you a company is interested. It tells you someone, somewhere in that company triggered an anonymous activity spike.</p>
      </div>

      <p class="mb-6 text-lg leading-relaxed">That could be:</p>
      
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700 marker:text-yellow-500">
        <li>An intern researching a college project</li>
        <li>A competitor checking your pricing</li>
        <li>A vendor browsing your content</li>
        <li>A random employee Googling an article that loosely matches your space</li>
      </ul>

      <p class="mb-6 text-lg leading-relaxed"><strong>Intent is not conviction. It’s not buying behavior. It’s not deal movement.</strong></p>
      <p class="mb-8 text-lg leading-relaxed">Most of the time, it’s noise disguised as insight.</p>

      <p class="mb-6 text-lg leading-relaxed">And this is why intent + ABM fall apart in real enterprise cycles:</p>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700 marker:text-yellow-500">
        <li>It’s account-level, not human-level — you don’t know who actually cares.</li>
        <li>It has no context — spikes mean nothing without the “why.”</li>
        <li>It arrives late — weekly surges don’t support real-time selling.</li>
        <li>It ignores internal dynamics — reorgs, politics, influence shifts.</li>
        <li>It doesn’t enable personalization — too broad for persona-level relevance.</li>
        <li>It gives no actionable next step — reps still guess what to do.</li>
      </ul>

      <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900">Signals: The Real Indicators of Deal Movement</h2>
      
      <p class="mb-6 text-lg leading-relaxed">Signals are the micro-movements, human behaviors, organizational changes, and contextual shifts inside an account that actually influence a deal.</p>
      <p class="mb-6 text-lg leading-relaxed">They’re real. They’re specific. They’re time-sensitive. They’re actionable.</p>
      
      <p class="mb-6 text-lg leading-relaxed">Here are stronger, more complete examples:</p>

      <h3 class="text-xl font-bold mb-3 mt-8 text-gray-900">Stakeholder Signals</h3>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700 marker:text-yellow-500">
        <li>A VP shares an article about a problem your product solves</li>
        <li>A compliance head comments on a regulatory update</li>
        <li>A champion suddenly stops engaging (engagement decay)</li>
        <li>A new director joins with a background in a competing solution</li>
        <li>A CTO publicly discusses a shift to cloud-first strategy</li>
        <li>A security architect likes content about breach prevention</li>
        <li>A procurement officer follows your company page</li>
      </ul>

      <h3 class="text-xl font-bold mb-3 mt-8 text-gray-900">Organizational Signals</h3>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700 marker:text-yellow-500">
        <li>A hiring spike in a function tied to your value proposition</li>
        <li>A major customer win announced by the target account</li>
        <li>A restructuring that changes decision authority lines</li>
        <li>A board member joining with experience in your category</li>
        <li>A press release signaling a transformation mandate</li>
        <li>A new CFO known for cost optimization initiatives</li>
      </ul>

      <h3 class="text-xl font-bold mb-3 mt-8 text-gray-900">Deal Signals</h3>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700 marker:text-yellow-500">
        <li>New stakeholders viewing the proposal</li>
        <li>Proposal forwarded internally</li>
        <li>Lag in replies after weeks of momentum</li>
        <li>Meeting invites including additional evaluators</li>
        <li>Increased activity on your website from a specific department</li>
        <li>Higher-than-usual time spent on security documentation</li>
      </ul>

      <p class="mb-8 text-lg leading-relaxed font-medium text-gray-900 border-l-4 border-yellow-500 pl-6 py-2 bg-yellow-50/50">These signals matter because they reflect reality inside the deal — not anonymous external noise. Signals show who is leaning in, who is backing out, who is gaining influence, and when the political window is open.</p>

      <p class="mb-6 text-lg leading-relaxed"><strong>Intent data cannot do that. ABM campaigns do not react to that. But modern GTM teams must.</strong></p>

      <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900">Where Honeycomb Fits In — And Why It’s Built for the Post-Intent Era</h2>
      
      <p class="mb-6 text-lg leading-relaxed">Honeycomb is designed for a world where precision matters more than volume, and timing matters more than scoring.</p>
      <p class="mb-6 text-lg leading-relaxed">Honeycomb doesn’t just surface signals — it understands them, contextualizes them, and turns them into exact next steps for every stakeholder in every account.</p>

      <p class="mb-6 text-lg leading-relaxed">Here’s how:</p>

      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">1. Automatic Buying Committee Mapping</h3>
          <p class="text-gray-700 text-lg">Honeycomb identifies decision-makers, influencers, cross-functional players, and hidden blockers.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">2. Deep Persona Intelligence</h3>
          <p class="text-gray-700 text-lg">Tone, preferences, DISC profile, channel habits, and role weight — all mapped automatically.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">3. Real-Time Signal Detection</h3>
          <p class="text-gray-700 text-lg">Honeycomb tracks micro-signals across individuals, teams, and the entire company — the moments that actually drive deal movement.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">4. Action Generation (The Missing Layer in ABM)</h3>
          <p class="text-gray-700 text-lg">For each stakeholder, Honeycomb recommends the next best action: Who to engage, what to say, when to act, where to act, and how to multi-thread.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">5. Continuous Learning Loop</h3>
          <p class="text-gray-700 text-lg">Every action leads to an outcome, and every outcome makes the system smarter.</p>
        </div>
      </div>

      <p class="mb-6 text-lg leading-relaxed">It’s not a dashboard. It’s not a report. It’s not “better intent.”</p>
      <p class="mb-8 text-lg leading-relaxed"><strong>Honeycomb is an orchestration engine driven by real-time signals — the layer ABM never had and intent could never provide.</strong></p>

      <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900">The First Generation Found Accounts. The Next Generation Moves Deals.</h2>
      
      <p class="mb-6 text-lg leading-relaxed">ABM helped identify accounts. Intent helped prioritize them.</p>
      <p class="mb-6 text-lg leading-relaxed">But neither could explain the human dynamics behind a deal — or guide a seller through them.</p>
      
      <p class="mb-6 text-lg leading-relaxed">Signals finally bridge that gap.</p>
      <p class="mb-6 text-lg leading-relaxed">They show what is happening, why it’s happening, and how a seller should respond.</p>
      
      <p class="mb-6 text-lg leading-relaxed">This is the next evolution of GTM. And Honeycomb is building the platform designed for it.</p>
      <p class="mb-6 text-lg leading-relaxed font-bold">If the last decade belonged to ABM and intent data, the next decade belongs to signals — and to the teams who learn to use them first.</p>
    `,
    date: "Dec 7, 2025",
    coverImage: "/images/signals-blog-cover.png",
    author: "Ankush Nagathan",
    role: "CEO of HoneyComb",
    category: "Manifesto"
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
