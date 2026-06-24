export const CORE_PACKAGES = [
  {
    id: 'photography',
    title: 'Photography',
    startingAt: 250,
    popular: false,
    includes: [
      'Up to 1 hour of coverage',
      'Minimum 25 professionally edited images',
      'Online gallery with download access',
      '7–10 business day turnaround',
    ],
  },
  {
    id: 'video',
    title: 'Video',
    startingAt: 350,
    popular: false,
    includes: [
      'Up to 1 hour of coverage',
      '30–60 second highlight video',
      'Basic color correction',
      'Vertical or horizontal delivery',
      '10–14 business day turnaround',
    ],
  },
  {
    id: 'hybrid',
    title: 'Hybrid (Photo + Video)',
    startingAt: 550,
    popular: true,
    includes: [
      'Up to 1 hour of coverage',
      'Minimum 25 professionally edited images',
      '30–60 second highlight video',
      'Online gallery delivery',
      '10–14 business day turnaround',
    ],
  },
];

export const SPECIALTY_PACKAGES = [
  {
    id: 'headshots',
    title: 'Headshots',
    startingAt: 300,
    description: 'Professionals, entrepreneurs, corporate teams, actors, and creatives.',
  },
  {
    id: 'branding',
    title: 'Branding Content',
    startingAt: 350,
    description: 'Small businesses, personal brands, realtors, trainers, and clothing brands.',
  },
];

export const PROJECT_TYPES = [
  'Event',
  'Branding',
  'Headshots',
  'Fitness Content',
  'Church / Ministry',
  'Corporate',
  'Other',
];

export const SERVICE_OPTIONS = ['Photography', 'Video', 'Hybrid (Photo + Video)'];

export const DELIVERABLE_OPTIONS = [
  'Edited Photos',
  'Highlight Video',
  'Social Media Reels',
  'Drone Footage',
  'Headshots',
];

export const BUDGET_RANGES = [
  'Under $500',
  '$500 – $1,000',
  '$1,000 – $2,500',
  '$2,500+',
  'Not sure yet',
];

export const BOOKING_STEPS = [
  {
    step: 1,
    title: 'Send Your Inquiry',
    description: 'Fill out the form or book online. We respond within 24 hours with a custom quote.',
  },
  {
    step: 2,
    title: 'Confirm Your Date',
    description: 'A 50% retainer secures your date. Remaining balance is due on or before shoot day.',
  },
  {
    step: 3,
    title: 'Shoot Day',
    description: 'We capture your vision with cinematic photo and video — one team, one creative direction.',
  },
  {
    step: 4,
    title: 'Delivery',
    description: 'Edited photos in 7–10 business days. Video in 10–14 days. Rush options available.',
  },
];

export const CONVERSION_FAQS = [
  {
    q: 'How much does a session cost?',
    a: 'Photography starts at $250, video at $350, and our most popular hybrid package starts at $550 for up to 1 hour of coverage. Headshots start at $300 and branding content at $350. Larger projects receive custom quotes.',
  },
  {
    q: 'What is included in a hybrid package?',
    a: 'Hybrid includes up to 1 hour of coverage, a minimum of 25 edited photos, a 30–60 second highlight video, online gallery delivery, and a 10–14 business day turnaround — photo and video in one session.',
  },
  {
    q: 'How do I secure my date?',
    a: 'A 50% non-refundable retainer is required to hold your date. The remaining balance is due on or before the day of service. Dates are not held without a retainer.',
  },
  {
    q: 'How fast will I receive my content?',
    a: 'Photography is delivered in 7–10 business days. Video in 10–14 business days. Rush delivery (48 hours) is available for an additional fee.',
  },
  {
    q: 'Do you travel outside Atlanta?',
    a: 'Yes. We serve the greater Atlanta metro. Travel beyond 25 miles from Stone Mountain, GA may include a travel fee — we will confirm in your quote.',
  },
  {
    q: 'Can I get raw files?',
    a: 'Deliverables are professionally edited content. Raw files are available by request for an additional fee — ask us when requesting your quote.',
  },
  {
    q: 'Who do you work with?',
    a: 'Businesses, athletes, churches, creators, and families across Atlanta — events, branding, headshots, fitness content, corporate work, and more.',
  },
];

