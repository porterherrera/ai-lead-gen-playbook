"use client";
import { useState } from "react";

const modules = [
  {
    id: 1,
    title: "What is AI Lead Generation?",
    icon: "🎯",
    color: "from-blue-500 to-cyan-500",
    content: {
      overview: "AI lead generation uses artificial intelligence to find, qualify, and deliver potential customers to businesses. Instead of manually searching for prospects, AI tools scrape public data sources, enrich contact information, and score leads based on how likely they are to convert.",
      keyPoints: [
        "AI can find leads from Google Maps, LinkedIn, Yelp, industry directories, and public records",
        "Enrichment tools verify emails, find phone numbers, and add context like company size and revenue",
        "AI writes personalized outreach messages that get 5-7x higher reply rates than generic templates",
        "The entire process from finding a lead to sending the first email can be automated"
      ],
      howItWorks: [
        { step: "1. Define Your Ideal Customer", detail: "Choose an industry, location, and business size. Example: HVAC companies in Phoenix with 5-20 employees." },
        { step: "2. Scrape & Collect", detail: "Use tools like Apollo.io or Google Maps scraping to find businesses matching your criteria." },
        { step: "3. Enrich the Data", detail: "Find the decision-maker's name, direct email, phone number, and company details using Clay or Hunter.io." },
        { step: "4. Score & Qualify", detail: "Use AI to rank leads by likelihood to convert based on signals like online reviews, website traffic, and social presence." },
        { step: "5. Personalize Outreach", detail: "Claude AI writes custom emails referencing specific details about each business." },
        { step: "6. Automate Delivery", detail: "Send campaigns through Instantly.ai with warm-up, rotation, and deliverability tracking." }
      ],
      proTip: "The biggest mistake beginners make is trying to sell leads before they understand what makes a QUALIFIED lead. A plumber doesn't want 100 random names — they want 20 homeowners who just searched for 'emergency plumber near me.' Quality over quantity, always."
    }
  },
  {
    id: 2,
    title: "Business Models & Pricing",
    icon: "💰",
    color: "from-green-500 to-emerald-500",
    content: {
      overview: "There are three main ways to make money with AI lead generation. Each has different profit margins, scalability, and skill requirements.",
      keyPoints: [
        "Monthly Retainer: $2,000-$25,000/month per client. You deliver a set number of qualified leads each month.",
        "Pay-Per-Lead: $50-$1,000 per lead depending on industry. Legal and insurance leads are the most valuable.",
        "Done-For-You Outreach: $5,000-$12,000/month. You find the leads AND run the email/call campaigns. Highest value.",
        "Bundle with AI Plugins: Sell your automation plugins + lead gen together for $3,500 setup + $2,000-$5,000/month."
      ],
      howItWorks: [
        { step: "Retainer Model (Recommended to Start)", detail: "Charge $1,500-$3,000/month. Deliver 30-50 qualified leads. Client handles their own outreach. Easiest to fulfill." },
        { step: "Pay-Per-Lead Pricing by Industry", detail: "Home Services: $25-$75/lead. Medical/Dental: $50-$150/lead. Legal: $200-$650/lead. Real Estate: $30-$100/lead. Auto: $50-$125/lead." },
        { step: "Done-For-You (Highest Revenue)", detail: "You handle everything: lead scraping, enrichment, email copywriting, sending, follow-ups, and booking appointments. Charge $5,000-$12,000/month." },
        { step: "Revenue Math", detail: "5 clients × $2,500/month = $12,500/month. 10 clients × $3,000/month = $30,000/month. Your tool costs are ~$300-$500/month total." }
      ],
      proTip: "Start with the retainer model at $1,500/month. It's the easiest to deliver and gives you time to learn. Once you have 3-5 happy clients and testimonials, raise your prices and add done-for-you outreach."
    }
  },  {
    id: 3,
    title: "The Tool Stack",
    icon: "🛠️",
    color: "from-purple-500 to-pink-500",
    content: {
      overview: "You need 3-4 tools to run a complete AI lead gen operation. Total cost: $200-$500/month. Here's exactly what to use and why.",
      keyPoints: [
        "Apollo.io (Free-$49/mo) — Database of 275M+ contacts. Find businesses, get emails and phone numbers. Start here.",
        "Clay ($149/mo) — Advanced enrichment. Pulls from 50+ data sources, uses AI to research prospects automatically.",
        "Instantly.ai ($37-$97/mo) — Cold email sending with warm-up, deliverability protection, and unlimited accounts.",
        "Claude AI (Your subscription) — Writes personalized outreach, researches prospects, qualifies leads, builds automations."
      ],
      howItWorks: [
        { step: "Beginner Stack (Under $100/mo)", detail: "Apollo.io free tier (50 credits/month) + Instantly.ai Growth ($37/mo) + Claude (your existing sub). Total: ~$37/month." },
        { step: "Growth Stack ($200-$350/mo)", detail: "Apollo.io Basic ($49/mo) + Instantly.ai Hypergrowth ($97/mo) + Hunter.io ($49/mo) + Claude. Total: ~$195-$250/month." },
        { step: "Pro Stack ($400-$600/mo)", detail: "Clay ($149/mo) + Instantly.ai Business ($97/mo) + Apollo.io Professional ($99/mo) + Claude + Smartlead ($94/mo). Total: ~$439-$539/month." },
        { step: "How They Work Together", detail: "Apollo finds the businesses → Clay enriches with decision-maker details → Claude writes personalized emails → Instantly sends and tracks everything." }
      ],
      proTip: "Start with the Beginner Stack. You can run a profitable operation on $37/month. Don't upgrade until you have paying clients covering your tool costs."
    }
  },
  {
    id: 4,
    title: "Finding & Scraping Leads",
    icon: "🔍",
    color: "from-orange-500 to-red-500",
    content: {
      overview: "This is where the magic happens. You'll learn exactly how to find qualified leads for any industry using free and paid tools.",
      keyPoints: [
        "Google Maps is the #1 free source for local business leads — name, phone, website, reviews, all public data",
        "Apollo.io lets you search by industry, location, company size, revenue, and job title",
        "LinkedIn Sales Navigator ($99/mo) is gold for B2B but optional — Apollo covers most needs",
        "Industry directories (Yelp, Angi, HomeAdvisor, Avvo for lawyers, Healthgrades for doctors) are goldmines"
      ],
      howItWorks: [
        { step: "Step 1: Choose Your Niche", detail: "Pick ONE industry to start. Best industries for beginners: Home Services (HVAC, plumbing, roofing), Medical/Dental, Legal, or Real Estate. These businesses understand the value of leads." },
        { step: "Step 2: Define Your Search Criteria", detail: "Location (city + 25 mile radius), Industry (specific — 'HVAC contractor' not just 'home services'), Size (5-50 employees = sweet spot), Reviews (businesses with 10+ Google reviews are established enough to pay for leads)." },
        { step: "Step 3: Pull the Data", detail: "In Apollo.io: Set filters → Export to CSV. From Google Maps: Use a scraping tool or manually collect top results. From directories: Export or manually compile." },
        { step: "Step 4: Clean & Deduplicate", detail: "Remove duplicates, verify emails with Hunter.io or NeverBounce, format phone numbers, fill in missing data." },
        { step: "Step 5: Enrich with AI", detail: "Use Claude to research each business: What services do they offer? Who's the owner? What's their competitive advantage? What pain points might they have?" }
      ],
      proTip: "Your first list should be 100-200 businesses in ONE city, ONE industry. Don't go wide until you've proven the model works narrow. If you can get 3 clients from 200 leads in Phoenix HVAC, you can replicate that in any city."
    }
  },
  {
    id: 5,
    title: "Writing Outreach That Converts",
    icon: "✍️",
    color: "from-teal-500 to-blue-500",
    content: {
      overview: "Most cold emails get ignored because they're generic. AI lets you write personalized messages at scale that actually get responses.",
      keyPoints: [
        "Personalized emails get 5-7x higher reply rates than generic templates",
        "The best cold emails are under 100 words and focus on ONE specific pain point",
        "Always lead with value, not a pitch — show you understand their business before asking for anything",
        "Follow-up emails are where most deals close — 80% of sales happen after the 5th follow-up"
      ],
      howItWorks: [
        { step: "The 4-Line Email Formula", detail: "Line 1: Personal observation about THEIR business (shows you did research). Line 2: The pain point you solve (specific to their industry). Line 3: Brief proof or result. Line 4: Soft CTA (question, not a demand)." },
        { step: "Example Cold Email", detail: "Hi [Name], I noticed [Business] has 47 Google reviews but hasn't responded to the last 12 — that's leaving money on the table with potential customers. I help [industry] businesses in [city] automate their lead follow-up and review management using AI. One of my clients went from 2-hour response times to under 5 minutes. Would it make sense to chat for 15 minutes this week?" },
        { step: "The 3-Email Sequence", detail: "Email 1 (Day 1): Pain point + value. Email 2 (Day 3): Social proof + specific result. Email 3 (Day 7): Final touch + urgency or different angle." },
        { step: "Using Claude to Personalize at Scale", detail: "Give Claude the business name, owner name, industry, and any public info. Ask it to write a personalized opening line and email. Do this for every lead — Claude makes it fast." }
      ],
      proTip: "Never send more than 30 emails per day per email account. Use Instantly.ai to rotate between multiple sending accounts. Warm up new accounts for 2 weeks before sending. This protects your deliverability."
    }
  },  {
    id: 6,
    title: "Booking Your First Client",
    icon: "🤝",
    color: "from-yellow-500 to-orange-500",
    content: {
      overview: "Getting your first paying client is the hardest part. Here's the exact playbook to go from zero to your first $1,500-$3,000/month client.",
      keyPoints: [
        "Your first client should come from your OWN lead gen efforts — eat your own cooking",
        "Offer a free pilot (7-14 days, 10-20 leads) to prove value before asking for payment",
        "Focus on business owners who are already spending money on advertising — they understand lead value",
        "Local networking (BNI groups, Chamber of Commerce, Facebook groups) is underrated for first clients"
      ],
      howItWorks: [
        { step: "Week 1: Build Your Hit List", detail: "Use the same lead gen process you'll sell to find 50-100 local businesses that need leads. Start with home services or medical — they have the most pain and the budget to pay." },
        { step: "Week 2: Outreach Campaign", detail: "Send personalized cold emails to all 50-100 businesses. Use the 3-email sequence from Module 5. Also DM business owners on Instagram/Facebook." },
        { step: "Week 3: Free Pilot Offers", detail: "For anyone who responds positively, offer a free 7-day pilot: 'Let me send you 10-15 qualified leads this week at no cost. If you like the quality, we can talk about a monthly arrangement.' This removes all risk for them." },
        { step: "Week 4: Close & Onboard", detail: "After the pilot, present results: 'I delivered X leads in 7 days. On a monthly plan, that's 40-60 leads/month for $2,000. Want to get started?' Most businesses who see real leads will say yes." },
        { step: "The Pitch Framework", detail: "1) How are you currently getting new customers? 2) What does a new customer worth to you? (Average job value) 3) If I could send you 30-50 people interested in [service] every month, would that be worth $2,000? 4) Let me prove it with a free pilot first." }
      ],
      proTip: "The free pilot is your secret weapon. It costs you almost nothing (just tool costs and time), but it gives the business owner PROOF before they spend money. 70%+ of pilots convert to paid clients when the leads are good."
    }
  },
  {
    id: 7,
    title: "Taking Payments & Contracts",
    icon: "💳",
    color: "from-indigo-500 to-purple-500",
    content: {
      overview: "Once you have interested clients, you need a professional way to take payments and protect both sides with a simple contract.",
      keyPoints: [
        "Use Stripe for recurring payments — set up a subscription and clients auto-pay monthly",
        "Keep contracts simple — 1 page covering deliverables, pricing, payment terms, and cancellation policy",
        "Net-30 payment terms are standard but try to get payment upfront or on the 1st of each month",
        "Always have a 30-day cancellation clause so clients don't feel trapped"
      ],
      howItWorks: [
        { step: "Payment Setup", detail: "Create a Stripe account (free). Set up a Product for each pricing tier. Send payment links or invoices directly from Stripe. Clients enter their card once and get charged automatically each month." },
        { step: "Simple Contract Template", detail: "Your contract should include: Services provided (number of leads/month, industries, delivery method), Monthly fee and payment date, What counts as a 'qualified lead' (has email OR phone, is in target area, is a real business), Cancellation policy (30 days written notice), Your contact information." },
        { step: "Invoicing Best Practices", detail: "Send invoices on the 1st, due by the 5th. Include a summary of last month's delivery (X leads delivered, X with email, X with phone). Use Stripe's built-in invoicing — it's professional and tracks everything." },
        { step: "Handling Refund Requests", detail: "If a client says leads are bad quality, ask for specifics. Replace bad leads for free. If more than 20% are bad, investigate your data source. Having a quality guarantee builds trust." }
      ],
      proTip: "Start with Stripe payment links — no website needed. As you grow, consider GoHighLevel ($97/mo) which combines CRM, invoicing, contracts, and client portals in one tool."
    }
  },
  {
    id: 8,
    title: "What to Say to Businesses",
    icon: "🗣️",
    color: "from-rose-500 to-pink-500",
    content: {
      overview: "The exact scripts, phrases, and talking points that close deals. Practice these until they feel natural.",
      keyPoints: [
        "Never lead with 'I sell leads' — lead with the RESULT: 'I help [industry] businesses get more customers'",
        "Always ask questions first, pitch second. Understand their current situation before offering solutions.",
        "Use their language, not yours. Say 'new customers' not 'leads'. Say 'booked jobs' not 'conversions'.",
        "The best salespeople make the client feel like THEY decided to buy, not that they were sold to."
      ],
      howItWorks: [
        { step: "Opening Line (Cold Call/DM)", detail: "'Hey [Name], quick question — if I could send you 5 people this week who need [their service] in [their city], would that be worth a conversation?' Simple, specific, results-focused." },
        { step: "Discovery Questions", detail: "'How are you getting new customers right now?' 'What's your average job/case/patient worth?' 'How many new customers do you need per month to hit your goals?' 'What have you tried before for marketing?'" },
        { step: "The Pitch", detail: "'Based on what you told me, you need about 10-15 new [customers] per month at [their avg value]. I use AI to find people in [city] who are actively looking for [their service] and deliver their contact info directly to you. My clients typically see [X result]. Want me to show you with a free pilot?'" },
        { step: "Handling Objections", detail: "'Too expensive' → 'What's one new customer worth to you? At [avg value], you only need [X] to cover the entire month.' / 'I've tried this before' → 'What was different? I'd love to understand so I can show you how this is different.' / 'I need to think about it' → 'Totally understand. What specifically do you want to think over? Maybe I can help clarify.'" },
        { step: "Closing", detail: "'Based on everything we talked about, it sounds like [X leads/month] at [$X/month] would be a no-brainer for your business. Should I set up the pilot this week or next?'" }
      ],
      proTip: "Record your first 10 sales calls (with permission). Listen back and notice where you lose people. The fastest way to improve is hearing yourself. Most people talk too much and listen too little on sales calls."
    }
  }
];
export default function Home() {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("overview");

  const toggleComplete = (id: number) => {
    setCompletedModules(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]);
  };

  const progress = Math.round((completedModules.length / modules.length) * 100);
  const current = activeModule ? modules.find(m => m.id === activeModule) : null;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Lead Gen Playbook</h1>
            <p className="text-gray-500 text-sm">Your interactive guide to building an AI lead generation business</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm text-gray-400">{completedModules.length}/{modules.length} modules</div>
              <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500" style={{ width: progress + "%" }} />
              </div>
            </div>
            <div className="text-2xl font-bold text-cyan-400">{progress}%</div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {!activeModule ? (
          <>
            {/* Welcome Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Learn to Build & Sell AI Lead Generation</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">8 interactive modules covering everything from finding your first lead to closing your first $3,000/month client. Click any module to start learning.</p>
            </div>

            {/* Module Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map(mod => (
                <button
                  key={mod.id}
                  onClick={() => { setActiveModule(mod.id); setActiveTab("overview"); }}
                  className={"relative p-6 rounded-xl border transition-all duration-300 text-left group hover:scale-[1.02] " + (completedModules.includes(mod.id) ? "border-green-500/50 bg-green-500/5" : "border-gray-800 bg-gray-900 hover:border-gray-700")}
                >
                  <div className="flex items-start gap-4">
                    <div className={"text-3xl p-3 rounded-lg bg-gradient-to-br " + mod.color + " bg-opacity-10"}>{mod.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-sm">Module {mod.id}</span>
                        {completedModules.includes(mod.id) && <span className="text-green-400 text-xs bg-green-400/10 px-2 py-0.5 rounded-full">Completed</span>}
                      </div>
                      <h3 className="text-lg font-semibold mt-1 group-hover:text-cyan-400 transition-colors">{mod.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{mod.content.overview.slice(0, 120)}...</p>
                    </div>
                    <span className="text-gray-600 group-hover:text-cyan-400 transition-colors text-xl">→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Revenue Potential", value: "$30K+/mo", sub: "with 10 clients" },
                { label: "Startup Cost", value: "$37/mo", sub: "beginner stack" },
                { label: "Time to First Client", value: "2-4 weeks", sub: "with this playbook" },
                { label: "Profit Margin", value: "80-90%", sub: "after tool costs" }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.sub}</div>
                </div>
              ))}
            </div>
          </>
        ) : current ? (
          /* Module Detail View */
          <div>
            <button onClick={() => setActiveModule(null)} className="text-gray-500 hover:text-white mb-6 flex items-center gap-2 transition-colors">
              <span>←</span> Back to all modules
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className={"text-4xl p-4 rounded-xl bg-gradient-to-br " + current.color}>{current.icon}</div>
              <div>
                <div className="text-gray-500">Module {current.id} of {modules.length}</div>
                <h2 className="text-3xl font-bold">{current.title}</h2>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mb-6 bg-gray-900 p-1 rounded-lg w-fit">
              {["overview", "steps", "pro tip"].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={"px-4 py-2 rounded-md text-sm capitalize transition-all " + (activeTab === tab ? "bg-gray-800 text-white" : "text-gray-500 hover:text-gray-300")}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              {activeTab === "overview" && (
                <div>
                  <p className="text-gray-300 text-lg mb-6">{current.content.overview}</p>
                  <h3 className="text-lg font-semibold mb-3">Key Takeaways</h3>
                  <ul className="space-y-2">
                    {current.content.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span className="text-gray-400">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "steps" && (
                <div className="space-y-4">
                  {current.content.howItWorks.map((step, i) => (
                    <div key={i} className="border border-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-cyan-400 mb-2">{step.step}</h4>
                      <p className="text-gray-400 text-sm">{step.detail}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "pro tip" && (
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
                  <div className="text-2xl mb-3">💡</div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Pro Tip</h3>
                  <p className="text-gray-300">{current.content.proTip}</p>
                </div>
              )}
            </div>

            {/* Mark Complete Button */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => toggleComplete(current.id)}
                className={"px-6 py-3 rounded-lg font-medium transition-all " + (completedModules.includes(current.id) ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-cyan-500 text-white hover:bg-cyan-600")}
              >
                {completedModules.includes(current.id) ? "✓ Completed" : "Mark as Complete"}
              </button>
              {current.id < modules.length && (
                <button onClick={() => { setActiveModule(current.id + 1); setActiveTab("overview"); }} className="text-gray-500 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  Next Module →
                </button>
              )}
            </div>
          </div>
        ) : null}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-6 text-center text-gray-600 text-sm">
        AI Lead Gen Playbook — Built by Porter Herrera
      </footer>
    </div>
  );
}
