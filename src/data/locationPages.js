export function slugifyLocation(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** @typedef {{ slug: string, name: string, type: 'city' | 'neighborhood', region: string, intro: string, highlights: string[], shootTypes: string[], nearbySlugs: string[], faqs: { q: string, a: string }[] }} LocationPage */

/** @type {LocationPage[]} */
export const LOCATION_PAGES = [
  {
    slug: 'atlanta',
    name: 'Atlanta',
    type: 'city',
    region: 'Metro Core',
    intro:
      '223 Visions delivers hybrid photography and videography across Atlanta — from corporate campaigns and church productions to weddings, brand content, and creator sessions. As an Atlanta-based team, we know the city\'s venues, light, and pace, and we build shoots that feel cinematic without slowing your project down.',
    highlights: [
      'Corporate and brand shoots downtown and across the metro',
      'Event and hybrid coverage for venues citywide',
      'Headshots, fitness, and creator content with fast turnaround',
    ],
    shootTypes: ['Corporate & branding', 'Events & weddings', 'Church & ministry', 'Headshots & portraits', 'Hybrid photo + video'],
    nearbySlugs: ['downtown-atlanta', 'midtown', 'buckhead', 'old-fourth-ward', 'decatur'],
    faqs: [
      {
        q: 'Do you serve all of Atlanta proper?',
        a: 'Yes. We cover Atlanta and the full metro area. Share your neighborhood or venue in your inquiry and we will confirm travel and timing in your quote.',
      },
      {
        q: 'What Atlanta photography services do you offer?',
        a: 'Photography from $250, videography from $350, and hybrid coverage from $550. We also offer headshots, branding content, and custom event packages.',
      },
    ],
  },
  {
    slug: 'buckhead',
    name: 'Buckhead',
    type: 'city',
    region: 'North Atlanta',
    intro:
      'Buckhead calls for polished production — executive headshots, luxury events, brand films, and social content that matches the neighborhood\'s standard. 223 Visions serves Buckhead clients with hybrid photo and video teams, editorial lighting, and deliverables ready for web, social, and boardroom use.',
    highlights: [
      'Executive headshots and team portraits',
      'Upscale event and reception coverage',
      'Brand and lifestyle content for businesses along Peachtree Rd',
    ],
    shootTypes: ['Corporate headshots', 'Events & galas', 'Brand films', 'Hybrid coverage'],
    nearbySlugs: ['atlanta', 'brookhaven', 'midtown', 'vinings', 'sandy-springs'],
    faqs: [
      {
        q: 'Do you shoot corporate headshots in Buckhead offices?',
        a: 'Yes. We regularly shoot on location at Buckhead offices, co-working spaces, and outdoor settings nearby. Studio-style setups can be brought to you.',
      },
      {
        q: 'How quickly can we book a Buckhead session?',
        a: 'Inquiry to quote is typically within 24 hours. Share your date and project type through our form to check availability.',
      },
    ],
  },
  {
    slug: 'midtown',
    name: 'Midtown',
    type: 'city',
    region: 'Metro Core',
    intro:
      'Midtown Atlanta is one of the best backdrops in the city for photo and video — skyline views, walkable streets, and a creative energy that suits brands, artists, and events. 223 Visions produces headshots, promos, event coverage, and hybrid sessions throughout Midtown and the surrounding blocks.',
    highlights: [
      'Skyline and urban portrait sessions',
      'Event coverage near Arts Center and Piedmont Park',
      'Brand and creator content for Midtown businesses',
    ],
    shootTypes: ['Portraits & headshots', 'Brand promos', 'Events', 'Hybrid sessions'],
    nearbySlugs: ['atlanta', 'west-midtown', 'buckhead', 'virginia-highland', 'old-fourth-ward'],
    faqs: [
      {
        q: 'Can you shoot near Piedmont Park or Midtown skyline spots?',
        a: 'Absolutely. We scout locations that fit your brand and handle permits when required. Mention your vision in the inquiry form.',
      },
      {
        q: 'Do you offer video production in Midtown?',
        a: 'Yes — brand films, event highlights, and social reels starting at $350, or hybrid photo + video from $550.',
      },
    ],
  },
  {
    slug: 'decatur',
    name: 'Decatur',
    type: 'city',
    region: 'East Metro',
    intro:
      'Decatur\'s walkable square, local businesses, and community events make it a natural fit for authentic brand storytelling. 223 Visions serves Decatur with photography, videography, and hybrid coverage for restaurants, churches, creators, families, and small businesses across DeKalb County.',
    highlights: [
      'Local business and restaurant content',
      'Community and church event coverage',
      'Family portraits and milestone sessions',
    ],
    shootTypes: ['Branding & social content', 'Church & events', 'Portraits', 'Hybrid coverage'],
    nearbySlugs: ['atlanta', 'east-point', 'virginia-highland', 'inman-park', 'college-park'],
    faqs: [
      {
        q: 'Do you travel to Decatur for one-hour sessions?',
        a: 'Yes. Decatur is within our standard metro service area. Travel fees apply only beyond 25 miles from Stone Mountain, GA.',
      },
      {
        q: 'What content works best for Decatur businesses?',
        a: 'Short-form video, product photography, and hybrid packages perform well for restaurants, retail, and service brands around the square.',
      },
    ],
  },
  {
    slug: 'marietta',
    name: 'Marietta',
    type: 'city',
    region: 'Northwest Metro',
    intro:
      'Marietta and Cobb County clients choose 223 Visions for professional headshots, corporate video, church productions, and event coverage with a cinematic look. We travel to Marietta Square, office parks, and venues across northwest metro Atlanta with the same hybrid capability we bring downtown.',
    highlights: [
      'Corporate and team photography',
      'Church and community event coverage',
      'Wedding and portrait sessions around Marietta Square',
    ],
    shootTypes: ['Headshots', 'Corporate video', 'Events', 'Hybrid coverage'],
    nearbySlugs: ['smyrna', 'vinings', 'atlanta', 'roswell', 'sandy-springs'],
    faqs: [
      {
        q: 'Is Marietta within your travel zone?',
        a: 'Yes. Marietta is part of our regular metro coverage. We confirm any travel details when you request a quote.',
      },
      {
        q: 'Can you film at Marietta Square or local venues?',
        a: 'Yes. We shoot on location throughout Marietta and coordinate with venue requirements when needed.',
      },
    ],
  },
  {
    slug: 'sandy-springs',
    name: 'Sandy Springs',
    type: 'city',
    region: 'North Metro',
    intro:
      'Sandy Springs is home to corporate headquarters, professional services, and upscale events — exactly the work 223 Visions is built for. We deliver executive portraits, interview-style video, brand content, and hybrid event coverage for Sandy Springs businesses and organizations.',
    highlights: [
      'Corporate headshots and leadership portraits',
      'Interview and testimonial video',
      'Conference and corporate event coverage',
    ],
    shootTypes: ['Corporate photography', 'Brand & testimonial video', 'Events', 'Hybrid packages'],
    nearbySlugs: ['buckhead', 'dunwoody', 'brookhaven', 'atlanta', 'roswell'],
    faqs: [
      {
        q: 'Do you offer on-site corporate shoots in Sandy Springs?',
        a: 'Yes. We bring lighting and gear to your office or preferred location. Team headshot days are available by quote.',
      },
      {
        q: 'What is the starting investment for Sandy Springs projects?',
        a: 'Photography from $250, video from $350, hybrid from $550. Larger corporate projects receive custom quotes.',
      },
    ],
  },
  {
    slug: 'alpharetta',
    name: 'Alpharetta',
    type: 'city',
    region: 'North Metro',
    intro:
      'Alpharetta\'s business corridor and suburban venues need production that looks national but feels local. 223 Visions serves Alpharetta companies, churches, and families with photography, videography, and hybrid packages — ideal for brand launches, corporate updates, and milestone events.',
    highlights: [
      'Tech and professional services brand content',
      'Church and community productions',
      'Event and portrait coverage in north Fulton',
    ],
    shootTypes: ['Branding content', 'Corporate video', 'Events', 'Portraits'],
    nearbySlugs: ['roswell', 'dunwoody', 'sandy-springs', 'marietta', 'brookhaven'],
    faqs: [
      {
        q: 'Do you serve Alpharetta and north Fulton regularly?',
        a: 'Yes. Alpharetta is a core part of our north metro coverage for corporate and event work.',
      },
      {
        q: 'Can you create social-ready reels for Alpharetta brands?',
        a: 'Yes. We deliver vertical and horizontal cuts optimized for Instagram, TikTok, and paid social.',
      },
    ],
  },
  {
    slug: 'smyrna',
    name: 'Smyrna',
    type: 'city',
    region: 'Northwest Metro',
    intro:
      'Smyrna and the Market Village area are growing hubs for small businesses, fitness brands, and community events. 223 Visions provides photography and videography in Smyrna for headshots, promos, church coverage, and hybrid sessions with fast, professional delivery.',
    highlights: [
      'Fitness and athlete content',
      'Small business branding shoots',
      'Community and church events',
    ],
    shootTypes: ['Fitness content', 'Branding', 'Headshots', 'Hybrid coverage'],
    nearbySlugs: ['marietta', 'vinings', 'atlanta', 'sandy-springs', 'east-point'],
    faqs: [
      {
        q: 'Do you shoot fitness content in Smyrna gyms?',
        a: 'Yes. We capture training, promo, and social-ready photo and video for athletes and fitness brands.',
      },
      {
        q: 'How do I book a session in Smyrna?',
        a: 'Start your project online — select your service and share your Smyrna location. We respond within 24 hours.',
      },
    ],
  },
  {
    slug: 'roswell',
    name: 'Roswell',
    type: 'city',
    region: 'North Metro',
    intro:
      'Historic Roswell and its surrounding neighborhoods offer distinctive backdrops for portraits, weddings, and brand films. 223 Visions serves Roswell clients with hybrid photography and videography for events, corporate work, churches, and creative projects across north metro Atlanta.',
    highlights: [
      'Historic district portraits and weddings',
      'Corporate and professional headshots',
      'Church and nonprofit video production',
    ],
    shootTypes: ['Weddings & events', 'Headshots', 'Brand video', 'Hybrid packages'],
    nearbySlugs: ['alpharetta', 'marietta', 'sandy-springs', 'dunwoody', 'buckhead'],
    faqs: [
      {
        q: 'Can you shoot along Canton St or Roswell historic sites?',
        a: 'Yes. We use Roswell\'s historic streets and parks for portraits and brand content when it fits your project.',
      },
      {
        q: 'Do you offer hybrid wedding coverage in Roswell?',
        a: 'Yes. Hybrid photo and video from $550 for up to one hour, with custom packages for full events.',
      },
    ],
  },
  {
    slug: 'college-park',
    name: 'College Park',
    type: 'city',
    region: 'South Metro',
    intro:
      'College Park and south metro Atlanta deserve the same production quality as downtown agencies charge premium rates for. 223 Visions covers College Park with event photography, brand video, church productions, and hybrid sessions for local businesses, creators, and organizations near the airport corridor.',
    highlights: [
      'Event and conference coverage',
      'Church and community productions',
      'Brand content for local businesses',
    ],
    shootTypes: ['Events', 'Church & ministry', 'Branding', 'Hybrid coverage'],
    nearbySlugs: ['east-point', 'atlanta', 'decatur', 'smyrna', 'marietta'],
    faqs: [
      {
        q: 'Do you cover events near the airport and College Park venues?',
        a: 'Yes. We regularly serve south metro venues and confirm logistics in your custom quote.',
      },
      {
        q: 'Is there a travel fee for College Park?',
        a: 'College Park is within our standard metro zone. Fees may apply for locations beyond 25 miles from Stone Mountain, GA.',
      },
    ],
  },
  {
    slug: 'east-point',
    name: 'East Point',
    type: 'city',
    region: 'South Metro',
    intro:
      'East Point\'s creative community and growing business scene need visual content that stands out. 223 Visions provides photography and videography in East Point for portraits, brand shoots, church coverage, fitness content, and events — with hybrid photo and video available in one coordinated session.',
    highlights: [
      'Creator and small business content',
      'Church and community event coverage',
      'Portrait and fitness sessions',
    ],
    shootTypes: ['Branding', 'Fitness content', 'Events', 'Hybrid sessions'],
    nearbySlugs: ['college-park', 'atlanta', 'decatur', 'smyrna', 'downtown-atlanta'],
    faqs: [
      {
        q: 'Do you work with East Point creators and small brands?',
        a: 'Yes. We specialize in social-ready photo and video for creators, churches, and local businesses.',
      },
      {
        q: 'What is hybrid coverage?',
        a: 'One team captures photo and video in the same session with unified creative direction — from $550 for up to one hour.',
      },
    ],
  },
  {
    slug: 'downtown-atlanta',
    name: 'Downtown Atlanta',
    type: 'neighborhood',
    region: 'Metro Core',
    intro:
      'Downtown Atlanta is the center of corporate, civic, and large-scale event production in the city. 223 Visions shoots downtown for conferences, brand campaigns, church gatherings, headshots, and hybrid event coverage — navigating urban logistics so you get cinematic results without the production headaches.',
    highlights: [
      'Conference and corporate event coverage',
      'Urban portraits with skyline backdrops',
      'Brand films and promotional video',
    ],
    shootTypes: ['Corporate events', 'Brand video', 'Headshots', 'Hybrid coverage'],
    nearbySlugs: ['atlanta', 'midtown', 'west-midtown', 'old-fourth-ward', 'college-park'],
    faqs: [
      {
        q: 'Can you handle downtown Atlanta venue requirements?',
        a: 'Yes. We coordinate with venue AV teams and load-in rules for downtown hotels, arenas, and office towers.',
      },
      {
        q: 'Do you shoot near Centennial Olympic Park or downtown landmarks?',
        a: 'Yes. We plan locations around your brand, lighting, and permit needs.',
      },
    ],
  },
  {
    slug: 'west-midtown',
    name: 'West Midtown',
    type: 'neighborhood',
    region: 'Metro Core',
    intro:
      'West Midtown\'s design district, studios, and industrial backdrops are ideal for brand photography and film-style video. 223 Visions serves West Midtown businesses, artists, and event hosts with hybrid coverage that leverages the neighborhood\'s architecture and creative culture.',
    highlights: [
      'Brand and product photography',
      'Industrial and studio-style video',
      'Event coverage at Westside venues',
    ],
    shootTypes: ['Branding content', 'Brand films', 'Events', 'Hybrid packages'],
    nearbySlugs: ['midtown', 'atlanta', 'buckhead', 'vinings', 'downtown-atlanta'],
    faqs: [
      {
        q: 'Is West Midtown good for brand photo shoots?',
        a: 'Yes. The area\'s murals, warehouses, and design showrooms are popular backdrops for Atlanta brand content.',
      },
      {
        q: 'Do you offer videography for West Midtown events?',
        a: 'Yes — event highlights, social cuts, and full hybrid coverage are available by quote.',
      },
    ],
  },
  {
    slug: 'virginia-highland',
    name: 'Virginia-Highland',
    type: 'neighborhood',
    region: 'Metro Core',
    intro:
      'Virginia-Highland\'s boutiques, restaurants, and tree-lined streets are perfect for lifestyle brand content and portrait sessions. 223 Visions works with VaHi businesses, families, and creators on photography, short-form video, and hybrid packages that feel authentic to the neighborhood.',
    highlights: [
      'Restaurant and retail social content',
      'Lifestyle portraits and headshots',
      'Small event and milestone coverage',
    ],
    shootTypes: ['Branding & social', 'Portraits', 'Events', 'Hybrid sessions'],
    nearbySlugs: ['midtown', 'inman-park', 'atlanta', 'decatur', 'old-fourth-ward'],
    faqs: [
      {
        q: 'Do you shoot content for Virginia-Highland restaurants?',
        a: 'Yes. We create menu, interior, and social video content for food and retail brands in VaHi.',
      },
      {
        q: 'Can we shoot outdoors in Virginia-Highland?',
        a: 'Yes. We plan around foot traffic, golden hour, and weather for the best results.',
      },
    ],
  },
  {
    slug: 'inman-park',
    name: 'Inman Park',
    type: 'neighborhood',
    region: 'Metro Core',
    intro:
      'Inman Park combines historic charm and modern Atlanta energy — a favorite for weddings, portraits, and neighborhood business content. 223 Visions provides photography and videography in Inman Park for events, branding, headshots, and hybrid coverage with an editorial, story-driven approach.',
    highlights: [
      'Wedding and engagement sessions',
      'Neighborhood business branding',
      'Portrait sessions with historic backdrops',
    ],
    shootTypes: ['Weddings & events', 'Branding', 'Portraits', 'Hybrid coverage'],
    nearbySlugs: ['virginia-highland', 'old-fourth-ward', 'decatur', 'midtown', 'atlanta'],
    faqs: [
      {
        q: 'Do you shoot weddings in Inman Park?',
        a: 'Yes. We offer photography, video, and hybrid packages for weddings and events in Inman Park venues.',
      },
      {
        q: 'How far in advance should Inman Park clients book?',
        a: 'Popular dates fill quickly — submit your project details early to secure your date with a retainer.',
      },
    ],
  },
  {
    slug: 'old-fourth-ward',
    name: 'Old Fourth Ward',
    type: 'neighborhood',
    region: 'Metro Core',
    intro:
      'Old Fourth Ward and the BeltLine corridor are among Atlanta\'s most photographed areas — and for good reason. 223 Visions creates photo and video content in O4W for brands, churches, creators, and events, using the neighborhood\'s energy while keeping your story front and center.',
    highlights: [
      'BeltLine-adjacent brand and lifestyle shoots',
      'Creator and artist promotional content',
      'Event and church coverage',
    ],
    shootTypes: ['Brand content', 'Creator video', 'Events', 'Hybrid packages'],
    nearbySlugs: ['inman-park', 'virginia-highland', 'midtown', 'atlanta', 'decatur'],
    faqs: [
      {
        q: 'Can you shoot along the BeltLine in O4W?',
        a: 'Yes. We plan BeltLine sessions around crowds, permits, and the look you want for your brand.',
      },
      {
        q: 'Do you work with O4W startups and creators?',
        a: 'Yes. Short-form video and hybrid sessions are popular for founders and content creators in the area.',
      },
    ],
  },
  {
    slug: 'brookhaven',
    name: 'Brookhaven',
    type: 'neighborhood',
    region: 'North Metro',
    intro:
      'Brookhaven professionals and families expect high-quality visual content for business, church, and personal milestones. 223 Visions serves Brookhaven with corporate headshots, event photography, brand video, and hybrid coverage across north DeKalb and adjacent corridors.',
    highlights: [
      'Corporate and executive portraits',
      'Church and school event coverage',
      'Family and milestone photography',
    ],
    shootTypes: ['Headshots', 'Events', 'Brand video', 'Hybrid coverage'],
    nearbySlugs: ['buckhead', 'dunwoody', 'sandy-springs', 'decatur', 'atlanta'],
    faqs: [
      {
        q: 'Do you offer team headshot days in Brookhaven offices?',
        a: 'Yes. We set up on location and photograph teams efficiently with consistent, professional results.',
      },
      {
        q: 'Is Brookhaven in your standard service area?',
        a: 'Yes. Brookhaven is part of our core north metro coverage with no standard travel fee.',
      },
    ],
  },
  {
    slug: 'dunwoody',
    name: 'Dunwoody',
    type: 'neighborhood',
    region: 'North Metro',
    intro:
      'Dunwoody\'s corporate campuses and Perimeter business district need reliable photo and video partners who show up prepared. 223 Visions delivers headshots, testimonial video, event coverage, and hybrid production for Dunwoody companies, churches, and organizations.',
    highlights: [
      'Perimeter Center corporate content',
      'Conference and gala coverage',
      'Professional headshots and team photography',
    ],
    shootTypes: ['Corporate photography', 'Testimonial video', 'Events', 'Hybrid packages'],
    nearbySlugs: ['sandy-springs', 'brookhaven', 'alpharetta', 'roswell', 'buckhead'],
    faqs: [
      {
        q: 'Do you film corporate interviews in Dunwoody?',
        a: 'Yes. We provide interview lighting, audio, and editing for corporate and nonprofit storytelling.',
      },
      {
        q: 'Can you cover Perimeter-area conferences?',
        a: 'Yes. Event photography and video coverage are available hourly or as custom packages.',
      },
    ],
  },
  {
    slug: 'vinings',
    name: 'Vinings',
    type: 'neighborhood',
    region: 'Northwest Metro',
    intro:
      'Vinings and the Cumberland area blend residential charm with corporate convenience — ideal for executive portraits, small events, and brand content. 223 Visions serves Vinings with photography, videography, and hybrid sessions for professionals, families, and businesses along the I-285 corridor.',
    highlights: [
      'Executive and professional headshots',
      'Small corporate and social events',
      'Brand photography near Cumberland',
    ],
    shootTypes: ['Headshots', 'Events', 'Branding', 'Hybrid coverage'],
    nearbySlugs: ['marietta', 'smyrna', 'buckhead', 'sandy-springs', 'atlanta'],
    faqs: [
      {
        q: 'Do you shoot in Vinings and Cumberland office parks?',
        a: 'Yes. We regularly serve the Vinings and Cumberland area for corporate and portrait work.',
      },
      {
        q: 'What packages do Vinings clients book most?',
        a: 'Headshots from $300 and hybrid coverage from $550 are popular for professionals and small businesses.',
      },
    ],
  },
];


/** Portrait-only images for silo heroes — top-anchored 3:4 crop, no per-page tuning. */
export const LOCATION_HERO_IMAGES = [
  '/portfolio/church/1h4a2048.jpg',
  '/portfolio/events/IMG_2332.jpg',
  '/portfolio/portrait/1h4a0002.jpg',
  '/portfolio/portrait/6s3a8673.jpg',
];

export function getLocationHeroImage(slug) {
  const index = [...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return LOCATION_HERO_IMAGES[index % LOCATION_HERO_IMAGES.length];
}
export function getLocationBySlug(slug) {
  return LOCATION_PAGES.find((location) => location.slug === slug);
}

export function getAllLocationSlugs() {
  return LOCATION_PAGES.map((location) => location.slug);
}

export function getNearbyLocations(slugs) {
  return slugs.map(getLocationBySlug).filter(Boolean);
}

export const serviceAreaCities = LOCATION_PAGES.filter((l) => l.type === 'city').map((l) => l.name);
export const serviceAreaNeighborhoods = LOCATION_PAGES.filter((l) => l.type === 'neighborhood').map(
  (l) => l.name
);
