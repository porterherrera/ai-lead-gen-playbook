"use client";
import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface VideoResource {
  title: string;
  channel: string;
  description: string;
  url: string;
}

interface Step {
  title: string;
  details: string[];
}

interface Exercise {
  title: string;
  description: string;
  tasks: string[];
}

interface Template {
  title: string;
  content: string;
}

interface ProTip {
  title: string;
  tip: string;
}

interface ModuleData {
  id: number;
  title: string;
  icon: string;
  color: string;
  overview: {
    description: string;
    keyPoints: string[];
    benchmarks: string[];
  };
  steps: Step[];
  resources: VideoResource[];
  exercises: Exercise[];
  templates: Template[];
  proTips: ProTip[];
}

const TAB_NAMES = ["Overview", "Steps", "Resources", "Exercises", "Pro Tips"] as const;
type TabName = (typeof TAB_NAMES)[number];

/* ------------------------------------------------------------------ */
/*  Module Data                                                        */
/* ------------------------------------------------------------------ */

const MODULES: ModuleData[] = [

{
  id: 1,
  title: "Getting Started with Claude",
  icon: "\u2728",
  color: "from-cyan-500 to-blue-500",
  overview: {
    description: "Complete beginners guide to using Claude as an AI assistant. Learn what Claude is, how to sign up, how to write effective prompts, and start building confidence with practical examples.",
    keyPoints: [
      "Claude is an AI assistant made by Anthropic that can answer questions, write emails, create content, research topics, write code, and help with countless tasks",
      "You can access Claude for free at claude.ai without installing anything",
      "A prompt is simply the question or instruction you type to Claude—be specific and clear for better results",
      "The Role+Task+Context+Format framework helps you write prompts: tell Claude what role to play, what task to do, provide context, and specify how you want the output formatted",
      "Claude can create tables, write professional emails, research any topic, analyze documents, write code, brainstorm ideas, and much more",
      "Start with simple prompts and gradually ask for more complex things as you get comfortable",
      "Claude works best when you're specific: instead of 'write an email', say 'write a short email (50 words) to a dentist offering a free trial'",
      "You can refine Claude's responses by asking follow-up questions, asking it to adjust tone, make things shorter/longer, or try different approaches"
    ],
    benchmarks: [
      "Average time to write a professional email with Claude: 2 minutes vs. 10-15 minutes manually",
      "Beginner prompt success rate after learning the Role+Task+Context+Format framework: 80%+ get useful first responses",
      "Most common first tasks: email writing (35%), research and summary (25%), table creation (20%), content writing (20%)",
      "Users report 2-3x faster content creation after getting comfortable with Claude prompts"
    ]
  },
  steps: [
    {
      title: "What is Claude and Why Use It",
      details: [
        "Claude is an artificial intelligence assistant created by Anthropic that understands language like a smart human",
        "Unlike search engines (Google), Claude doesn't find web pages—it generates original answers from what it learned during training",
        "Claude is useful for: writing (emails, documents, social media), analysis (reviewing content, data, feedback), research (explaining topics, summarizing), and creativity (brainstorming, generating ideas)",
        "You can use Claude free at claude.ai or get a paid plan for faster responses and higher limits"
      ]
    },
    {
      title: "Sign Up and Get Started",
      details: [
        "Go to claude.ai and click 'Sign Up' (or 'Log In' if you already have an account)",
        "You can sign up with email, Google, or Apple—choose whichever is easiest for you",
        "After signing up, you'll see a chat box on the left side where you type your message (prompt) to Claude",
        "Click the text box and start typing—hit Enter or click the send button to submit your message"
      ]
    },
    {
      title: "Learn the Role+Task+Context+Format Framework",
      details: [
        "Role: Tell Claude what role to play (expert, teacher, salesperson, etc.)—example: 'You are a friendly sales professional'",
        "Task: Clearly state what you want done—example: 'Write a short email offering a free trial'",
        "Context: Give background information Claude needs—example: 'The recipient is a dentist named Dr. Smith in Austin, Texas'",
        "Format: Specify how you want the output—example: 'Under 100 words' or 'as a numbered list' or 'in conversational tone'"
      ]
    },
    {
      title: "Test: Write Your First Email with Claude",
      details: [
        "Copy this prompt and paste it into Claude: 'You are a friendly sales professional. Write a short email (under 100 words) to a dentist named Dr. Smith in Austin, Texas, offering a free 7-day trial of an AI lead generation service.'",
        "Hit Enter and watch Claude generate a complete email for you",
        "Notice how the prompt included role (friendly sales professional), task (write an email), context (dentist, Dr. Smith, Austin, AI lead gen service), and format (under 100 words)",
        "Try tweaking the prompt next time—ask Claude to make it longer, add urgency, change the tone, or target a different business"
      ]
    },
    {
      title: "Test: Create a Table with Claude",
      details: [
        "Copy this prompt: 'Create a table with 5 columns: Business Name, Owner Name, City, Industry, and Phone Number. Fill it with 10 made-up examples of small businesses in Phoenix, Arizona.'",
        "Paste it into Claude and see a complete table appear",
        "You can ask Claude to adjust tables: add columns, remove rows, change the data, reformat it, or export it in different styles",
        "This is useful for research, list-building, data organization, and sales planning"
      ]
    },
    {
      title: "Test: Research with Claude",
      details: [
        "Prompt: 'Hi Claude! I am brand new to using AI. Can you explain what you can help me with in 5 bullet points, using simple language?'",
        "Claude will explain its capabilities in beginner-friendly language",
        "Ask follow-up questions like 'can you give me an example of X?' or 'explain that in simpler terms' to dive deeper",
        "This is how you learn Claude's abilities—by asking and experimenting"
      ]
    },
    {
      title: "Workspace Setup and Desktop App",
      details: [
        "In Claude's browser, you can organize conversations into folders and projects for different topics (sales, writing, research, etc.)",
        "For power users, Anthropic offers a desktop Claude app that integrates with your local files and tools",
        "Pro tip: give your conversations clear titles so you can find them later—instead of 'Chat 1', name it 'Sales Email Templates' or 'Product Research'",
        "You can export conversations and share them with team members for collaboration"
      ]
    },
    {
      title: "Pro Tips: Getting Better Responses",
      details: [
        "Be specific: 'Write an email to a marketing director at a tech startup' is better than 'Write an email'",
        "Use follow-ups: if Claude's response isn't quite right, ask it to adjust—'Make this more casual' or 'Add a specific statistic' or 'Make it shorter'",
        "Examples help: if you show Claude an example of what you want, it matches that style better",
        "Iterate: you don't need the perfect prompt on try one—refine it over a few messages"
      ]
    },
    {
      title: "Understanding Limitations",
      details: [
        "Claude's knowledge comes from training data up until early 2024, so it doesn't know very recent events",
        "Claude cannot browse the internet or access your files directly unless you upload them",
        "Claude cannot execute code or interact with external systems, but it can write code for you to use",
        "For privacy: don't share passwords, credit card numbers, or sensitive company secrets in Claude—treat it like a smart colleague"
      ]
    },
    {
      title: "The Confidence Challenge",
      details: [
        "Challenge: Write 5 different versions of a single email to different business types (dentist, plumber, accountant, salon owner, contractor) using Claude",
        "Spend 10 minutes on this—each email should take 1-2 minutes to generate and refine",
        "Notice how Claude adapts the message based on the industry and context you provide",
        "This exercise builds confidence and shows you Claude's versatility"
      ]
    }
  ],
  resources: [
    {
      title: "Getting Started with Claude",
      channel: "Anthropic Official",
      description: "Introduction to Claude and how to write effective prompts",
      url: "https://www.youtube.com/watch?v=lNaVWULo1KM"
    },
    {
      title: "Prompt Writing Masterclass",
      channel: "AI Explained",
      description: "Learn how to write prompts that get better Claude responses",
      url: "https://www.youtube.com/watch?v=L_Guz73e6fw"
    },
    {
      title: "Claude for Business Professionals",
      channel: "Anthropic",
      description: "How to use Claude for business tasks like email and document writing",
      url: "https://www.youtube.com/watch?v=sTW3RRLYHJU"
    },
    {
      title: "30 Claude Prompts for Business",
      channel: "Business AI",
      description: "Ready-to-use prompts for sales, marketing, and business communication",
      url: "https://www.youtube.com/watch?v=ZjVmFHX5AvU"
    },
    {
      title: "Advanced Prompt Techniques",
      channel: "Prompt Engineering Daily",
      description: "Deep dive into the Role+Task+Context+Format framework and advanced techniques",
      url: "https://www.youtube.com/watch?v=1eLdqUjqPMU"
    },
    {
      title: "Claude vs Other AI Assistants",
      channel: "Tech Comparison Hub",
      description: "How Claude compares to ChatGPT, Gemini, and other AI tools",
      url: "https://www.youtube.com/watch?v=9XKkpQFcRgQ"
    }
  ],
  exercises: [
    {
      title: "Email Writing Exercise",
      description: "Write 3 cold emails to different business types using the Role+Task+Context+Format framework",
      tasks: [
        "Write an email to a gym owner offering your lead gen services",
        "Write an email to a real estate agent offering to help them find more clients",
        "Write an email to an accountant offering a partnership opportunity"
      ]
    },
    {
      title: "Table and Data Organization Exercise",
      description: "Use Claude to create and organize business data in table format",
      tasks: [
        "Create a list of 10 potential target industries for your lead gen service",
        "Create a competitor comparison table (name, pricing, features)",
        "Create a sales pipeline table with prospect names, companies, stage, and next action"
      ]
    },
    {
      title: "Research and Analysis Exercise",
      description: "Use Claude to research topics and summarize key information",
      tasks: [
        "Ask Claude to explain what a lead is in simple language",
        "Ask Claude to list the top 5 skills needed for lead generation",
        "Ask Claude to research and explain what makes a good cold email subject line"
      ]
    }
  ],
  templates: [
    {
      title: "Basic Cold Email Template",
      content: "Subject: [Curiosity hook or personalized reference]\n\nHi [First Name],\n\n[Personalized observation about their business or industry]\n\nI help [target type] [specific outcome]. If you're open to it, I'd love to show you a quick example of how this works for similar companies.\n\nAre you free for a 15-minute call next week?\n\n[Your Name]"
    },
    {
      title: "Role+Task+Context+Format Prompt Template",
      content: "You are a [ROLE].\n\nYour task is to [TASK].\n\nContext: [BACKGROUND INFORMATION]\n\nFormat: [HOW YOU WANT THE OUTPUT]\n\nExample input if relevant: [EXAMPLE]"
    }
  ],
  proTips: [
    {
      title: "Ask Follow-Up Questions",
      tip: "Claude is like a colleague—refine your results by asking it to adjust. 'Make it shorter', 'Add more detail', 'Change the tone to more casual', 'Add statistics' all work great"
    },
    {
      title: "Use Claude for Brainstorming",
      tip: "Ask Claude for 10 ideas for email subject lines, business niches, pricing options, or anything else. Then pick your favorite and refine it"
    },
    {
      title: "Copy-Paste Existing Content",
      tip: "Have an email you like? Paste it to Claude and ask it to write something similar but for a different recipient. This speeds up your workflow"
    },
    {
      title: "Create Prompt Templates",
      tip: "Save the prompts that work best for you in a document. Next time you need an email or table, just update the variables and paste it in"
    },
    {
      title: "Iterate, Don't Give Up",
      tip: "If Claude's first response isn't perfect, that's normal. Ask it to adjust. Most good results come from 2-3 refinement messages"
    }
  ]
},
{
  id: 2,
  title: "What is AI Lead Generation",
  icon: "\ud83e\udd16",
  color: "from-blue-500 to-indigo-500",
  overview: {
    description: "Understand what lead generation is, how it works as a business model, and how AI (Claude) makes it easier and faster. Learn the terminology, why businesses need leads, and how to start your first lead gen campaign.",
    keyPoints: [
      "A lead is a person or business who might be interested in buying something—they're a potential customer",
      "Lead generation is the process of finding and contacting these potential customers to start conversations that might lead to sales",
      "AI lead generation means using Claude to automate and speed up the process: research, list-building, email writing, follow-ups, and data analysis",
      "The core value you provide is saving time for business owners—they can focus on sales while Claude helps you find leads",
      "Lead gen is a scalable business because once you create an effective process, you can repeat it for multiple clients",
      "Most profitable lead gen is vertical (focused on one industry like dentists, plumbers, or contractors) because you can get very good at understanding that market",
      "AI makes lead gen faster than ever before—what took a person 4 hours Claude can do in 30 minutes",
      "The sooner you start, the sooner you get feedback from clients—this is how you learn what works"
    ],
    benchmarks: [
      "Average time to manually build a 50-lead list: 2-3 hours. With Claude: 20-30 minutes",
      "Average lead response rate: 2-8% (2 out of 100 leads reply)",
      "Typical sales conversion rate: 5-15% of leads become clients",
      "Revenue per client in lead gen: $1500-$3000/month on retainer, $25-$150 per lead sold, or $100-$500 per appointment set"
    ]
  },
  steps: [
    {
      title: "What is a Lead?",
      details: [
        "A lead is simply a person or business who might want to buy what you're selling—they're a potential customer",
        "Example leads: dentists who might want help finding new patients, plumbers who want more clients, marketing agencies looking for more leads",
        "Leads have contact information (email or phone) so you can reach out to them",
        "Not all leads are good—a 'qualified lead' is someone who actually needs what you're selling and has the budget to buy it"
      ]
    },
    {
      title: "The Lead Generation Business Model",
      details: [
        "Lead generation as a business means: (1) find leads, (2) contact them with a good pitch, (3) collect contact info from interested ones, (4) sell that list or those appointments to a client",
        "You're essentially connecting businesses with potential customers—the business pays you for this service",
        "The lead gen business model is attractive because it's low overhead (you just need a computer and Claude), scalable (you can serve multiple clients), and profitable (businesses pay well for qualified leads)",
        "Your clients are usually small business owners (dentists, contractors, agencies) who don't have time to find their own leads"
      ]
    },
    {
      title: "How Claude Makes Lead Gen Faster",
      details: [
        "Research: Claude can research an industry and explain it to you in 5 minutes vs. 30+ minutes reading articles",
        "List building: Claude can analyze data and help you find target businesses based on criteria you define",
        "Email writing: Claude can write personalized emails in seconds vs. 5 minutes manually",
        "Data enrichment: Claude can take a list of businesses and add contact info, industry data, or personalization details"
      ]
    },
    {
      title: "Choose Your Niche (The Most Important Decision)",
      details: [
        "A niche is a specific industry or type of business you focus on (dentists, plumbers, real estate agents, SaaS companies, accountants, etc.)",
        "Picking a niche is crucial because it makes you an expert in that market, easier to find leads, easier to write relevant emails, and easier to charge premium prices",
        "Beginner strategy: Pick an industry you have personal knowledge of or interest in—dentistry, construction, fitness, insurance, whatever appeals to you",
        "Use this Claude prompt: 'What are 10 small business niches that would benefit most from lead generation services? For each, explain why they'd benefit and what their typical pain point is. Focus on industries with good profit margins and local businesses.'"
      ]
    },
    {
      title: "Understanding Your Value Proposition",
      details: [
        "Your value proposition is the specific benefit you offer—why would a dentist pay you money instead of trying to find leads themselves?",
        "Common value propositions: 'I find and contact potential patients for you', 'I deliver 20+ qualified leads per month', 'I save you 10 hours per week on lead generation'",
        "The best value prop is measurable and specific: instead of 'help you grow', say 'bring you 30+ new patients per month'",
        "Prompt for Claude: 'I want to offer lead generation services to [your niche]. They currently [their current situation]. My value proposition is [what you do]. Write me 3 different versions of my value prop that emphasize: (1) time savings, (2) revenue impact, and (3) ease of implementation.'"
      ]
    },
    {
      title: "Create Your First Lead Gen Campaign Plan",
      details: [
        "Plan your first campaign: choose a niche, define your target (e.g., 'dentists in Austin with 1-2 locations'), set a lead target (e.g., '30 leads'), and decide on a timeline (e.g., '2 weeks')",
        "Step by step: research the niche with Claude, build a lead list, write emails, send them, track responses, iterate based on results",
        "Your first campaign is a learning experience—don't expect perfection. Expect to try 3-5 different email approaches and see what works",
        "Prompt: 'I want to launch a lead gen campaign for [niche] in [location]. My goal is [number of leads]. Create a 2-week project plan with daily tasks: research, list-building, email templates, sending schedule, and follow-up sequence.'"
      ]
    },
    {
      title: "Building Your Lead List",
      details: [
        "A lead list is your database of target businesses—their name, contact person, email, phone, and relevant details",
        "You can build lists from: Google Maps (search for your target business type), LinkedIn, industry directories, Apollo.io, Hunter.io, or manually combining sources",
        "For your first list, aim for 50-100 qualified leads—this is enough to test your pitch and get early feedback",
        "Quality over quantity: 30 highly targeted leads to the right person beats 300 random emails to wrong people"
      ]
    },
    {
      title: "Measuring Success in Lead Generation",
      details: [
        "Key metrics: response rate (% of people who reply), conversion rate (% of responders who become clients), cost per lead (if you outsource), and revenue per campaign",
        "A good response rate for cold outreach is 2-5%—so with 100 emails, expect 2-5 replies",
        "A good conversion rate from response to client is 10-20%—so from those 2-5 replies, you might get 1 client",
        "Track everything: how many emails sent, how many replies, what happened with each reply (scheduled call, not interested, etc.), and revenue generated"
      ]
    },
    {
      title: "The Beginner's First Step",
      details: [
        "Don't overthink it—pick one niche you're interested in, build a 50-person lead list, write 3 email templates with Claude's help, and send them",
        "Spend max 5 hours on your first campaign: 2 hours research and list-building, 1 hour writing emails, 1 hour sending, 1 hour tracking",
        "Expect low response rate at first (1-2%)—that's normal and okay",
        "The goal of campaign #1 is learning, not making money—you'll get better with every campaign"
      ]
    },
    {
      title: "Common Beginner Mistakes to Avoid",
      details: [
        "Mistake 1: Picking a niche you don't understand—stick with industries you know or are genuinely interested in",
        "Mistake 2: Lists that are too broad—'small businesses' is vague; 'dental practices in Austin with 1-3 locations' is perfect",
        "Mistake 3: Waiting for perfection—your first email won't be perfect and that's okay; send it, learn from responses, improve next time",
        "Mistake 4: Not personalizing at all—generic emails get 0.5% response rate; personalized emails get 3-5%"
      ]
    }
  ],
  resources: [
    {
      title: "What is Lead Generation?",
      channel: "HubSpot Academy",
      description: "Comprehensive overview of lead generation strategies and best practices",
      url: "https://www.youtube.com/watch?v=6DWdLWPJmTQ"
    },
    {
      title: "AI and Lead Generation",
      channel: "Sales Hacker",
      description: "How AI is changing lead generation and what this means for businesses",
      url: "https://www.youtube.com/watch?v=Z7XqXiNqPqI"
    },
    {
      title: "Choosing Your Niche in Lead Gen",
      channel: "Lead Gen Legends",
      description: "How to pick the right industry niche for maximum profitability",
      url: "https://www.youtube.com/watch?v=KQk4TQwDZqU"
    },
    {
      title: "Lead Gen Business Model Explained",
      channel: "Business Mastery",
      description: "How lead generation works as a profitable business and revenue models",
      url: "https://www.youtube.com/watch?v=3bJpLvdWnT0"
    },
    {
      title: "Measuring Lead Gen Success",
      channel: "Conversion Rate Experts",
      description: "Key metrics and KPIs to track your lead generation performance",
      url: "https://www.youtube.com/watch?v=5NzMq_4hQZQ"
    },
    {
      title: "First 100 Leads Challenge",
      channel: "Growth Hacker TV",
      description: "Getting your first leads and converting them to prove the business works",
      url: "https://www.youtube.com/watch?v=mJw6hUjVvgQ"
    }
  ],
  exercises: [
    {
      title: "Niche Selection Exercise",
      description: "Choose your lead generation niche and validate that it's viable",
      tasks: [
        "List 5 potential niches you could target (industries that would benefit from lead generation)",
        "For your top choice, ask Claude: 'Why would [industry] businesses pay for lead generation? What problems does lead gen solve for them?'",
        "Research: find 3 real businesses in your target niche online and write down their names"
      ]
    },
    {
      title: "Value Proposition Exercise",
      description: "Develop and refine your unique value proposition for your niche",
      tasks: [
        "Write your value proposition: 'I help [niche] [specific outcome] by [how you do it]'",
        "Ask Claude to critique it and provide 3 alternatives that emphasize different benefits",
        "Test your value prop: tell 3 people in your target niche and ask for feedback"
      ]
    },
    {
      title: "Campaign Planning Exercise",
      description: "Plan your first lead generation campaign from start to finish",
      tasks: [
        "Define your target audience: industry, location, company size, decision-maker title",
        "Set your goal: how many leads do you want to generate and in what timeframe?",
        "Create a simple 2-week campaign plan: research, list-building, email writing, sending, follow-up"
      ]
    }
  ],
  templates: [
    {
      title: "Niche Selection Template",
      content: "Potential Niche: [Industry]\nWhy I'm interested: [Your reason]\nTarget location/size: [Specifics]\nPotential clients per market: [Estimate]\nPrice they'd likely pay: [Estimate]\nCompetition level: [High/Medium/Low]\nMy advantage: [Why I'm suited for this]"
    },
    {
      title: "Campaign Planning Template",
      content: "Campaign Name: [Campaign ID]\nTarget Niche: [Industry]\nTarget Location: [City/Region]\nTarget audience size: [50/100/200 leads]\nTimeline: [Start date - End date]\nEmail angles to test: [3 different approaches]\nSuccess metric: [What = success?]\nBudget (if any): [Cost estimate]"
    }
  ],
  proTips: [
    {
      title: "Start Small, Get Data",
      tip: "Your first campaign doesn't need 1000 leads. Start with 50 and learn from what works. A successful 50-lead campaign teaches you more than a failed 500-lead campaign"
    },
    {
      title: "Niche Mastery is Valuable",
      tip: "Becoming an expert in one niche (dentistry, construction, real estate) is worth 10x more than being okay at everything. Narrow focus = premium prices"
    },
    {
      title: "Use Claude to Learn Your Niche",
      tip: "Ask Claude: 'What are the biggest challenges facing [industry]?' and 'What are the top companies/trends in [industry]?' This makes your outreach way more relevant"
    },
    {
      title: "Your First Clients Are Research",
      tip: "Your first paid lead gen client isn't about money—it's about proof of concept. Even if you charge only $500, it proves the model works and gives you a testimonial"
    },
    {
      title: "Track Everything from Day One",
      tip: "Create a simple spreadsheet: emails sent, replies received, conversion rate. Track it from the start—this data is gold for improving and selling your service"
    }
  ]
},
{
  id: 3,
  title: "Finding Leads with Claude",
  icon: "\ud83d\udd0d",
  color: "from-orange-500 to-amber-500",
  overview: {
    description: "Learn how to find, research, and qualify leads using Claude. Master sourcing from Google Maps, LinkedIn, industry directories, and enriching lead data with AI to build high-quality lead lists.",
    keyPoints: [
      "Lead sourcing means finding the contact info for people or businesses you want to reach",
      "The best lead sources are specific (Google Maps for local businesses, LinkedIn for professionals) rather than generic (random web searches)",
      "Lead enrichment is adding valuable data to your leads: company size, industry insights, recent news, decision-maker names, to make your pitch more relevant",
      "Qualification is filtering out bad leads—you want businesses that actually need your service and can afford it",
      "Claude can help with lead research by analyzing websites, summarizing company info, identifying decision-makers, and personalizing outreach",
      "Free tools work well: Google Maps (local businesses), LinkedIn search (professionals), Apollo.io free tier, Hunter.io for email finding",
      "Building a lead list is about quality, speed, and personalization—aim for 50 highly researched leads over 100 low-quality ones",
      "The best lead sources become repeatable systems—once you find a source that works, document it and use it again for future campaigns"
    ],
    benchmarks: [
      "Time to research and qualify one lead: 2-3 minutes with Claude, 10-15 minutes manually",
      "Lead list completion time: 50 leads = 2-3 hours with Claude, 8-10 hours manually",
      "Quality of Claude-enriched leads: 3-5x more likely to reply because they're personalized",
      "Cost per lead (using free tools): $0 (unless you use paid data like Apollo.io Premium)"
    ]
  },
  steps: [
    {
      title: "Understand Lead Source Hierarchy",
      details: [
        "Tier 1 (Best): Google Maps, LinkedIn, industry-specific directories—these have real contact info and you can target precisely",
        "Tier 2 (Good): Apollo.io, Hunter.io, RocketReach—these provide email finding and enrichment",
        "Tier 3 (Okay): Generic web searches, manual LinkedIn scrolling—these work but are slower",
        "Pro strategy: combine sources, e.g., find business names on Google Maps, then use Apollo.io to find exact email addresses"
      ]
    },
    {
      title: "Use Google Maps to Build a Lead List",
      details: [
        "Google Maps is perfect for finding local businesses—dentists, plumbers, contractors, salons, accountants, etc.",
        "How: search '[business type] in [city]' (e.g., 'dentist in Austin'), then note names, locations, phone numbers, and websites",
        "For each business, note: name, address, phone, website, owner/manager name (if visible), and any other relevant details",
        "Use this Claude prompt: 'I have a list of [business type] in [city]. For each business [give business names], help me identify: (1) likely owner/manager name, (2) potential pain points they face, (3) how my lead gen service would help them, (4) a personalized angle for reaching out to them.'",
        "Google Maps is free and doesn't require API keys"
      ]
    },
    {
      title: "Find Contact Information with Apollo.io and Hunter.io",
      details: [
        "Apollo.io: Free version lets you search for business emails. Sign up at apollo.io, search for a company, and export contacts",
        "Hunter.io: Find business email addresses from company websites. Go to hunter.io, enter a company domain, see all email patterns",
        "Workflow: find business name on Google Maps, use Apollo/Hunter to find email or phone of decision-maker",
        "For outreach, email is better than phone initially—cold calls have lower response rates, emails let them respond on their schedule",
        "Pro tip: if you can't find a direct email, try [firstname]@[company.com] format or check their website contact page"
      ]
    },
    {
      title: "Create an Ideal Customer Profile (ICP)",
      details: [
        "An ICP is a description of your perfect customer—use it to filter out bad leads early",
        "Example ICP for a dentist lead gen service: 'Dental practices in cities with 100K+ population, 1-3 locations, revenue $500K+, currently open to new marketing channels'",
        "Your ICP should include: industry, company size, revenue range, location, pain points they have, and budget to pay for your service",
        "Use this Claude prompt: 'I'm offering [your service] to [niche]. Create a detailed Ideal Customer Profile that specifies: size, revenue, location, current challenges, and reasons they'd want to buy from me. Then list 3 disqualifying factors (red flags) that mean I should skip a prospect.'"
      ]
    },
    {
      title: "Lead Scoring and Qualification",
      details: [
        "Lead scoring is rating prospects: high-priority (perfect fit), medium (good fit), low (not ideal but possible)",
        "High-priority indicators: recent news about the business, they're actively hiring/expanding, you found a personal connection, they have a website/social presence",
        "Red flags to skip: business is closing, they recently hired a competing service, no way to contact decision-maker, too small to afford your service",
        "Use this prompt with Claude: 'Here are my top 50 leads: [list them]. For each, tell me: (1) how well they fit my ICP (1-10), (2) what makes them a good fit, (3) any red flags. Then rank them by score and tell me which 20 to prioritize.'"
      ]
    },
    {
      title: "Research Prospects and Find Personalization Angles",
      details: [
        "Personalization angle: something unique about them that you can reference in your email to prove you researched them",
        "Examples: recent Google review mentioning they need help, LinkedIn post about hiring, company just expanded, award they won, industry news relevant to them",
        "Research workflow: (1) find their business/name, (2) check their website, (3) scan Google reviews, (4) check LinkedIn, (5) look for recent news about their company",
        "Use this Claude prompt: 'I'm reaching out to [prospect name/company]. [Include what you know about them]. Help me find 3 personalization angles I can mention in a cold email to show I researched them.'",
        "The best leads are those where you found a specific, recent, personalized angle"
      ]
    },
    {
      title: "Enrich Your Lead Data with Claude",
      details: [
        "Lead enrichment is adding extra information to make your pitch more targeted: industry insights, decision-maker titles, company size, funding status",
        "Example: knowing a company just raised funding is valuable (they have money to spend) or knowing they're seasonal helps timing",
        "Use this workflow: (1) find basic info (name, email, company), (2) paste company website or LinkedIn to Claude, (3) ask Claude to identify decision-maker and key opportunities",
        "Prompt example: 'This is the website for [company name]: [paste website content or URL]. Tell me: (1) company size, (2) who is the decision-maker for [your service], (3) their main business challenge based on their website, (4) how my [service] helps them.'",
        "Claude can quickly summarize websites and identify who to contact"
      ]
    },
    {
      title: "Build and Organize Your Lead Database",
      details: [
        "Use Google Sheets or Airtable to organize your leads: name, company, email, phone, decision-maker, ICP score, personalization angle, status (not contacted, contacted, reply, client)",
        "Keep it simple at first: Name | Company | Email | Phone | Decision-Maker | Priority Level | Personalization Angle | Date Added",
        "Update status column as you contact them: 'Email sent' -> 'Awaiting reply' -> 'Reply received' -> 'Scheduled call' -> 'Client' or 'Not interested'",
        "This becomes your sales pipeline and lets you track conversion rates"
      ]
    },
    {
      title: "Use LinkedIn for Finding and Researching",
      details: [
        "LinkedIn search: search for your target role (e.g., 'dentist' or 'practice manager'), filter by location, then visit their profile",
        "LinkedIn gives you: job title, company size, tenure, recent posts/activity, sometimes direct message option",
        "Pro tip: if someone just started a new position (switched companies or promoted), they're often more open to new vendors",
        "You can message people on LinkedIn first to build rapport before email (though cold emails still work)",
        "LinkedIn is better for B2B (contacting business owners) than Google Maps is for outreach, but Google Maps is better for finding addresses"
      ]
    },
    {
      title: "Scaling Your Lead Finding",
      details: [
        "Create a repeatable system: day 1 (find 50 names on Maps), day 2 (find emails on Apollo), day 3 (research and enrich on Claude), day 4 (organize in spreadsheet), day 5 (write and send emails)",
        "Once you've done this for one niche, it gets faster each time—you know what sources work, you have email templates, your Claude prompts are refined",
        "For future campaigns, aim to build a list 30% faster than your first one",
        "As you scale, consider tools like Zapier or Make to partially automate lead pulling from sources"
      ]
    },
    {
      title: "Cold Outreach Preparation Checklist",
      details: [
        "Before sending a single email, verify: (1) you have the right contact (right person, right email), (2) your email passes DMARC/SPF checks (use a real email domain), (3) you have a 5-email follow-up sequence ready, (4) you know what you'll say if they reply (your pitch/offer)",
        "Warm-up: if you're new to email outreach, send 10-20 test emails to warm-up your domain reputation before going hard on big campaigns",
        "Deliverability check: use Mail-tester.com to make sure your first email is formatted well and won't land in spam",
        "Finally: send to a test group of 10-20 first, check reply rate, iterate, then scale to your full list"
      ]
    }
  ],
  resources: [
    {
      title: "Building a Lead List from Scratch",
      channel: "Lead Generation 101",
      description: "Step-by-step guide to sourcing and qualifying leads for your first campaign",
      url: "https://www.youtube.com/watch?v=GjPsZrMN1u4"
    },
    {
      title: "Google Maps Lead Generation",
      channel: "Local Business Leads",
      description: "How to find and extract leads from Google Maps systematically",
      url: "https://www.youtube.com/watch?v=5VqFrJZQKxI"
    },
    {
      title: "Email Finder Tools Comparison",
      channel: "Sales Tools Review",
      description: "Deep dive into Apollo.io, Hunter.io, and RocketReach for finding business emails",
      url: "https://www.youtube.com/watch?v=8Z2N_zBpLfk"
    },
    {
      title: "Lead Qualification and ICP",
      channel: "RevOps Mastery",
      description: "Creating an Ideal Customer Profile and qualifying leads like a pro",
      url: "https://www.youtube.com/watch?v=3qKjN2_FXz0"
    },
    {
      title: "LinkedIn Lead Generation",
      channel: "Sales Navigator Tips",
      description: "Advanced techniques for finding and connecting with prospects on LinkedIn",
      url: "https://www.youtube.com/watch?v=7RgK_3sVKmk"
    },
    {
      title: "Lead Research and Enrichment",
      channel: "Prospecting Pro",
      description: "How to research companies and personalize your outreach at scale",
      url: "https://www.youtube.com/watch?v=9xN4Fy2kV3c"
    }
  ],
  exercises: [
    {
      title: "Build Your First Lead List",
      description: "Create a 50-lead list for your target niche using free tools",
      tasks: [
        "Find 50 businesses matching your niche criteria on Google Maps",
        "For at least 20 of them, find email addresses using Apollo.io free version",
        "Organize all 50 in a Google Sheet with columns: Business Name, Owner/Manager, Email, Phone, City, Website"
      ]
    },
    {
      title: "Lead Research and Enrichment",
      description: "Research and enrich your best 10 leads with personalization angles",
      tasks: [
        "Pick your best 10 leads from your list (based on ICP fit)",
        "For each, spend 3 minutes researching: check their website, Google reviews, any recent news",
        "In your spreadsheet, add a 'Personalization Angle' column and write down one specific thing about them you can reference in an email"
      ]
    },
    {
      title: "Lead Scoring Practice",
      description: "Score and qualify your leads to identify top prospects",
      tasks: [
        "Review all 50 leads and score each 1-10 based on fit with your ICP",
        "Flag any red flags (business closing, wrong decision-maker, can't afford service)",
        "Identify your top 20 leads to prioritize for outreach and note why each is strong"
      ]
    }
  ],
  templates: [
    {
      title: "Ideal Customer Profile (ICP) Template",
      content: "Industry: [Specific industry]\nCompany Size: [10-50 employees / 50-200 / 200+ / Solo]\nRevenue Range: [$500K-$1M / $1M-$5M / $5M+]\nLocation: [Geographic focus]\nCurrent Pain Points: [3-5 key challenges]\nDecision-Maker Title: [Role that approves spending]\nBudget Capacity: [What they likely can afford]\nGreen Flags: [Signs they're a great fit]\nRed Flags: [Reasons to skip]"
    },
    {
      title: "Lead Database Template",
      content: "Business Name | Owner/Manager Name | Email | Phone | City | Website | Decision-Maker Title | Company Size | ICP Score (1-10) | Personalization Angle | First Contact Date | Status | Last Follow-Up | Notes"
    }
  ],
  proTips: [
    {
      title: "Quality Over Quantity Always",
      tip: "30 highly researched, personalized leads beats 300 generic emails. The time you save by bulk-emailing isn't worth the 0.5% response rate"
    },
    {
      title: "Build Relationships with Lead Sources",
      tip: "Once you find a lead source that works (e.g., certain Google Maps searches, LinkedIn filters, Apollo.io saved searches), save it and reuse it. This becomes your repeatable lead factory"
    },
    {
      title: "Verify Email Addresses",
      tip: "Free tools are good but not 100% accurate. When in doubt, try the email anyway or check the company website contact page—a real email beats a bounce every time"
    },
    {
      title: "Use Claude to Extract Data from Websites",
      tip: "Paste a company website into Claude and ask it to identify the decision-maker, company size, and key opportunities—way faster than reading it yourself"
    },
    {
      title: "Document Your Lead Sources",
      tip: "When you find a source that works, write down exactly how to find leads there. This becomes your internal playbook for scaling"
    }
  ]
},
{
  id: 4,
  title: "Business Models & Pricing",
  icon: "\ud83d\udcb0",
  color: "from-green-500 to-emerald-500",
  overview: {
    description: "Understand the four main business models for lead generation: retainer, pay-per-lead, pay-per-appointment, and done-for-you. Learn pricing strategies, how to calculate costs, and how to position your service for maximum profitability.",
    keyPoints: [
      "The four main lead gen business models are retainer (monthly fee), pay-per-lead (charge per qualified lead), pay-per-appointment (charge when they book a meeting), and done-for-you (full service at premium price)",
      "Retainer ($1,500-$5,000/month) is most predictable income but requires consistent results to retain clients",
      "Pay-per-lead ($15-$150 per lead depending on niche) is easiest to start but requires you to deliver many leads or low income",
      "Pay-per-appointment ($50-$500 per booked appointment) aligns your incentive with client success",
      "Done-for-you ($3,000-$10,000/month+) is highest revenue but requires you to do more work or hire a team",
      "The best pricing strategy combines your costs, client value, market rates, and your experience level",
      "Most beginners start with pay-per-lead or pay-per-appointment because it requires less upfront credibility and allows clients to test you before committing",
      "As you prove results and build testimonials, you can increase prices and move toward retainer models"
    ],
    benchmarks: [
      "Average lead gen retainer: $2,000-$4,000/month. Most clients need 3-5 retainers at this price to make $6K-$20K/month",
      "Average pay-per-lead pricing: $25-$75 per lead in most niches. At 3 leads/day, that's $2,250-$6,750/month per client",
      "Average pay-per-appointment: $100-$300 per booked appointment. At 10 appointments/month, that's $1,000-$3,000/month per client",
      "Done-for-you retainer: $3,000-$10,000/month. Usually for established operators with a track record"
    ]
  },
  steps: [
    {
      title: "The Retainer Model ($1,500-$5,000/month)",
      details: [
        "Retainer means the client pays a fixed fee every month, regardless of results. You commit to delivering X leads, X calls booked, or X appointments per month",
        "Example: client pays $3,000/month and you commit to delivering 20 qualified leads or 5 booked appointments",
        "Pros: predictable income, client is invested long-term, you build deeper relationships",
        "Cons: requires you to hit targets consistently or lose the client, need multiple clients to hit revenue goals, harder to close as a beginner without proof"
      ]
    },
    {
      title: "The Pay-Per-Lead Model ($15-$150/lead)",
      details: [
        "Pay-per-lead means you charge per qualified lead you deliver—client only pays for actual results",
        "Example: you charge $50 per lead. If you deliver 20 leads, client pays $1,000",
        "Pros: easy to understand, client feels like they only pay for value, easiest to start without testimonials",
        "Cons: lower income if leads don't convert (they might blame you), you need to deliver high volume to make good money, incentive not perfectly aligned (you want to send volume, they want quality)"
      ]
    },
    {
      title: "The Pay-Per-Appointment Model ($50-$500/appointment)",
      details: [
        "Pay-per-appointment means you charge when the prospect actually books a meeting with your client (not just an email exchange)",
        "Example: you charge $150 per booked appointment. If 5 prospects book meetings with your client, they pay $750",
        "Pros: highest alignment with client success, clients love it because they only pay when leads are qualified enough to book, recurring revenue potential if ongoing",
        "Cons: harder to track/verify, some clients dispute whether an appointment 'counts', requires better leads than pay-per-lead"
      ]
    },
    {
      title: "The Done-For-You Model ($3,000-$10,000+/month)",
      details: [
        "Done-for-you means you handle their entire lead generation: research, email, follow-up, qualification, everything",
        "Example: you charge $5,000/month and deliver 50 qualified leads, handle all outreach, track conversion, provide monthly reports",
        "Pros: highest revenue per client, clients appreciate the white-glove service, easier to justify higher prices",
        "Cons: highest time commitment, need proven track record to close, need to hire team as you scale"
      ]
    },
    {
      title: "Pricing Strategy: Know Your Numbers",
      details: [
        "Calculate your costs: (1) time spent per client per month in hours, (2) tools (Apollo.io, Hunter.io, etc.) cost per client, (3) your hourly rate goal",
        "Example: if you spend 20 hours/month per client, use $50/tools, and want $50/hour rate: (20 hours × $50) + $50 tools = $1,050 minimum price",
        "Calculate client value: (1) how many leads will a client get, (2) what's the typical value per lead to their business (average contract value × close rate), (3) how much would they save by not hiring someone full-time",
        "Use this Claude prompt: 'I'm offering lead gen for [niche]. My costs are [time, tools, etc.]. A typical client will get [X leads/month]. Each lead is worth roughly $[Y] to them. What should I charge? Consider: my costs, their value gained, and market rates.'"
      ]
    },
    {
      title: "Pricing by Niche and Market",
      details: [
        "High-value niches (real estate, finance, SaaS, law) can support $150-$500+ per lead because each lead is worth $1,000+",
        "Medium-value niches (home services, agencies, e-commerce) support $25-$75 per lead",
        "Low-value niches (local retail, restaurants) harder to charge premium prices",
        "Beginner strategy: start in a medium-value niche where you can demonstrate success quickly, then move to higher-value as you build social proof"
      ]
    },
    {
      title: "Your Pricing Tier Strategy",
      details: [
        "Tier 1 (Starter): pay-per-lead at $25-$50/lead or pay-per-appointment at $75-$150—best for beginners, no testimonials required",
        "Tier 2 (Standard): retainer at $1,500-$3,000/month with 20-30 leads/month committed—requires some proof of concept",
        "Tier 3 (Premium): retainer at $3,000-$7,000/month or done-for-you models—requires strong testimonials and case studies",
        "Beginner approach: offer Tier 1 pricing, deliver amazing results, get testimonials, then create Tier 2 and Tier 3 options"
      ]
    },
    {
      title: "Proposal and Contract Essentials",
      details: [
        "Every client needs a written proposal that specifies: (1) scope (what you'll deliver), (2) timeline (when), (3) pricing (what they pay), (4) success metrics (how you measure success)",
        "Example scope: 'Deliver 30 qualified leads per month in the [niche] in [city], with personal research and personalization, follow-up sequence included'",
        "Success metrics: 'success = a lead is qualified if they are in our ICP and have email confirmed to be valid'",
        "Use this Claude prompt: 'Write me a professional proposal for offering [lead gen service] to [niche]. Include: (1) what I'll deliver, (2) timeline, (3) pricing, (4) how success is measured, (5) terms (30-day trial, money-back guarantee), and (6) testimonial placeholder'",
        "Pro tip: offer a 30-day money-back guarantee for first clients—it removes risk and makes closing easier"
      ]
    },
    {
      title: "Handling Pricing Objections",
      details: [
        "Objection: 'That's expensive' -> Response: 'Each lead is worth $[X] to you, so [your pricing] ROI is positive day one'",
        "Objection: 'I want to pay per result' -> Response: 'I offer pay-per-lead at $[X], or we can do retainer with guaranteed minimums'",
        "Objection: 'Let's start with a trial' -> Response: 'Great, let's do [15/30] days at [reduced price] to prove it works'",
        "Use this prompt with Claude: 'A prospect just said [their objection about pricing]. Help me craft a response that: (1) validates their concern, (2) reframes the value, (3) offers a solution'",
        "Remember: clients are often resistant to any price at first. A slightly lower price with a guarantee beats giving up on a high price"
      ]
    },
    {
      title: "Building a Rate Card and Service Menu",
      details: [
        "Create a simple rate card (public pricing) that makes it clear and easy for prospects to understand your offers",
        "Example rate card: 'Pay-Per-Lead: $50 per qualified lead. 10 leads minimum, paid monthly. Pay-Per-Appointment: $150 per booked meeting. Retainer: $3,000/month + 20 leads minimum guaranteed.'",
        "Include: what's included, what's not, timeline, cancellation policy, trial period if applicable",
        "Share your rate card in sales conversations—transparency builds trust",
        "Pro tip: offering multiple price points (starter/standard/premium) lets clients self-select the right option"
      ]
    },
    {
      title: "Scaling Prices as You Gain Proof",
      details: [
        "Month 1-2: Start low ($30-40/lead, $1,500 retainer) and prove the model works",
        "Month 3-6: Get 2-3 successful clients, document their results, ask for testimonials",
        "Month 6-12: Increase prices 25-50% ($50-60/lead, $2,500 retainer) and use testimonials in proposals",
        "Year 2: Move toward done-for-you models and retainers, prices increase to $4,000-6,000/month",
        "Remember: the best time to raise prices is when you have strong testimonials and a waitlist of potential clients"
      ]
    }
  ],
  resources: [
    {
      title: "SaaS Pricing Strategies",
      channel: "Stripe",
      description: "Comprehensive guide to pricing models and psychology for services and products",
      url: "https://www.youtube.com/watch?v=CdJt-Hcxo-4"
    },
    {
      title: "Lead Gen Business Pricing",
      channel: "Sales Hacker",
      description: "How to price lead generation services and different pricing models",
      url: "https://www.youtube.com/watch?v=qK_zSyNGsF8"
    },
    {
      title: "Retainer Model Best Practices",
      channel: "Agency Growth",
      description: "How to sell and manage retainer contracts successfully",
      url: "https://www.youtube.com/watch?v=GG3QVnJMKTQ"
    },
    {
      title: "Sales Proposal Writing",
      channel: "HubSpot Sales",
      description: "How to write compelling proposals that close deals",
      url: "https://www.youtube.com/watch?v=c5zUMOvhGGQ"
    },
    {
      title: "Handling Pricing Objections",
      channel: "Sales Insights",
      description: "Tactics for overcoming price objections and closing premium deals",
      url: "https://www.youtube.com/watch?v=kqQhX0n0s3Q"
    },
    {
      title: "Build Your Service Menu",
      channel: "Service Business Mastery",
      description: "Creating tiered offerings that let customers choose their level",
      url: "https://www.youtube.com/watch?v=ZRwXm1CRVEI"
    }
  ],
  exercises: [
    {
      title: "Calculate Your Pricing",
      description: "Determine what to charge based on your costs and market value",
      tasks: [
        "Calculate your monthly costs: tools (Apollo, Hunter, etc.), your hourly rate × hours per client, any software subscriptions",
        "Research market rates: ask Claude for typical pricing in your target niche, check competitor websites if possible",
        "Determine client value: what's a lead worth to your target customer? (Lead value = average customer value × close rate)",
        "Use all three inputs to decide your pricing for each model: pay-per-lead, pay-per-appointment, and retainer"
      ]
    },
    {
      title: "Create a Proposal Template",
      description: "Build a reusable proposal you can customize for each client",
      tasks: [
        "Write a proposal for a hypothetical client in your niche (use a real company name if you like)",
        "Include: what you'll deliver, timeline, pricing, success metrics, terms (trial period, guarantee)",
        "Have Claude review it and suggest improvements for clarity and sales impact",
        "Save this as your template for future use"
      ]
    },
    {
      title: "Pricing Objection Playbook",
      description: "Prepare responses to common pricing objections",
      tasks: [
        "List 5 pricing objections you might hear from prospects",
        "For each, write a response that validates their concern and reframes the value",
        "Practice saying these responses out loud to build confidence",
        "Ask Claude to help you role-play: 'I'll be a skeptical prospect, you convince me to buy your $3,000 retainer'"
      ]
    }
  ],
  templates: [
    {
      title: "Pricing Calculation Template",
      content: "Monthly Costs:\n- Tools (Apollo, Hunter, etc.): $[X]\n- Hourly rate: $[X]/hour\n- Hours per client: [X]\n- Total cost per client: $[X]\n\nMarket Value:\n- Average lead value to client: $[X]\n- Leads per month: [X]\n- Client total value: $[X]\n\nRecommended Pricing:\n- Pay-per-lead: $[X]\n- Pay-per-appointment: $[X]\n- Retainer: $[X]/month"
    },
    {
      title: "Service Proposal Template",
      content: "PROPOSAL FOR: [Client Name]\nDATE: [Date]\nFROM: [Your Name]\n\nSCOPE:\nI will deliver [X] qualified leads per month in [industry/city], with [services included].\n\nTIMELINE:\n[X] weeks from contract start\n\nPRICING:\n[Cost breakdown]\nTotal: $[X]/month or $[X] per [unit]\n\nSUCCESS METRICS:\n[How success is defined]\n\nTERMS:\n- [Guarantee/Trial period]\n- Reporting: [Monthly/Weekly]\n- Next steps: [What happens when they say yes]"
    }
  ],
  proTips: [
    {
      title: "Start Low, Raise Often",
      tip: "Your first client at $1,500/month is worth way more than no clients while you wait to figure out 'perfect' pricing. Start, deliver results, then increase"
    },
    {
      title: "Document Everything",
      tip: "Every time a client gets a result, take a screenshot or note. These become your testimonials and social proof for raising prices later"
    },
    {
      title: "Hybrid Pricing is Powerful",
      tip: "Consider hybrid models: retainer + pay-per-lead (e.g., $1,000/month + $30/lead). This combines security with upside potential"
    },
    {
      title: "Money-Back Guarantee Removes Objections",
      tip: "Offering '30-day money-back guarantee if you're not satisfied' removes almost all pricing resistance because the prospect has zero risk"
    },
    {
      title: "Value, Not Time, Determines Price",
      tip: "Don't think 'I spent 5 hours on this, so I charge 5 × $50 = $250'. Think 'This lead is worth $2,000 to the client, so I charge 10% of value = $200'. Value pricing beats hourly thinking"
    }
  ]
},

{
  id: 5,
  title: "Writing Outreach with Claude",
  icon: "\u270f\ufe0f",
  color: "from-pink-500 to-rose-500",
  overview: {
    description: "Learn to write cold emails (emails to people who don't know you yet) that actually get replies. We'll use Claude to craft personalized messages, test different versions, and build follow-up sequences that turn strangers into clients. Cold email is the foundation of sustainable lead generation.",
    keyPoints: [
      "A good cold email has a clear hook (something that makes them want to read), personalization based on their business or interests, and one specific ask",
      "Keep your emails under 120 words\u2014short emails get 2-3x more replies than long ones because people are busy",
      "Personalization increases reply rates by 2-3x because it shows you researched them and aren't just blasting templated messages",
      "Subject lines matter enormously\u2014they determine if someone even opens your email, so 40% of your success comes from nailing this one line",
      "Follow-up sequences are critical: most replies come on emails 2-4, not the first email, so don't give up after one send",
      "A/B testing means sending two slightly different versions to different people and tracking which gets more replies, then using the winning version",
      "Email deliverability is the art of making sure your emails land in the inbox, not the spam folder\u2014this depends on your domain reputation and email warmth",
      "Claude is perfect for this because it generates variations instantly, helps you personalize at scale, and makes A/B testing fast"
    ],
    benchmarks: [
      "Average open rates for good cold email: 45-65%",
      "Average reply rates: 5-15% (this is excellent for cold outreach)",
      "Best send times: Tuesday\u2013Thursday, 10am\u201312pm recipient's time zone",
      "Follow-up effectiveness: 50% of replies come from emails 2-4, making multi-email sequences essential"
    ]
  },
  steps: [
    {
      title: "Understanding Cold Email Anatomy",
      details: [
        "Cold email has five essential parts: subject line (gets them to open), hook/opening line (shows you researched them), problem statement (what pain they likely have), solution brief (your offer), and call to action (what you want them to do next)",
        "The best cold emails feel personal and conversational, like you're talking to a friend, not a corporate robot",
        "Try this prompt with Claude: 'I want to send a cold email to [person's name] at [company]. They [describe their likely challenge]. Write me a short, conversational email under 100 words that opens with a personalized observation, explains how I can help, and asks for a 15-minute call. Make it sound human, not corporate.'",
        "Remember: the goal is a reply or a meeting, not a sale\u2014that comes later",
        "Poor subject lines kill deliverability: avoid words like 'Free', 'Urgent', 'Act Now', 'Last Chance' because they trigger spam filters"
      ]
    },
    {
      title: "Writing Subject Lines with Claude",
      details: [
        "Your subject line is the gatekeeper\u2014if it doesn't get opened, nothing else matters. Aim for curiosity, relevance, or specificity",
        "Good subject lines: mention something specific to their business, ask a question, or reference a shared connection. Bad ones are generic or sound salesy",
        "Paste this into Claude: 'Generate 10 cold email subject lines for reaching out to [their title] at [company in industry]. Their business likely faces [specific challenge]. Make 5 curiosity-based (question style) and 5 specificity-based (reference their industry or a detail about their situation). No emojis, no exclamation marks, just professional.'",
        "Test at least 3 subject lines with different groups to see which gets the highest open rate",
        "Pro tip: subject lines with the person's first name or company name get slightly higher open rates"
      ]
    },
    {
      title: "Writing the Opening Line with Personalization",
      details: [
        "Your opening line must show research\u2014mention something about their company, a recent post they made, their industry challenge, or a mutual connection. This proves you're not mass-mailing",
        "Examples: 'I saw you recently posted about [specific topic]', 'I noticed [company] just launched [product]', 'We work with similar companies in [industry]', 'I came across your profile and was impressed by [specific achievement]'",
        "Use this Claude prompt: 'I'm reaching out to [person's name], a [their title] at [company name]. [Insert one fact about them\u2014recent post, company achievement, industry challenge, or shared connection]. Write me three different personalized opening lines (one sentence each) that reference this and feel genuine, not corporate.'",
        "Personalization takes 30 seconds of research per person but increases your reply rate dramatically",
        "Never lie in personalization\u2014they will notice and it destroys trust"
      ]
    },
    {
      title: "The Body: Stating Your Value Proposition",
      details: [
        "The body is where you briefly explain how you can help them. This is NOT a pitch\u2014it's a statement of value that makes them curious",
        "Structure: acknowledge their situation, explain the transformation or result they could get, and hint at how you do it without going deep",
        "Prompt for Claude: 'I help [target customer type] by [specific outcome]. Their common challenge is [problem]. Write me a 2-3 sentence body that explains my value without selling hard. Focus on the transformation they'd get, not the features of my service. Make it conversational.'",
        "Use specific metrics or outcomes when possible: 'increase leads by 40%' is stronger than 'improve results'",
        "Keep this section short\u2014aim for 3-4 sentences maximum"
      ]
    },
    {
      title: "The Call to Action: Asking for the Meeting",
      details: [
        "Your CTA (call to action) is the last sentence: what do you want them to do? Be specific: 'schedule a 15-minute call', 'grab a 20-min coffee chat', 'reply with your availability'",
        "Weak CTAs: 'let's chat' or 'let me know what you think'. Strong CTAs: 'Are you open to a quick 15-minute call Tuesday or Wednesday?'",
        "Try this prompt: 'Write me 5 different friendly but specific call-to-action sentences for a cold email. Each should ask for a 15-minute discovery call. Make one urgent (this week), one casual (flexible timing), one with a specific offer (plus small bonus), one question-based (Are you open to...), and one direct (I'd love to show you...).'",
        "Adding a specific timeframe ('next week', 'this Tuesday') gets more yes answers than leaving it open",
        "Pro tip: make it easy to say yes\u2014suggest two specific times instead of asking 'when works for you'"
      ]
    },
    {
      title: "Building a 5-Email Follow-Up Sequence",
      details: [
        "A follow-up sequence is 4-5 emails sent over 2-3 weeks to the same person if they don't reply. Most cold email replies come from emails 2-4, not the first",
        "Spacing: send email 1, wait 3 days, email 2, wait 2 days, email 3, wait 4 days, email 4, wait 5 days, email 5 (if planning 5)",
        "Each follow-up should add new value: a case study, a relevant article, a new angle about their business, or a softer ask",
        "Paste this into Claude: 'Create a 5-email follow-up sequence for a cold prospect who hasn't replied. Email 1 (initial): hook about [their challenge]. Email 2: add a case study or proof. Email 3: different angle or new research point. Email 4: social proof or third-party credibility. Email 5: final soft ask or new value prop. All under 100 words each. Make them feel different from each other, not repetitive.'",
        "Pro tip: vary your subject lines in follow-ups\u2014don't use 're:' every time, sometimes use new hooks"
      ]
    },
    {
      title: "A/B Testing Your Emails",
      details: [
        "A/B testing means sending version A to some people and version B to others, then measuring which gets more replies. This tells you what works",
        "Test one variable at a time: subject line OR opening hook OR CTA\u2014not all three, or you won't know what made the difference",
        "Variables to test: curiosity vs. specific subject lines, short vs. slightly longer emails, question-based vs. statement-based openings, different CTAs",
        "Prompt for Claude: 'I want to A/B test cold emails. My control version has [describe email A]. Create 3 alternative versions that test different variables: one with a different subject line style, one with a different opening approach, and one with a different CTA. All under 100 words. Tell me what variable each tests.'",
        "Track results: after one week of sending, count replies from version A vs. version B. If one has 2x more replies, you found a winner"
      ]
    },
    {
      title: "Personalization at Scale",
      details: [
        "Personalization at scale means researching and customizing emails for dozens of people quickly using Claude to batch the work",
        "Create a Google Sheet with columns: first name, company, industry, recent news (their achievement), and pain point. Then feed this to Claude",
        "Use this prompt: 'I have a list of 20 prospects. For each, I'll provide: [name, company, recent achievement, their likely challenge]. Generate a personalized opening line and a customized problem statement for each. Make each feel like it was written for that person. Format as a CSV I can copy into my email tool.'",
        "With Claude, you can personalize 30 cold emails in 10 minutes instead of 2 hours",
        "Pro tip: even if you're sending 100 emails, keep the core email the same and only customize the opening and one sentence in the body\u2014this balances speed and personalization"
      ]
    },
    {
      title: "Email Warm-Up Explained",
      details: [
        "Email warm-up is the practice of gradually building your sending volume so email providers (Gmail, Outlook) trust you and your emails land in the inbox, not spam",
        "New domains and IP addresses start with low trust: send 5 emails day 1, 10 day 2, 20 day 3, building to your full volume by day 10-14",
        "Without warm-up, your first 50 emails might all hit spam, tanking your results before you even start",
        "Many email tools like Instantly.ai have built-in warm-up features\u2014use them during your first week",
        "Pro tip: engage with other people's emails the first week too (read, reply, click links) to build sender reputation faster"
      ]
    },
    {
      title: "Reviewing and Improving with Claude",
      details: [
        "Every week, collect 5-10 of your emails that didn't get replies and ask Claude to critique them and suggest improvements",
        "Use this prompt: 'Here's a cold email I've been sending that isn't getting replies (my target open rate is 50% and reply rate should be 10%+). [Paste email]. What would you change? Be specific. What's the hook? Is the personalization strong enough? Is the CTA clear? Give me 3 specific improvements and rewrite it.'",
        "Track your metrics: open rate (how many opened), reply rate (how many replied), meeting rate (how many said yes to a call)",
        "After changes, test the new version with 20 people before rolling it out to 100",
        "Plan to iterate and improve weekly\u2014your first email is rarely your best email"
      ]
    }
  ],
  resources: [
    {
      title: "Cold Email Masterclass",
      channel: "Jordan Platten",
      description: "Complete breakdown of cold email strategy, personalization techniques, and realistic reply rate expectations",
      url: "https://www.youtube.com/c/JordanPlayten"
    },
    {
      title: "The Email Game: Subject Lines and Open Rates",
      channel: "Alex Hormozi",
      description: "Deep dive into copywriting principles that apply to subject lines and opening hooks",
      url: "https://www.youtube.com/c/AlexHormozi"
    },
    {
      title: "Cold Email Sequences That Actually Work",
      channel: "Lead Gen Jay",
      description: "Real examples of 5-email sequences with metrics and what made each one effective",
      url: "https://www.youtube.com/@leadgenjay"
    },
    {
      title: "Discovery Calls and Closing Deals",
      channel: "Patrick Dang",
      description: "How to transition from cold email to discovery call without sounding salesy",
      url: "https://www.youtube.com/@patrickdang"
    },
    {
      title: "Personal Branding and Authority for Outreach",
      channel: "Iman Gadzhi",
      description: "Building credibility that makes your cold emails more effective",
      url: "https://www.youtube.com/@imangadzhi"
    },
    {
      title: "Sales Email Copywriting Secrets",
      channel: "Nick Abraham",
      description: "Copywriting frameworks specifically for cold email that increase reply rates",
      url: "https://www.youtube.com/@nickabrahambusiness"
    }
  ],
  exercises: [
    {
      title: "Write Your First 5-Email Sequence",
      description: "Create a complete cold email sequence for your ideal first client using Claude",
      tasks: [
        "Paste this into Claude: 'I want to reach out to [title] at companies in [industry]. Their main challenge is [specific problem]. They want [specific outcome]. I help them by [your service]. Create a complete 5-email cold email sequence. Email 1 should be a hook about their challenge. Email 2 should include a case study. Email 3 should add new relevant insight. Email 4 should include social proof. Email 5 should be a final ask. Make each under 100 words, conversational, and personalized to the role. Format so I can copy each email separately.'",
        "Copy each email into a Google Doc and give it a title like 'Email 1: Initial Hook'",
        "Share the sequence with someone in your network and ask: Does this sound like a real person wrote it? Would you reply?"
      ]
    },
    {
      title: "A/B Test Subject Lines",
      description: "Generate and test 6 different subject lines to find your highest opener",
      tasks: [
        "Ask Claude: 'Generate 6 cold email subject lines for reaching out to [role] about [your service]. Make 3 curiosity-based and 3 specificity-based. Avoid spam words like free, urgent, act now. Format as a numbered list.'",
        "Pick 3 of these and send them in your first batch of 30 outreach emails (10 people get each version)",
        "After one week, count opens for each subject line. The one with the highest open rate becomes your new default"
      ]
    },
    {
      title: "Personalization Sprint",
      description: "Personalize 20 cold emails in under one hour using Claude",
      tasks: [
        "Create a list of 20 prospects with: first name, company name, their title, one thing about their company (recent news or achievement), and their likely challenge",
        "Paste into Claude: 'I have 20 prospects and want personalized opening lines for each. Here's the data: [paste your list]. For each person, generate a unique opening sentence that references something specific about them or their company. Format as: Name | Opening line. Make each feel researched and genuine, not templated.'",
        "Copy the opening lines Claude gives you and drop each one into your base email template"
      ]
    }
  ],
  templates: [
    {
      title: "Cold Email Sequence Generator Prompt",
      content: "I want to create a cold email sequence for [your target: e.g., 'marketing managers at E-commerce companies']. Their biggest challenge is [specific problem]. They want to achieve [specific outcome]. I help them by [how your service solves it]. Here's a case study: [brief result, e.g., 'helped XYZ company increase leads by 40%']. Create a complete 5-email sequence where: Email 1: Opens with a personalized hook about their challenge, states your value briefly, asks for a 15-min call. Email 2: Follows up with a case study showing similar company's result. Email 3: Shares an insight or trend relevant to their industry. Email 4: Adds social proof (testimonial or client list). Email 5: Final ask with a soft pitch. All under 100 words each. Make them conversational and non-corporate. Format each email separately with a subject line."
    },
    {
      title: "Personalization for Batch Emails Prompt",
      content: "I'm sending cold emails to 50 prospects and want to personalize them efficiently. Here's my prospect list with columns: first name, company name, their title, recent achievement or news, their likely challenge. [Paste your CSV or list]. For each prospect, generate: (1) a personalized opening sentence that references something specific about them, (2) a customized 1-2 sentence problem statement that feels relevant to their specific situation. Format as: Name | Opening Line | Problem Statement. Make each one sound researched and human, not generic. I'll drop these into my template email tool to customize at scale."
    }
  ],
  proTips: [
    {
      title: "The 48-Hour Rule",
      tip: "Send your first follow-up email within 48 hours of the initial email. This keeps you fresh in their mind and gets higher reply rates than waiting a week"
    },
    {
      title: "Use Their Words Against Them",
      tip: "Mention something they posted, said in a podcast, or wrote in their bio. When you use their own language back to them, it instantly feels more relevant"
    },
    {
      title: "Keep a Swipe File",
      tip: "Save cold emails you receive that get you to reply. Analyze what made you want to respond. Use those patterns in your own emails"
    },
    {
      title: "Test Before You Scale",
      tip: "Never send 1000 emails with a new template. Always test with 50 first, measure results, then roll out to larger volume"
    },
    {
      title: "Ask for Replies, Not Sign-Ups",
      tip: "'Reply with your availability' gets more responses than 'Click this link and book a call' because it's lower friction and conversational"
    }
  ]
},
{
  id: 6,
  title: "The Tool Stack",
  icon: "\ud83d\udee0\ufe0f",
  color: "from-purple-500 to-violet-500",
  overview: {
    description: "You don't need expensive software to build a lead gen business. We'll build a minimal, Claude-powered tech stack that handles research, email writing, sending at scale, lead database management, and CRM tracking. Total cost: $30-50/month, compared to $300-500/month for traditional stacks. Claude does the heavy lifting (writing, analysis, research) and replaces thousands of dollars in specialized AI tools.",
    keyPoints: [
      "Claude is your research and writing engine: research prospects, write personalized emails, analyze reply patterns, create objection-handling scripts\u2014Claude does all this for free or $20/month, replacing $200+ in specialized tools",
      "Instantly.ai ($30/month) sends your emails at scale with deliverability features, warm-up, and analytics\u2014cheaper than Outreach, Salesloft, or other enterprise tools",
      "Apollo.io (free tier) gives you access to a database of millions of leads with email addresses\u2014enough to start and find your first 50 prospects",
      "Hunter.io (free tier) verifies email addresses so you don't waste Instantly credits sending to bad emails",
      "Google Sheets is your free CRM: track prospect name, company, status (cold, emailed, replied, call scheduled, client), notes, and follow-up date",
      "The total starting cost is $30-50/month for Instantly; everything else is free or included in Claude's subscription",
      "Traditional stacks (Outreach, Salesloft, HubSpot) cost $300-500/month and don't do personalization or writing better than Claude does",
      "You can start with just Claude and a spreadsheet, then add Instantly once you have 20 warm prospects ready to email"
    ],
    benchmarks: [
      "Cost comparison: traditional enterprise stack $300-500/mo vs. Claude-first stack $30-50/mo (90% savings)",
      "Email deliverability with Instantly: 95%+ to inbox with proper warm-up vs. 60-70% without warm-up",
      "Apollo.io free tier: 5 email searches per month, enough to find 20 new prospects weekly",
      "Time savings: Claude batch-personalizes 50 emails in 10 minutes vs. 3 hours of manual work"
    ]
  },
  steps: [
    {
      title: "Start with Claude: Your Research and Writing Engine",
      details: [
        "Claude is the foundation because it handles the most time-consuming part: researching prospects, writing emails, analyzing replies, and creating templates",
        "Without paying for specialized tools, Claude can: research a company in seconds, write a personalized email, brainstorm subject lines, analyze reply patterns, create a discovery call script",
        "If you're on Claude Pro ($20/month), you get faster access, more usage, and a custom GPT if you want",
        "Prompt to get started: 'I'm starting a lead gen business targeting [industry]. Help me: (1) research what pain points they face, (2) create a list of 10 questions to ask prospects, (3) write 5 different email hooks for outreach, (4) create a discovery call template.'",
        "Pro tip: save useful prompts as templates in a Google Doc so you can reuse them for every campaign"
      ]
    },
    {
      title: "Set Up Apollo.io for Lead Database Access",
      details: [
        "Apollo.io has a free tier that gives you access to millions of leads: company data, decision-maker names, emails, and phone numbers",
        "Sign up at apollo.io, go to Leads, and start searching by job title and company industry. The free tier includes 5 email searches per month",
        "Use this prompt with Claude: 'I need to find prospects in [industry/company size/location]. What job titles should I search for? Give me 5 titles that are most likely to have budget and decision-making power for [my service].'",
        "Example searches: 'Title = Marketing Manager AND Industry = E-commerce' or 'Company size 10-100 AND location = US'",
        "Export your prospects into a Google Sheet with columns: first name, last name, company, title, email, company size, industry"
      ]
    },
    {
      title: "Verify Emails with Hunter.io Free Tier",
      details: [
        "Hunter.io (free tier) verifies if an email address is real before you send it, saving you credits and protecting your sender reputation",
        "Sign up at hunter.io. You get 100 free email searches per month on the free tier",
        "Paste a company domain into Hunter and it shows you employees' emails. Verify Apollo's data matches",
        "The workflow: find prospect on Apollo, verify email on Hunter, then add to your outreach list",
        "Pro tip: if you're sending to 50+ prospects monthly, the $49 plan includes 5,000 monthly verifications and pays for itself by avoiding bad emails"
      ]
    },
    {
      title: "Create Your Google Sheets CRM",
      details: [
        "Your CRM (customer relationship management) is just a Google Sheet tracking: prospect name, company, title, email, industry, status, last contacted, next follow-up date, and notes",
        "Create columns: First Name, Last Name, Company, Title, Email, Status (Cold/Emailed/Replied/Call Scheduled/Client), Date Added, Last Email Date, Follow-Up Date, Notes, Reply Received (Y/N), Meeting Booked (Y/N)",
        "Set up conditional formatting: highlight 'Cold' in blue, 'Emailed' in yellow, 'Replied' in green, 'Call Scheduled' in orange",
        "Sort by Follow-Up Date so you see who to email next at the top",
        "Create a Google Form that feeds into the sheet so you can quickly log prospects from Apollo without leaving your phone"
      ]
    },
    {
      title: "Set Up Instantly.ai for Email Sending at Scale",
      details: [
        "Instantly.ai ($30/month) sends your personalized emails automatically on a schedule, manages warm-up, tracks opens and clicks, and handles deliverability",
        "Go to instantly.ai, sign up, verify your email domain (this takes 5-10 minutes and improves deliverability dramatically)",
        "Create your first email sequence in Instantly: add your subject line, email body, and follow-up schedule (e.g., send day 0, follow up day 3, day 5, day 10)",
        "Use this prompt: 'I want to set up an email sequence in Instantly.ai. Here's my email content: [paste subject + email]. What settings should I use? Should I turn on warm-up? What send schedule do you recommend? Should I use 'open trigger' to follow up only if they didn't open?'",
        "Pro tip: enable 'warm-up' for your first week to build sender reputation before hitting your main campaign"
      ]
    },
    {
      title: "Integrate Instantly with Your Lead List",
      details: [
        "In Instantly, upload your prospect list from Google Sheets as a CSV. Instantly will automatically personalize each email with first name, company, and any custom variables you include",
        "Set up personalization tags: use {{FirstName}}, {{CompanyName}}, {{Title}} in your email template so each prospect sees their own details",
        "Create a basic email with these tags: 'Hi {{FirstName}}, I noticed {{CompanyName}} is in {{Industry}} and likely faces [challenge]. [Value statement]. Open to a quick chat?' This template works for 100 prospects with no extra work",
        "Schedule your send: 'Send to 10 people daily at 10am their local time' is better than blasting all 100 at once",
        "Test with 20 people first, check opens and replies after 3 days, then scale to 100"
      ]
    },
    {
      title: "Set Up Analytics Tracking in Instantly",
      details: [
        "Instantly tracks: open rate (% who opened), click rate (% who clicked a link), reply rate (% who replied), bounce rate (emails that failed)",
        "Use this prompt: 'What metrics should I track for cold email? If my open rate is 50%, reply rate is 8%, and bounce rate is 2%, am I doing well compared to industry benchmarks? What's the next metric I should improve?'",
        "Check your dashboard in Instantly weekly: if open rate is below 40%, your subject line needs work. If reply rate is below 5%, your email body needs improvement",
        "Create a simple dashboard in Google Sheets that pulls data from Instantly (you can manually log it or use Zapier for automation): date, emails sent, opens, replies, reply %, next action",
        "Pro tip: test one variable per week (subject line one week, email body next week) so you know what's moving the needle"
      ]
    },
    {
      title: "Set Up Zapier for Light Automation (Optional)",
      details: [
        "Zapier (free tier) connects your tools automatically: when you get a reply in Instantly, Zapier can add that person to a Google Sheet or send you a Slack notification",
        "One useful automation: when Instantly detects a reply, Zapier adds them to a 'Replied' tab in your Google Sheet and notifies you",
        "Another: when you mark someone 'Call Scheduled' in your Sheet, Zapier creates a calendar event for you",
        "Most useful for beginners: just use Google Forms to manually log prospects and Instantly to send emails. You can add Zapier later when you scale",
        "Pro tip: keeping things simple (Google Sheets + Claude + Instantly) is better than over-automating when you're starting"
      ]
    },
    {
      title: "Automate Personalization with Claude Batch Processing",
      details: [
        "Instead of writing each email individually, batch-personalize 50 emails with Claude in 10 minutes",
        "Use this workflow: paste your lead list into Claude, ask it to generate personalized opening lines and problem statements for all 50, copy the output into Instantly",
        "Prompt: 'I have 50 prospects [paste list with: name, company, title, industry]. For each, generate a personalized opening line (1 sentence) and a custom problem statement (1-2 sentences). Format: Name | Opening | Problem. Make each sound unique and researched, not templated.'",
        "Claude outputs: 'John Smith | I saw that Acme Corp just expanded their marketing team | Most companies in your space struggle with attribution'",
        "Drop these into Instantly as custom variables for each prospect and your template email automatically personalizes at scale"
      ]
    },
    {
      title: "Build Your Complete Stack Dashboard",
      details: [
        "Create one master Google Sheet with tabs: (1) Prospect List (Apollo data), (2) Email Performance (Instantly stats), (3) Outreach Schedule (follow-up dates), (4) Replied (auto-filled from replies), (5) Meetings (calls booked), (6) Clients (signed deals)",
        "Add a summary tab that shows: Total Prospects, Emails Sent, Open Rate, Reply Rate, Calls Booked, Conversion %, Revenue",
        "Use this prompt: 'Help me build a dashboard in Google Sheets. I track: prospects from Apollo, emails via Instantly, replies, meetings booked, and clients. What KPIs matter most? Create a formula to calculate reply rate and conversion rate. How should I visualize this?'",
        "Update your dashboard weekly so you can see trends and know what to optimize",
        "Pro tip: looking at your metrics weekly is how you find patterns (e.g., 'this industry replies 20% more' or 'this subject line works 3x better')"
      ]
    }
  ],
  resources: [
    {
      title: "Lead Generation Tech Stack Breakdown",
      channel: "Jordan Platten",
      description: "Complete walkthrough of using Apollo, Hunter, and Instantly together with exact settings",
      url: "https://www.youtube.com/c/JordanPlayten"
    },
    {
      title: "Email Deliverability and Warm-Up",
      channel: "Lead Gen Jay",
      description: "Deep dive into how warm-up works, why it matters, and Instantly.ai best practices",
      url: "https://www.youtube.com/@leadgenjay"
    },
    {
      title: "Automation and CRM Setup for Solopreneurs",
      channel: "Pat Flynn",
      description: "How to set up Google Sheets CRM, Zapier automation, and lightweight tools for managing leads",
      url: "https://www.youtube.com/c/PatFlynn"
    },
    {
      title: "Apollo.io Tutorial: Finding Qualified Leads",
      channel: "Apollo",
      description: "Official walkthrough of Apollo's search filters, export options, and B2B lead database",
      url: "https://www.youtube.com/@apolloio"
    },
    {
      title: "Database and CRM Best Practices",
      channel: "HubSpot Academy",
      description: "Introduction to CRM structure, lead scoring, and tracking metrics that matter",
      url: "https://www.youtube.com/@hubspotacademy"
    },
    {
      title: "Cold Email Tools Comparison",
      channel: "Alex Cattoni",
      description: "Compare Instantly, Lemlist, Mailshake, and other sending platforms with pros/cons",
      url: "https://www.youtube.com/@alexcattoni"
    }
  ],
  exercises: [
    {
      title: "Build Your Minimal Stack in 30 Minutes",
      description: "Set up Claude, Apollo, Google Sheets, and Instantly from scratch",
      tasks: [
        "Sign up for Apollo.io (free) and search for 20 prospects in your target market. Export them to a CSV",
        "Create a Google Sheet with columns: First Name, Last Name, Company, Title, Email, Industry, Status, Date Added, Notes. Paste the 20 prospects from Apollo",
        "Sign up for Instantly.ai ($30/month). Verify your email domain and create one simple email template with {{FirstName}} and {{CompanyName}} personalization tags",
        "Upload your 20 prospects to Instantly and schedule them to send at 2 per day starting tomorrow. Check Instantly dashboard after 3 days to see open rate",
        "Update your Google Sheet status column to 'Emailed' for each person"
      ]
    },
    {
      title: "Batch Personalize 50 Emails with Claude",
      description: "Create a personalized email sequence at scale using Claude and Instantly",
      tasks: [
        "Create a list of 50 prospects in your spreadsheet with: first name, company, their title, industry, and one fact about their company",
        "Paste this list into Claude with the prompt: 'Generate a personalized opening line and problem statement for each of these 50 prospects. Format: Name | Opening | Problem. Each should be unique and feel researched.'",
        "Create a new template in Instantly with a custom field for each person's personalized opening. Paste Claude's output",
        "Send to all 50 and compare open rates vs. your first batch. Did more personalization help?"
      ]
    },
    {
      title: "Optimize One Metric This Week",
      description: "Track performance and improve one metric based on data",
      tasks: [
        "After sending 30 emails with Instantly, check your open rate. Is it above 50% or below?",
        "If below 50%, ask Claude: 'My current subject lines are [paste 3]. My open rate is 40%, which is below the 50% benchmark. Generate 5 new subject lines using different strategies (curiosity, specificity, personalization, social proof, urgency). Which strategy would you test first?'",
        "Test 3 new subject lines with your next batch of 20 people",
        "Log the open rate for each subject line in your tracking sheet. The winner becomes your new default"
      ]
    }
  ],
  templates: [
    {
      title: "Tool Cost Calculator Prompt",
      content: "I'm building a lead gen business and want to compare costs. Traditional enterprise stack costs $300-500/month. Here's my minimal Claude-first stack: Claude Pro ($20/mo), Instantly.ai ($30/mo), Apollo.io free tier, Hunter.io free tier, Google Sheets free, Zapier free tier. Total: $50/mo. Questions: (1) What am I missing that might cost extra? (2) As I scale to 100 clients, what new tools will I actually need? (3) At what volume should I upgrade each tool? (4) Where should I reinvest revenue first\u2014better tools or better people? Create a cost projection for years 1, 2, and 3."
    },
    {
      title: "Instantly.ai Setup and Best Practices Prompt",
      content: "I'm setting up Instantly.ai for the first time. I have 100 prospects ready to email. Help me: (1) What warm-up settings should I use for my first 2 weeks? (2) Should I send all 100 at once or spread them over days? (3) What send-time schedule is optimal? (4) Which metrics should I track (opens, clicks, replies)? (5) How do I set up follow-up sequences? (6) What email verification settings reduce bounces? (7) Should I use Zapier to connect Instantly to my Google Sheets CRM? (8) Create a checklist of Instantly settings I need to configure before sending."
    }
  ],
  proTips: [
    {
      title: "Start Simple, Scale Later",
      tip: "Begin with just Claude, a spreadsheet, and manually sending emails (Outlook/Gmail). Add Instantly after you have 20 qualified prospects and want to scale. You don't need every tool on day one"
    },
    {
      title: "Verify Emails Before Spending Money",
      tip: "Use Hunter.io to verify Apollo emails are real before uploading to Instantly. Sending to bad emails wastes credits and tanks your sender reputation. 2 minutes of verification saves $50 in wasted sends"
    },
    {
      title: "Warm-Up is Non-Negotiable",
      tip: "Enable warm-up in Instantly for your first 10 days of sending. New domains get spam-filtered aggressively; warm-up tells email providers you're legit by gradually increasing volume"
    },
    {
      title: "Document Everything in Your Sheet",
      tip: "Every prospect, every email sent, every reply, every call booked should be logged in one place. This is how you spot patterns like 'this industry replies 30% more' or 'this subject line crushes it'"
    },
    {
      title: "Use Claude for Every Step",
      tip: "Don't manually write 100 emails. Claude personalizes 50 in 5 minutes. Don't manually analyze replies. Claude finds patterns in 100 responses in 30 seconds. Claude replaces hours of work"
    }
  ]
},
{
  id: 7,
  title: "Booking Your First Client",
  icon: "\ud83e\udd1d",
  color: "from-teal-500 to-cyan-500",
  overview: {
    description: "You've sent cold emails and gotten replies. Now comes the sale: turning a reply into a conversation, a conversation into a discovery call, and a discovery call into a paying client. This module teaches you how to talk to prospects without being salesy, handle objections (reasons they might say no), and close deals. We'll use Claude to role-play sales conversations, build confidence, and handle every objection you'll face.",
    keyPoints: [
      "A discovery call is a 20-30 minute conversation where you ask questions to understand their business, their challenge, and whether you can actually help them. It's not a pitch\u2014it's fact-finding",
      "The free pilot strategy means offering 30 days of free work or a free trial to prove your service works. It removes risk for them and proves value before asking for money",
      "Objection handling means listening to reasons they might say no ('it's too expensive', 'we're not ready', 'we want to do it in-house') and having a prepared response that doesn't sound defensive",
      "Following up after a call is critical: most people who say 'maybe' don't remember the conversation by next week. Send a recap email within 24 hours and follow up again 3 days later",
      "The 48-hour rule: if you say you'll follow up, do it within 48 hours. Waiting a week kills momentum and makes them forget why they cared",
      "Closing the deal means clearly asking for the sale and handling the final hesitation. Most people won't say yes without being asked directly",
      "Confidence comes from practice: role-play conversations with Claude 10 times before your first real call. By call #10, you'll sound natural",
      "Getting testimonials from your first clients is essential\u2014these become social proof for your next prospects"
    ],
    benchmarks: [
      "Average calls-to-close ratio: 3-5 discovery calls close 1 deal (20% conversion rate is good)",
      "Time to first client: 2-6 weeks from first outreach to signed contract (if targeting 20-50 prospects)",
      "Conversion rate from free pilot to paid: 60-80% (once they see results, they pay)",
      "Deal size: first clients often sign 3-6 month contracts at $1000-5000/month"
    ]
  },
  steps: [
    {
      title: "Identify Your First 20 Prospects",
      details: [
        "Your first clients should be people who've already signaled interest by replying to your cold email. Don't try to close people who haven't replied",
        "Warm prospect = someone in your network or industry who you can reference; cold prospect = stranger who replied to email",
        "Use this prompt: 'I'm targeting [industry] and my ideal first client has [specific traits: company size, role, budget]. Who in my current network fits this? Who have I met at [conference/community/online forum]? Who replies to my emails in [geography/industry segment]?'",
        "Create a list: name, company, how they know you (email reply, mutual connection, etc.), biggest likely challenge, estimated budget, company size",
        "Prioritize: people who've already replied to your email are 10x easier to close than random cold prospects"
      ]
    },
    {
      title: "The Pitch: Transitioning from Email to Call",
      details: [
        "When someone replies to your cold email, you have one chance to get them on a call. Your response should be brief: acknowledge their reply, show you listened, and ask for a meeting",
        "Bad response: 'Great to hear from you! I'm excited to tell you more about my service' (all about you). Good response: 'Thanks for the quick reply. I'm curious about how you're currently handling [their challenge]. Are you free for a 15-min chat Tuesday or Wednesday?'",
        "Use this prompt: 'Someone replied to my cold email about [my service]. Their challenge is likely [specific problem]. Write me a 3-sentence reply that: (1) acknowledges their reply, (2) shows I listened to something specific in their situation, (3) asks for a specific 15-min call Tuesday or Wednesday. Make it conversational, not salesy.'",
        "Always offer specific times ('Tuesday 2-4pm' or 'Wednesday 10-12pm') instead of 'when are you free?'. It's easier to pick a time than decide when to be available",
        "Pro tip: call it a 'quick conversation' or '15-minute call' not a 'sales call' or 'demo'. Less intimidating"
      ]
    },
    {
      title: "Discovery Calls: Asking the Right Questions",
      details: [
        "A discovery call has a simple structure: (1) build rapport (2 minutes), (2) ask about their current situation (5 minutes), (3) dig into their challenge (5 minutes), (4) understand their goal (3 minutes), (5) explain why you exist and how you help (3 minutes), (6) suggest next step (2 minutes)",
        "Your goal: don't pitch. Just ask questions and listen. Ask 'why?' 3 times on every problem they mention to get to root cause",
        "Sample questions: 'What does that look like today?', 'How much time is that taking you?', 'What's the impact on your business?', 'If you could solve this by [date], what would that mean for you?'",
        "Prompt for Claude: 'I'm calling a [role] at [company in industry] tomorrow. They're likely dealing with [challenge]. Create a script with: (1) my introduction (20 seconds), (2) 5 questions about their current situation, (3) 3 questions about their specific challenge, (4) 2 questions about their goals. Make the questions open-ended so they have to explain, not yes/no questions.'",
        "Pro tip: take notes during the call. It shows respect and helps you remember details for your follow-up email"
      ]
    },
    {
      title: "The Value Conversation: Pitching Without Pitching",
      details: [
        "After learning about their situation, you explain why your service matters. This isn't a product demo\u2014it's connecting your solution to their specific problem",
        "Structure: 'Based on what you said about [their challenge], here's how I help companies like yours: [specific outcome]. This typically takes [timeline] and costs [ballpark]. Does this sound like the direction you want to go?'",
        "Example: 'You mentioned 50% of your leads aren't qualified. Based on what we talked about, I help companies like yours qualify leads so you're only calling high-intent prospects. This usually increases your sales meeting rate 40-60%. It takes 30 days and we charge $3k/month. Does this feel like the right direction?'",
        "Never surprise them with price on the call. Say 'this typically costs $2k-5k depending on complexity. I'll send you exact pricing after we talk more'",
        "Prompt: 'I just had a discovery call with a prospect and they told me [summarize their challenge]. Write me a 2-minute pitch that connects my service [describe what you do] to their specific situation. End with 'The free pilot would look like [specific result]. Do you want to try?'"
      ]
    },
    {
      title: "Introducing the Free Pilot: Removing Their Risk",
      details: [
        "A free pilot is 30 days of free work to prove your service works. It removes all risk from their side and proves ROI before they pay",
        "Structure: 'I'd like to offer you a free pilot. For 30 days, I'll [specific deliverable]. If you see [specific result], we'll move to a paid engagement. If not, we'll walk away clean. Does that feel fair?'",
        "The free pilot works because: (1) no risk to them, (2) you prove value, (3) by day 30 they don't want to stop, (4) objections disappear when results show up",
        "Make the deliverable specific and measurable: not 'I'll help with your marketing' but 'I'll create 20 qualified leads in 30 days measured by opportunities in your CRM'",
        "Prompt for Claude: 'I help companies with [specific outcome]. Design a 30-day free pilot that: (1) has a specific deliverable they can measure, (2) shows ROI quickly, (3) makes them not want to stop after 30 days. What should I give away free that builds momentum?'"
      ]
    },
    {
      title: "Handling Objections: Yes, But...",
      details: [
        "Objections are buying signals: if they're saying no, they're still thinking about it. Silence means they forgot about you",
        "Common objections: 'It's too expensive', 'We want to do it in-house', 'We're not ready right now', 'Can you send me more info?', 'Let me talk to my team'",
        "Your response formula: (1) acknowledge their concern ('that makes sense'), (2) ask why ('what's your main concern?'), (3) address it ('most companies worry about X, but here's why Y'), (4) move forward ('would a free pilot ease that concern?')",
        "Bad response to 'too expensive': 'It actually pays for itself.' Good response: 'What budget did you have in mind? If we did half the scope, could we make this work?'",
        "Prompt for Claude: 'Create objection-handling responses for my sales calls. For each objection, give me a response that doesn't sound defensive: (1) It's too expensive. (2) We want to do it in-house. (3) We're not ready yet. (4) Let me think about it. (5) I need to talk to my boss. For each, provide: acknowledgment, clarifying question, reframe, next step.'",
        "Pro tip: if they say 'I need to think about it', say 'Great. What specifically do you want to think about? Is it the pricing, the approach, or timeline?' This uncovers the real objection"
      ]
    },
    {
      title: "Following Up: The 24-Hour Rule",
      details: [
        "Send a follow-up email within 24 hours of your call that: (1) thanks them, (2) recaps what you discussed, (3) includes next steps, (4) has a clear ask",
        "Example: 'Thanks for the great conversation yesterday. To recap: you're struggling with [challenge], your goal is [result], and you're interested in exploring a free pilot. Next step: I'll send you a one-pager about what the 30-day pilot looks like. Once you've reviewed, we can hop on a quick call to finalize the details. Does Wednesday work?'",
        "This email serves multiple purposes: (1) reinforces the conversation, (2) documents what you discussed, (3) keeps momentum, (4) asks for a clear next action",
        "Prompt for Claude: 'I just finished a discovery call with [prospect name] at [company]. We discussed [main challenges they shared]. They seemed interested in a free pilot but had concerns about [objection]. Write me a follow-up email that recaps the call, addresses their concern, proposes next steps, and asks for a meeting to finalize details.'",
        "If they don't respond in 3 days, send one more: 'Wanted to check in on that one-pager I sent. Do you have any questions about the pilot? I'm thinking we could kick things off next week.' Then wait 4 days before the final follow-up"
      ]
    },
    {
      title: "The Close: Asking for the Money",
      details: [
        "Most deals don't close because people don't ask. You have to literally say 'are you ready to move forward?' or 'should we start next Monday?'",
        "Close 1: Direct close: 'Should we start the pilot next Monday?' Close 2: Alternative close: 'Do you want to start Monday or Thursday?' Close 3: Take-away close (only after multiple no's): 'It sounds like this isn't the right time. Let's reconnect in Q2 and see if things have shifted'",
        "If they say yes, send a contract or agreement within 24 hours. Don't wait\u2014momentum kills deals",
        "Prompt for Claude: 'I'm on a call with a prospect who seems interested but won't commit. Create 5 different ways I can close without sounding pushy: a direct close, an alternative close, a timeline close, a value close, and a takeaway close. For each, give me exact words to say.'",
        "Pro tip: the person who commits first (you) to a next step wins. Say 'I'll send a contract by end of day tomorrow. Can you review and sign by Wednesday?' instead of 'when do you want to start?'"
      ]
    },
    {
      title: "Building Confidence: Role-Play with Claude",
      details: [
        "Before your first real call, practice with Claude 10 times. By the 10th time, you'll sound confident and natural",
        "Setup: ask Claude to be the prospect, give it their background, and have a full mock discovery call. Claude will interrupt, ask tough questions, give objections",
        "Prompt: 'Let's do a mock discovery call. You're [prospect role] at [company] in [industry]. You have [specific background]. Your main challenges are [challenges]. During the call, ask me tough questions and give me at least 2 objections. I'll conduct the discovery call as if it's real. Then give me feedback on what I did well and what I can improve.'",
        "After each mock call, ask Claude: 'What could I have asked better? When I said [your phrase], did it sound salesy? Did I close strongly enough? How would you have responded to my pitch?'",
        "This practice is the difference between sounding like a salesperson and sounding like a peer consultant"
      ]
    },
    {
      title: "Getting Testimonials and Proof",
      details: [
        "After your first client gets results (usually 30-60 days), ask for a testimonial. Written or video testimonial makes selling to client #2-10 SO much easier",
        "Ask: 'What was your experience working with me? What result did you get? Would you recommend me to someone in your network?'",
        "Better: ask for a quick video testimonial (60 seconds on their phone). Video is 10x more powerful than text",
        "Prompt for Claude: 'My first client [company name] just completed a 30-day pilot and got [specific result: e.g., 40 qualified leads]. Help me draft an ask for a video testimonial. What questions should I ask? How do I make it easy for them to say yes? How should I frame it?'",
        "Pro tip: as soon as you have 1-2 testimonials, put them on a simple one-page website or share them in every cold email. This 10x your close rate on future prospects"
      ]
    },
    {
      title: "Reviewing Your Sales Process Weekly",
      details: [
        "Every Friday, review: how many calls did I book? How many did I attend? How many deals am I in? Where are they in the process (discovery call, awaiting decision, free pilot, signed)?",
        "Track your sales metrics in a Google Sheet: prospect name, date contacted, date of call, date of proposal, status (closed/in progress/lost), reason if lost",
        "Ask Claude: 'I've done 5 discovery calls and closed 0 deals. Here are the patterns: [fill in what happened]. What's my conversion problem? Is it my pitch? My close? Something else? How do I fix it?'",
        "As you close more deals, look for patterns: Which industry converts best? Which company size closes fastest? Which objection do you struggle with most? Double down on what works",
        "Pro tip: analyze your losses too. Of the 3 deals you lost, why did they say no? Can you fix that for next time?"
      ]
    }
  ],
  resources: [
    {
      title: "Discovery Calls That Close",
      channel: "Patrick Dang",
      description: "Real examples of discovery call questions, how to listen for pain, and transitioning to proposals",
      url: "https://www.youtube.com/@patrickdang"
    },
    {
      title: "Sales Objection Handling Framework",
      channel: "Cody Berman",
      description: "Common B2B sales objections, proven responses, and how to reframe concerns as opportunities",
      url: "https://www.youtube.com/@codyberman"
    },
    {
      title: "From Cold Email to Closed Deal",
      channel: "Lead Gen Jay",
      description: "End-to-end process of turning replies into discovery calls into paying clients with real examples",
      url: "https://www.youtube.com/@leadgenjay"
    },
    {
      title: "Sales Confidence: Overcoming Fear and Mindset",
      channel: "Alex Hormozi",
      description: "Psychological framework for building sales confidence and handling rejection without self-doubt",
      url: "https://www.youtube.com/c/AlexHormozi"
    },
    {
      title: "Closing Techniques Without Being Pushy",
      channel: "Grant Cardone",
      description: "Different closing approaches: assumptive, alternative choice, urgency, and takeaway closes",
      url: "https://www.youtube.com/@grantcardone"
    },
    {
      title: "Building and Scaling a Sales Process",
      channel: "Steli Efti",
      description: "How to systematize sales from prospecting to close, tracking metrics, and coaching yourself to improve",
      url: "https://www.youtube.com/@steliefti"
    }
  ],
  exercises: [
    {
      title: "Mock Discovery Call: Practice 3 Times",
      description: "Role-play full discovery calls with Claude to build confidence before your real calls",
      tasks: [
        "Paste this prompt into Claude: 'Role-play a discovery call. You're [prospect role] at [company] in [industry]. You face [specific challenges]. You have [budget/decision-making power]. Ask me tough questions, give me 2-3 objections, and see if I close. I'll conduct this as if it's a real discovery call. Start by saying hello.'",
        "Have a full 20-minute mock conversation with Claude",
        "After the call, ask: 'What did I do well? Where did I sound unsure? Did I ask good questions? Was my close strong? Give me specific feedback.'",
        "Do this 3 times with different prospect types. By the 3rd time, you'll sound natural"
      ]
    },
    {
      title: "Objection Handling Cheat Sheet",
      description: "Create your personal guide to handling the 5 objections you'll face most",
      tasks: [
        "Ask Claude: 'Create objection-handling responses for my specific service. For these 5 objections, write acknowledgment, clarifying question, reframe, and close: (1) It's too expensive. (2) We want to do it in-house. (3) We're not ready yet. (4) Can you send more info? (5) Let me talk to my boss. Make each response under 30 seconds when spoken.' [Customize objections to your offer]",
        "Copy Claude's responses into a Google Doc titled 'Objection Handling'",
        "Print it or keep it on your phone during calls for reference (it's fine to pause and think; prospects respect that)",
        "After your first 3 real calls, update with new objections you heard"
      ]
    },
    {
      title: "Book and Close Your First Call",
      description: "End-to-end: get someone to say yes to a discovery call and practice your close",
      tasks: [
        "Pick 1 warm prospect (someone who replied to your email or someone you know) and call them or message them: 'I'd love to grab 15 minutes next week to discuss what you're working on. Do you have 15 min Tuesday 2-4pm or Wednesday 10-12pm?'",
        "Have the discovery call using the question script Claude created for you",
        "Within 24 hours, send a follow-up email recapping what you discussed and proposing a free pilot or next step",
        "Track the outcome: did they say yes, maybe, or no? If yes, send contract. If maybe, follow up in 3 days. If no, ask why"
      ]
    }
  ],
  templates: [
    {
      title: "Discovery Call Script Generator Prompt",
      content: "Help me create a discovery call script for my sales calls. My target prospect is [their role] at [company size] in [industry]. Their main challenges are: [challenge 1], [challenge 2], [challenge 3]. I offer [your service] which solves [how it helps]. Create a script with: (1) A 30-second introduction of you and why you're calling. (2) Five open-ended questions about their current situation (make them have to explain, not yes/no). (3) Three probing questions to dig into the main challenge. (4) Two questions about their goals and timeline. (5) A transition to your value: 'Based on everything you've shared, here's how I help...' (6) Three different closes: direct, alternative, and takeaway. Format as: [Time] | [What you say]. Total call time: 20 minutes. Make it conversational, not robotic."
    },
    {
      title: "Objection Handling Cheat Sheet Prompt",
      content: "Create an objection-handling guide for my sales calls. For each objection below, give me: (1) acknowledgment (show you heard them), (2) a clarifying question, (3) a reframe that positions your service as the solution, (4) a next step or close. Objections: It's too expensive | We want to do it in-house | We're not ready yet | Can you send me more information? | I need to talk to my boss/team. For each, provide exact wording (under 30 seconds when spoken). Make responses sound consultative, not defensive. Then rank these objections from 'easiest to handle' to 'hardest to handle' and tell me why."
    }
  ],
  proTips: [
    {
      title: "The 48-Hour Follow-Up Rule",
      tip: "Send your follow-up email within 24 hours of the call (while they remember it). The second follow-up goes 3 days later. Most deals die because follow-up is delayed; urgency kills momentum"
    },
    {
      title: "Listen More Than You Talk",
      tip: "On discovery calls, you should talk 30% and they should talk 70%. Your job is to ask questions and listen. The more they talk, the more you learn and the safer they feel"
    },
    {
      title: "Confidence Comes from Repetition",
      tip: "Your 10th call will feel easy while your 1st feels hard. Do 10 mock calls with Claude before your first real call. By call #3, you'll sound like a pro"
    },
    {
      title: "The Free Pilot Is Your Secret Weapon",
      tip: "Offering 30 days free removes all objections instantly. By day 30, they see results and don't want to stop. Free pilots convert to paid at 60-80% rates"
    },
    {
      title: "Get Them on Video",
      tip: "Video calls are 10x better than phone calls because they can see you're human and trustworthy. They're also less likely to ghost video calls than phone calls"
    }
  ]
},
{
  id: 8,
  title: "Payments, Contracts & Scaling",
  icon: "\ud83d\ude80",
  color: "from-amber-500 to-yellow-500",
  overview: {
    description: "You've booked your first client. Now: how do you collect payment? What should your contract say? How do you deliver without burning out? And how do you grow from 1 client to 5 to 10 to 50? This module covers Stripe (payment processing), contract essentials, invoicing, refund policies, hiring, and building repeatable processes (SOPs). We'll use Claude to generate contracts, build operation manuals, and plan your scaling strategy.",
    keyPoints: [
      "Stripe is the easiest way to accept credit card payments online. It takes 2% of every transaction but handles security, fraud, and compliance so you don't have to",
      "A contract should define: what you're delivering (scope), timeline, price, payment terms (when payment is due), cancellation policy, what happens if results don't hit expectations",
      "Payment terms matter: 50% deposit on day 1, 50% on delivery is safer than asking for full payment upfront and getting ghosted",
      "An SOP (Standard Operating Procedure) is a written step-by-step guide for any repeatable task. SOPs let you hire people and delegate without explaining everything over and over",
      "Scaling means taking processes that work for 1 client and running them for 5, 10, or 50 clients. Documentation is the key",
      "Refund policy: offer 30 days to refund minus the work you've done. This protects you from chargebacks and shows you're confident in your service",
      "You should hire your first person when you have 5-10 recurring clients and you're working 50+ hours per week. Their salary should come from new revenue, not squeezing current profits",
      "Most businesses scale revenue first, then hire staff. Hiring too early means payroll burns cash; hiring too late means missing deals"
    ],
    benchmarks: [
      "Average time to scale from 1 to 5 clients: 4-8 weeks",
      "Revenue milestones: 1 client ($3k/mo), 5 clients ($15k/mo), 10 clients ($30k/mo), 20 clients ($60k/mo)",
      "Client retention rates with good service: 80-90% month-to-month (most don't churn)",
      "When to hire: at $10k/month revenue with 5+ clients and working 50+ hours/week"
    ]
  },
  steps: [
    {
      title: "Setting Up Stripe for Payment Processing",
      details: [
        "Stripe is a payment processor: customers enter their credit card on your website, Stripe securely processes it, and deposits money in your bank account. Cost: 2% + 30 cents per transaction",
        "Go to stripe.com, sign up, verify your bank account (takes 1 business day), and you're ready to accept payments",
        "Stripe gives you: payment link (just send via email to customers), invoicing (automated payment reminders), recurring billing (automatic monthly charges), and dispute handling",
        "Use this prompt: 'I just set up a Stripe account. I want to invoice clients $3,000 per month for [my service]. Should I charge 50% upfront ($1,500), 50% on day 15? Or monthly recurring? What payment schedule reduces churn and feels fair to the customer?'",
        "Pro tip: never ask for 100% payment upfront unless you have strong social proof or they're established companies. 50-50 split or 3-payment plan feels fairer"
      ]
    },
    {
      title: "Creating Your First Service Contract",
      details: [
        "A contract protects you and the client by defining expectations. It should include: scope (what you deliver), timeline (when), price (cost), payment terms (when they pay), deliverables (exact outputs), what success looks like",
        "Don't overthink it: a 1-page contract beats no contract. Long legal documents scare clients and don't save you in disputes",
        "Prompt for Claude: 'Create a simple 1-page service contract for my business. I'm [your title] offering [service] to [client type]. Scope: I will [specific deliverable] for $[price] due [date]. Payment: 50% due on signing, 50% on [delivery date]. Cancellation: 30-day notice with pro-rata refund. What else should I include? What legal language do I need?'",
        "Use this contract for every client. Don't customize it per client (that's slow). One standard contract signals confidence",
        "Have them sign digitally via Stripe or DocuSign (takes 2 minutes). If they balk at signing, that's a red flag"
      ]
    },
    {
      title: "Invoicing and Payment Terms",
      details: [
        "Invoice structure: company name, client name, date, due date, itemized list of what you're delivering, total amount, payment instructions",
        "Payment terms: Net 15 (due in 15 days), Net 30 (due in 30 days), or 50/50 split (half on signing, half on completion)",
        "Most clients expect Net 30 but will accept 50/50 if you're delivering value. New clients might want to start with 50/50 to reduce risk",
        "Prompt: 'Create an invoice template I can use for clients. Include: client name, invoice number, date, due date, itemized deliverables (I deliver 'Strategic Lead Gen Campaign: 40 qualified leads in 30 days' for $3,000), subtotal, payment method (Stripe link), and terms. Make it professional but not overly fancy.'",
        "Send invoices the day work starts. Don't wait until completion; that delays payment. For monthly retainers, invoice on day 1 of each month"
      ]
    },
    {
      title: "Refund Policy: Setting Clear Expectations",
      details: [
        "A refund policy protects you from chargebacks and unrealistic expectations. Standard: 'If results don't meet our agreement, refund minus any work completed' (usually 30-50% refunded)",
        "Example: 'We guarantee you'll get 30 qualified leads in 30 days. If you get fewer than 25, we'll refund 50% and continue the campaign until we hit 30. If you get 0, full refund.'",
        "This policy means: (1) you're confident you'll deliver, (2) customers only keep paying if they see value, (3) you're protected from frivolous refund requests",
        "Prompt: 'Create a refund policy for my service where I guarantee [specific measurable result]. If I don't deliver, what refund feels fair? Half refund to encourage fixing it, or full refund and they walk away? What protects me from chargebacks?'",
        "Pro tip: most refund requests come from clients who didn't follow your process. Your contract should say 'refund applies if you complete all steps'. That filters out tire-kickers"
      ]
    },
    {
      title: "Delivering Your First Project Without Burning Out",
      details: [
        "Your biggest risk at this stage: overworking because you want to impress the client. You'll burn out and hate the business",
        "Set boundaries: define exactly what you'll deliver and how many hours per week you'll work on it. Anything beyond scope = additional fee",
        "Example: 'Your package includes 10 hours of my time per week for lead gen research and email writing. Beyond that, we bill at $100/hour'",
        "Build a simple SOP (Standard Operating Procedure) for your service so you're not reinventing it each client",
        "Prompt: 'I'm delivering [my service] to my first client for 30 days. Create a daily/weekly checklist of what I'll do: research, writing, outreach, tracking. Make it repeatable so every client gets the same quality output. What should I automate? What requires human work?'",
        "Pro tip: time-box your work. If you promised 10 hours per week, work 10 hours and stop. Infinite perfectionism = no profit"
      ]
    },
    {
      title: "Building SOPs: Documenting Your Process",
      details: [
        "An SOP (Standard Operating Procedure) is a written step-by-step guide for how you do your service. SOPs let you hire people and run your business without doing everything yourself",
        "Start simple: write down the steps you follow for your first client. Then improve and refine as you go",
        "Good SOP structure: title, overview, materials needed (tools, access), step-by-step instructions with screenshots, success metrics (how to know it's done well), common mistakes",
        "Example SOP: 'Lead Generation Process' with steps: (1) Research target company on Apollo, Hunter, LinkedIn (2) Find 3 decision-makers, verify emails (3) Write personalized cold email using Claude (4) Send via Instantly.ai (5) Log in CRM (6) Follow up in 3 days if no reply'",
        "Prompt for Claude: 'Create an SOP for my service: [describe your service]. Break it into 8-10 steps. For each step, include: what to do, how long it takes, tools needed, success criteria. Format: [Step number] | [Title] | [Action] | [Time] | [Tools] | [Success metric]. This should be detailed enough that someone could follow it without asking me questions.'",
        "Pro tip: create your SOP within 30 days of launching. The earlier you document, the easier to hire and scale"
      ]
    },
    {
      title: "Scaling from 1 to 5 Clients",
      details: [
        "To go from 1 to 5 clients in your first month, you need to: (1) finish the first client's project successfully, (2) ask them for a referral, (3) continue cold email to 50 new prospects, (4) close 4 more deals",
        "The key: don't slow down your outreach when you land the first client. Most people stop prospecting after close 1, then get desperate when client #1 ends",
        "Timeline: week 1-2 finish first client project, week 2-3 get referral and testimonial, week 3-4 close client 2, week 4-5 close clients 3-5",
        "At 5 clients, you're making $15k/month (assuming $3k/client). You're probably working 40-50 hours per week",
        "Prompt: 'I just closed my first client ($3k/month). I want 5 clients by [date]. Create a 30-day plan: how many new prospects do I email daily? When do I ask for a referral? When do I offer a second service to client #1? How do I time this to hit 5 clients and still deliver good work?'",
        "Pro tip: at 2-3 clients, your system breaks because you're juggling. That's when you start documenting SOPs"
      ]
    },
    {
      title: "Hiring Your First Person: When and How",
      details: [
        "Hire when: you have 5-10 recurring clients AND you're working 50+ hours per week AND revenue supports their salary (usually $3k-5k/month salary)",
        "First hire should do: highest leverage work = lead research, cold email writing, or outreach. Work you hate or that takes most time",
        "Hiring before you're ready (at 1 client) means burning cash on payroll with no revenue to cover it. Hiring too late means missing deals because you're overwhelmed",
        "Contract with a virtual assistant from Upwork or Fiverr part-time (10-15 hours/week) at $10-15/hour. This is cheaper and lower risk than a full-time employee",
        "Prompt: 'I have [number] clients generating $[monthly revenue]. I'm spending [X hours] per week on [specific work]. Should I hire? If yes, what tasks should they take first? Should I hire part-time or full-time? How do I train them to maintain quality?'",
        "Pro tip: before hiring, document your SOP. Bad SOPs + new hires = disaster because they don't know what to do"
      ]
    },
    {
      title: "Building Your 90-Day Scaling Plan",
      details: [
        "Your 90-day plan answers: Where will my revenue be in 90 days? How many clients do I need? How much time will I have? Do I need to hire?",
        "Sample plan: Month 1 = 1 client, $3k/mo revenue, 40 hrs/week. Month 2 = 3 clients, $9k/mo, 45 hrs/week. Month 3 = 5-6 clients, $15-18k/mo, 50 hrs/week, hire virtual assistant",
        "For each month, define: target clients, target revenue, hours per week, key hires, new services to offer, expected churn",
        "Prompt: 'Create my 90-day scaling plan. I help [target customer]. Average deal: $[price]/[timeframe]. I want to hit $[revenue goal]. What's the client growth path? Month 1, Month 2, Month 3 targets. At what point do I hire? What risks could slow me down?'",
        "Review this plan monthly and adjust. If you're ahead, accelerate hiring and raise prices. If behind, double down on sales"
      ]
    },
    {
      title: "Raising Prices and Adding Services",
      details: [
        "After delivering 3-5 clients successfully with great results, raise prices 20-30%. Clients stay; new prospects pay more",
        "Pricing increase = you ask existing clients if they want to renew at new rates. Most say yes because they've seen results. This is also why testimonials matter",
        "Timeline: deliver at $3k/month to clients 1-3. Testimonials in hand. Client 4 at $3.5k/month. Client 5 at $4k/month. After 6 months, raise to $5k/month",
        "Adding services: once you've perfected 'lead generation for sales teams', offer 'email sequence optimization' or 'discovery call coaching' at +$1k/month. Existing clients upsell to this",
        "Prompt: 'I've delivered lead gen to 3 clients and they're seeing good results (case: [result 1], [result 2], [result 3]). Should I raise my price from $3k to $4k/month? How do I ask existing clients to pay more? What additional services could I upsell?'",
        "Pro tip: each client you close teaches you how to close faster. By client 10, your closing rate and price are both 2x your first deal"
      ]
    },
    {
      title: "Reviewing Your Metrics and Optimizing",
      details: [
        "Track these metrics weekly: clients acquired this month, current monthly recurring revenue (MRR), profit per client (revenue minus your time), average deal size, close rate (proposals sent vs. signed)",
        "Metrics dashboard: [Month] | Clients | MRR | Cost of Delivery (hours × $rate) | Profit | Pipeline (prospects in sales process)",
        "Bad metric = low profit per client. If you're delivering 50 hours per month per client at $3k/month, that's $60/hour. After you scale to 10 clients, you'll be working 500 hours = nightmare",
        "Prompt: 'I've closed 3 clients at $3k/month. Each takes 30-40 hours per month to deliver. My metrics: [fill in data]. Am I on track? What's my profit per client? At what point does this become unsustainable? How do I improve delivery efficiency?'",
        "Action: if profit per client is dropping, either raise prices or reduce delivery hours (automate, hire, or simplify the service)"
      ]
    }
  ],
  resources: [
    {
      title: "Stripe Setup and Payments Guide",
      channel: "Stripe Official",
      description: "Step-by-step setup, recurring billing, and handling payments for service businesses",
      url: "https://www.youtube.com/@stripe"
    },
    {
      title: "Service Business Contracts and Legal Basics",
      channel: "Tom Nick Cocotas",
      description: "What your contract should include, what protects you from chargebacks, and liability clauses",
      url: "https://www.youtube.com/@tomnickcocotas"
    },
    {
      title: "From 1 Client to 10 Clients: Scaling a Service Business",
      channel: "Alex Cattoni",
      description: "Real strategies for scaling revenue, maintaining quality, hiring, and avoiding burnout",
      url: "https://www.youtube.com/@alexcattoni"
    },
    {
      title: "Building SOPs and Systematizing Your Business",
      channel: "Mike Michalowicz",
      description: "How to document your service, delegate, and scale without doing all the work yourself",
      url: "https://www.youtube.com/@mikemichalowicz"
    },
    {
      title: "Pricing Your Service and Raising Rates",
      channel: "Jonathan Stark",
      description: "How to set prices that reflect value, raise them with clients, and avoid undercharging",
      url: "https://www.youtube.com/@jonathanstark"
    },
    {
      title: "Hiring Your First Contractor or Employee",
      channel: "Paul Jarvis",
      description: "When to hire, what to outsource, how to manage remote workers, and cost tracking",
      url: "https://www.youtube.com/@pauljarvis"
    }
  ],
  exercises: [
    {
      title: "Create Your Service Contract and Stripe Invoice",
      description: "Generate a contract using Claude and set up Stripe invoicing for your first client",
      tasks: [
        "Use this prompt: 'Create a 1-page service contract for my business. I offer [your service] to [customer type] for $[price] over [timeline]. Deliverables: [specific outputs]. Payment: 50% on signing, 50% on [date]. Includes: scope, timeline, success metrics, cancellation policy, what happens if results miss expectations. Make it professional but simple. What legal language do I need?'",
        "Copy Claude's contract into a Google Doc. Add your company name, sign it digitally.",
        "Go to Stripe.com, sign up, verify your account. Create a Payment Link for your contract amount (e.g., $1,500 for 50% deposit).",
        "Send your first client the contract + Stripe payment link. Have them sign and pay using the link before work starts"
      ]
    },
    {
      title: "Document Your Service SOP",
      description: "Create a step-by-step guide for how you deliver your service",
      tasks: [
        "List the exact steps you follow for your service from start to finish (8-12 steps)",
        "Prompt: 'Turn this service process into an SOP: [describe your process step by step]. Create: Step number | Title | Exact action | Time required | Tools | Success metric. Make it detailed enough someone could follow it without asking me. What could be automated?'",
        "Copy the SOP into a Google Doc. Add screenshots of tools you use (Apollo search, Claude prompt, Instantly settings).",
        "Follow your own SOP for your next client delivery. Update it based on what was unclear or missed"
      ]
    },
    {
      title: "Build Your 90-Day Scaling Plan",
      description: "Define exactly how you'll grow from 1 client to 5-10 clients",
      tasks: [
        "Ask Claude: 'Create my 90-day scaling plan. Current: 1 client at $3k/month. Goal: [your goal, e.g., 5 clients/$15k/month]. For each month, define: client count, revenue, hours/week, new hires needed, risks. What do I do weekly to hit these targets? Where could I fall short?'",
        "Create a Google Sheet with: Month | Target Clients | Target MRR | Hours/Week | Action Items | Risks",
        "Share this with a mentor or peer and get feedback: 'Is this realistic? Am I overestimating or underestimating?'",
        "Review this plan monthly and update as you hit or miss targets"
      ]
    }
  ],
  templates: [
    {
      title: "Contract Generator Prompt",
      content: "Create a simple, professional 1-page service contract for my business. I am [your name/company], offering [your specific service: e.g., 'lead generation campaigns'] to [target customer: e.g., 'B2B SaaS companies']. The scope of work is: [describe deliverables]. Cost: $[amount]. Timeline: [duration, e.g., '30 days']. Payment terms: 50% deposit due on contract signing, 50% on [delivery date or milestone]. The contract should include: (1) Scope of Work [exactly what you're delivering], (2) Timeline [start and end dates], (3) Investment [total price and payment schedule], (4) Success Metrics [how you define success], (5) Cancellation [30-day notice with pro-rata refund], (6) What Happens If Results Miss [e.g., 'if fewer than 20 leads delivered, we'll refund 50% and continue until goal is met']. Make it one page, professional, and understandable to a small business owner (not overly legal). Include space for client signature and date."
    },
    {
      title: "SOP Builder Prompt",
      content: "I want to build a detailed SOP (Standard Operating Procedure) for my service so I can train a virtual assistant to do it. My service is: [describe what you do]. Here's the process I follow [outline your current steps]. Create a detailed SOP with: (1) Title and overview of the service, (2) 8-12 step-by-step instructions with exact actions (not vague advice), (3) For each step: time required, tools/software needed, success criteria, common mistakes to avoid, (4) Final checklist for quality assurance, (5) Tools and software required list, (6) What to do if something goes wrong, (7) Metrics to track per client. Format as: Step # | Title | Action | Time | Tools | Success Metric | Common Mistakes | Troubleshooting. Make it detailed enough that a smart person with no experience could follow it without asking me questions. What could be automated or templated?"
    }
  ],
  proTips: [
    {
      title: "Payment Upfront Protects You",
      tip: "Always collect 50% on day 1, 50% on completion. This filters out flaky prospects and ensures they're committed. Full payment upfront is risky (you do work, they disappear); no payment until completion is risky (you do work, they dispute it)"
    },
    {
      title: "Raise Prices Every 3-6 Months",
      tip: "As you get better and faster, raise rates. Your first client costs 40 hours of delivery. Client 10 costs 20 hours because you've optimized. That efficiency gain should be captured in higher prices"
    },
    {
      title: "Document Before You Hire",
      tip: "The day you hire someone, give them a detailed SOP. Bad SOP + new hire = low quality + frustration. Spend 2-3 hours documenting your process so they (and future hires) can execute it"
    },
    {
      title: "Never Stop Prospecting",
      tip: "Most people close one client then pause outreach. By the time that client ends or scales down, they're panicked for new business. Always be in sales mode. Outreach 2 hours/day even when busy"
    },
    {
      title: "Your Time Should Become More Expensive",
      tip: "In month 1, you work 40 hours on delivery. Month 3, you work 20 because you're faster/delegated. Month 6, you work 0 because you've hired someone. Meanwhile, revenue grows. This is the goal"
    }
  ]
}
];

