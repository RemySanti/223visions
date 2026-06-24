export const CONVERSION_SECTIONS = [
  {
    id: 'sticky-book-bar',
    title: 'Sticky Book Bar',
    placement: 'Global — bottom of every page',
    impact: 'Very High',
    effort: 'Low',
    summary: 'Fixed bar with Book Session + optional call link. Always visible while scrolling.',
    whyItConverts:
      'Visitors who scroll past the hero lose the CTA. A sticky bar keeps booking one tap away on mobile and desktop.',
    includes: [
      'Book Session button → GHL booking widget',
      'Optional phone or Instagram DM shortcut',
      'Hides on /contact and /landing to avoid duplicate CTAs',
    ],
    bestOn: ['Home', 'Portfolio', 'Services', 'About'],
  },
  {
    id: 'packages-pricing',
    title: 'Packages & Starting Investment',
    placement: 'Home + Services pages',
    impact: 'Very High',
    effort: 'Medium',
    summary: '3 clear packages (e.g. Photo, Video, Hybrid) with starting prices and what is included.',
    whyItConverts:
      'Price anxiety kills inquiries. Starting-at pricing qualifies leads and sets expectations before they fill out a form.',
    includes: [
      '3 tier cards with starting price',
      'Bullet list of deliverables per tier',
      'CTA per tier → booking or contact with service pre-selected',
    ],
    bestOn: ['Home', 'Services', '/landing'],
  },
  {
    id: 'how-it-works',
    title: 'How It Works (3 Steps)',
    placement: 'Home — below services strip',
    impact: 'High',
    effort: 'Low',
    summary: 'Book → Shoot → Deliver. Simple process timeline that removes uncertainty.',
    whyItConverts:
      'First-time clients do not know what happens after they inquire. A clear process reduces friction and form abandonment.',
    includes: [
      'Step 1: Inquiry or book online',
      'Step 2: Pre-shoot consult + session day',
      'Step 3: Edit, delivery, and revisions window',
    ],
    bestOn: ['Home', 'Contact'],
  },
  {
    id: 'faq-accordion',
    title: 'FAQ Accordion',
    placement: 'Home footer area + Contact page',
    impact: 'High',
    effort: 'Low',
    summary: 'Answers top objections: turnaround, deposits, travel fees, usage rights, rescheduling.',
    whyItConverts:
      'Unanswered questions become bounce. FAQ handles objections before they DM a competitor.',
    includes: [
      '8–12 expandable Q&As',
      'Schema markup for SEO rich results',
      'Link to contact at bottom for unanswered questions',
    ],
    bestOn: ['Home', 'Contact', 'Services'],
  },
  {
    id: 'google-reviews',
    title: 'Google Reviews Showcase',
    placement: 'Home — between portfolio and testimonials',
    impact: 'Very High',
    effort: 'Medium',
    summary: 'Star rating, review count, and 3–6 real Google review snippets with link to leave a review.',
    whyItConverts:
      'Third-party proof beats self-promotion. GBP reviews are the #1 trust signal for local photo/video bookings.',
    includes: [
      'Aggregate star rating + count',
      'Rotating or grid of review cards',
      'Leave a Review CTA → GBP review link',
    ],
    bestOn: ['Home', 'About'],
  },
  {
    id: 'why-hybrid',
    title: 'Why Hybrid Coverage',
    placement: 'Home + Services',
    impact: 'High',
    effort: 'Low',
    summary: 'Side-by-side comparison: photo-only vs video-only vs 223 hybrid — your differentiator.',
    whyItConverts:
      'Hybrid is your moat. This section educates buyers on why one vendor beats hiring separate photo and video crews.',
    includes: [
      'Comparison table or 3-column layout',
      'Cost/time savings callout',
      'CTA: Book Hybrid Session',
    ],
    bestOn: ['Home', 'Services'],
  },
  {
    id: 'availability-urgency',
    title: 'Availability & Urgency Strip',
    placement: 'Below hero or above footer CTA',
    impact: 'High',
    effort: 'Low',
    summary: '"Limited dates this month" or next 3 open slots — creates gentle urgency without being spammy.',
    whyItConverts:
      'Creative services are often booked on impulse. Scarcity nudges visitors who are "thinking about it" to act now.',
    includes: [
      'Editable open-date count (owner dashboard controlled)',
      'Seasonal note (wedding season, Q4 events, etc.)',
      'Direct link to booking calendar',
    ],
    bestOn: ['Home', '/landing'],
  },
  {
    id: 'service-quick-pick',
    title: 'Service Quick-Pick Grid',
    placement: 'Home — above portfolio',
    impact: 'High',
    effort: 'Medium',
    summary: 'Wedding, Event, Brand, Portrait, Music Video — each tile links to contact with intent pre-filled.',
    whyItConverts:
      'Generic "contact us" forms feel like work. Pre-selected service type increases form completion and GHL lead quality.',
    includes: [
      '6 service tiles with thumbnail',
      'Click → /contact?service=wedding (or GHL pre-fill)',
      'Short one-line outcome per service',
    ],
    bestOn: ['Home', 'Portfolio'],
  },
  {
    id: 'case-study-spotlights',
    title: 'Case Study Spotlights',
    placement: 'Home + Portfolio',
    impact: 'Medium–High',
    effort: 'Medium',
    summary: '2–3 mini case studies: client type, challenge, result, with before/after or highlight reel.',
    whyItConverts:
      'Portfolio shows craft; case studies show outcomes. B2B and event clients need proof you solve their specific problem.',
    includes: [
      'Client name or category (with permission)',
      '1–2 sentence result metric ("48hr turnaround", "2M views")',
      'View Project + Book Similar Session CTAs',
    ],
    bestOn: ['Home', 'Portfolio', 'Services'],
  },
  {
    id: 'post-inquiry-expectations',
    title: 'What Happens After You Book',
    placement: 'Contact page — beside or below form',
    impact: 'High',
    effort: 'Low',
    summary: 'Timeline graphic: form submit → response in 24hr → consult → contract → shoot day.',
    whyItConverts:
      'Form anxiety is real. Showing the exact next steps increases submissions from visitors who are ready but hesitant.',
    includes: [
      'Visual timeline (4–5 steps)',
      'Response time guarantee',
      'Deposit and contract note (transparent, not scary)',
    ],
    bestOn: ['Contact', '/landing'],
  },
];

export const STORAGE_KEY = '223visions-owner-section-picks';