export const BOOKING_HIGHLIGHTS = [
  'Response within 24 hours',
  '50% retainer secures your date',
  'Photo: 7–10 day turnaround',
  'Video: 10–14 day turnaround',
  'Custom quotes for larger projects',
];

export const AVAILABILITY = {
  openSlots: 4,
};

/** Atlanta seasons — message updates automatically by calendar month. */
export function getSeasonalAvailabilityNote(date = new Date()) {
  const month = date.getMonth(); // 0 = Jan … 11 = Dec

  if (month >= 2 && month <= 4) {
    return 'Spring portrait and event dates are filling quickly — book early to secure your spot.';
  }
  if (month >= 5 && month <= 7) {
    return 'Summer event and portrait dates are filling quickly — book early to secure your spot.';
  }
  if (month >= 8 && month <= 10) {
    return 'Fall wedding and event dates are filling quickly — book early to secure your spot.';
  }
  return 'Holiday and winter session dates are limited — book early to secure your spot.';
}

export const GOOGLE_REVIEWS = {
  rating: 5.0,
  reviewCount: 25,
  reviews: [
    {
      id: 1,
      name: 'Kenya Bryant',
      text: '223 Visions does amazing work! Super professional, pictures and videos come out phenomenal, and you get your photos and videos back so quick! Keeping them in rotation for any event I have!',
      service: 'Events · Photo & Video',
    },
    {
      id: 2,
      name: 'Kyera Perry',
      text: '223 Visions provides amazing photography services! The photos were flawless and really captured the essence of the event!',
      service: 'Event Photography',
    },
    {
      id: 3,
      name: 'Devian Bonner',
      text: 'The best photographer around. Great communication, punctual, really professional, and the turnaround time is great. Knowledgeable and creative — he can bring your ideas to life. I will always work with him.',
      service: 'Photography',
    },
    {
      id: 4,
      name: 'Belinda Bates',
      text: "Christian took my daughter's baby shower pics and they were so beautiful! He captured those memories perfectly — even the behind-the-scenes photos were good. I am coming to him for ALL my photo needs!",
      service: 'Events',
    },
    {
      id: 5,
      name: 'remy santi',
      text: 'Thanks so much for your help with pictures for my business. My headshots also came out great. Talented and versatile photographer.',
      service: 'Headshots · Branding',
    },
    {
      id: 6,
      name: 'Rasheda Bell',
      text: 'Best photographer hands down! Had an impromptu shoot and absolutely loved how our photos turned out! Will definitely recommend every time!',
      service: 'Photography',
    },
  ],
};

export const SERVICE_QUICK_PICKS = [
  {
    id: 'event',
    label: 'Weddings & Events',
    outcome: 'Full-day or hourly photo + video coverage',
    project: 'Event',
    service: 'Hybrid (Photo + Video)',
    image: '/portfolio/weddings/1h4a0130.jpg',
  },
  {
    id: 'branding',
    label: 'Brand & Business',
    outcome: 'Content for social, web, and marketing',
    project: 'Branding',
    service: 'Video',
    image: '/portfolio/video-productions/1h4a2152.jpg',
  },
  {
    id: 'headshots',
    label: 'Headshots',
    outcome: 'Professional portraits for teams and creatives',
    project: 'Headshots',
    service: 'Photography',
    image: '/portfolio/portrait/1h4a0002.jpg',
  },
  {
    id: 'church',
    label: 'Church & Ministry',
    outcome: 'Sunday production, promos, and event coverage',
    project: 'Church / Ministry',
    service: 'Hybrid (Photo + Video)',
    image: '/portfolio/church/1h4a2048.jpg',
  },
  {
    id: 'corporate',
    label: 'Corporate',
    outcome: 'Interviews, events, and internal comms',
    project: 'Corporate',
    service: 'Video',
    image: '/portfolio/events/IMG_2332.jpg',
  },
  {
    id: 'fitness',
    label: 'Fitness & Athletes',
    outcome: 'Training, promo, and social-ready reels',
    project: 'Fitness Content',
    service: 'Video',
    image: '/portfolio/portrait/6s3a8673.jpg',
  },
];