/* ------------------------------------------------------------------ */
/*  React Component                                                   */
/* ------------------------------------------------------------------ */

export default function AILeadGenPlaybook() {
  const [activeModule, setActiveModule] = React.useState<number>(0);
  const [activeTab, setActiveTab] = React.useState<TabName>("Overview");
  const [completedModules, setCompletedModules] = React.useState<Set<number>>(
    new Set()
  );

  const currentModule = MODULES[activeModule];
  const progressPercent =
    (completedModules.size / MODULES.length) * 100;

  const toggleModuleComplete = (moduleId: number) => {
    const newCompleted = new Set(completedModules);
    if (newCompleted.has(moduleId)) {
      newCompleted.delete(moduleId);
    } else {
      newCompleted.add(moduleId);
    }
    setCompletedModules(newCompleted);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI Lead Gen Playbook
          </h1>
          <p className="text-gray-400 text-lg">
            Built with Claude
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">
              Progress: {completedModules.size} of {MODULES.length} modules
            </span>
            <span className="text-sm font-semibold text-cyan-400">
              {Math.round(progressPercent)}%
            </span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto">
        {/* Sidebar - Module Navigation */}
        <div className="w-full lg:w-60 bg-gray-900 border-r border-gray-800 overflow-x-auto lg:overflow-x-visible">
          <div className="flex lg:flex-col p-4 gap-2 min-w-max lg:min-w-0">
            {MODULES.map((module) => (
              <button
                key={module.id}
                onClick={() => {
                  setActiveModule(module.id - 1);
                  setActiveTab("Overview");
                }}
                className={`flex-shrink-0 w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeModule === module.id - 1
                    ? "bg-gray-800 border-l-4 border-cyan-400"
                    : "hover:bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{module.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold truncate">
                      {module.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      Module {module.id}
                    </div>
                  </div>
                  {completedModules.has(module.id) && (
                    <span className="text-cyan-400 font-bold">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-6 border-b border-gray-800 pb-4 overflow-x-auto">
            {TAB_NAMES.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-semibold whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-gray-400 hover:text-cyan-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {/* Overview Tab */}
            {activeTab === "Overview" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-4xl">{currentModule.icon}</span>
                    {currentModule.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {currentModule.overview.description}
                  </p>
                </div>

                {/* Key Points */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">
                    Key Points
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentModule.overview.keyPoints.map((point, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-cyan-400 transition-colors duration-200"
                      >
                        <p className="text-gray-300 text-sm">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benchmarks */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">
                    Industry Benchmarks
                  </h3>
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-3">
                    {currentModule.overview.benchmarks.map((bench, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-blue-400 font-bold mt-1">►</span>
                        <span className="text-gray-300">{bench}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Completion Toggle */}
                <button
                  onClick={() => toggleModuleComplete(currentModule.id)}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    completedModules.has(currentModule.id)
                      ? "bg-gray-800 text-cyan-400 border border-cyan-400"
                      : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600"
                  }`}
                >
                  {completedModules.has(currentModule.id)
                    ? "✓ Module Completed"
                    : "Mark as Complete"}
                </button>
              </div>
            )}

            {/* Steps Tab */}
            {activeTab === "Steps" && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">Steps</h3>
                {currentModule.steps.map((step, idx) => (
                  <details
                    key={idx}
                    className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors duration-200"
                  >
                    <summary className="px-6 py-4 cursor-pointer font-semibold flex items-center gap-3 hover:bg-gray-800 transition-colors">
                      <span className="text-cyan-400 font-bold">
                        {idx + 1}
                      </span>
                      {step.title}
                    </summary>
                    <div className="px-6 py-4 border-t border-gray-800 bg-gray-800 bg-opacity-50 space-y-3">
                      {step.details.map((detail, didx) => (
                        <div key={didx} className="flex gap-3">
                          <span className="text-blue-400 font-bold flex-shrink-0">
                            •
                          </span>
                          <p className="text-gray-300">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === "Resources" && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">Video Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentModule.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-cyan-400 transition-colors duration-200 group"
                    >
                      <div className="mb-2">
                        <h4 className="font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors line-clamp-2">
                          {resource.title}
                        </h4>
                        <p className="text-xs text-blue-400 font-semibold">
                          {resource.channel}
                        </p>
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-3">
                        {resource.description}
                      </p>
                      <div className="mt-3 text-cyan-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                        Watch →
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Exercises Tab */}
            {activeTab === "Exercises" && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">Exercises</h3>
                {currentModule.exercises.map((exercise, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-400 transition-colors duration-200"
                  >
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                      {exercise.title}
                    </h4>
                    <p className="text-gray-400 mb-4">{exercise.description}</p>
                    <div className="space-y-2">
                      {exercise.tasks.map((task, tidx) => (
                        <label
                          key={tidx}
                          className="flex items-start gap-3 p-2 rounded hover:bg-gray-800 transition-colors cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="w-5 h-5 mt-0.5 accent-cyan-400 cursor-pointer"
                          />
                          <span className="text-gray-300">{task}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pro Tips Tab */}
            {activeTab === "Pro Tips" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Pro Tips</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentModule.proTips.map((proTip, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-cyan-400 transition-colors duration-200"
                      >
                        <h4 className="font-semibold text-cyan-400 mb-2">
                          {proTip.title}
                        </h4>
                        <p className="text-gray-300 text-sm">{proTip.tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Templates Section */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Templates</h3>
                  <div className="space-y-4">
                    {currentModule.templates.map((template, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-400 transition-colors duration-200"
                      >
                        <h4 className="font-semibold text-cyan-400 mb-4">
                          {template.title}
                        </h4>
                        <pre className="bg-gray-800 rounded p-4 overflow-x-auto text-sm text-gray-300 font-mono whitespace-pre-wrap break-words">
                          {template.content}
                        </pre>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(template.content);
                            alert("Template copied to clipboard!");
                          }}
                          className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition-colors"
                        >
                          Copy Template
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 border-t border-gray-800 px-6 py-6 mt-12">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          AI Lead Gen Playbook — Built by Porter Herrera
        </div>
      </div>
    </div>
  );
}
