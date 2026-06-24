export const HERO_LAYOUT_STORAGE_KEY = '223visions-owner-hero-layout';

export const HERO_LAYOUT_OPTIONS = [
  {
    id: 'object-position',
    title: 'Reframe the video crop',
    tag: 'Quick win',
    impact: 'High',
    effort: 'Low',
    summary: 'Keep centered text — shift where the video crops so the face sits above the headline.',
    whyItWorks:
      'The face is likely in the vertical center of the frame, which is exactly where the headline sits. Nudging object-position (e.g. center 30% or object-top) moves the subject without redesigning the hero.',
    includes: [
      'CSS object-position on hero video (desktop + mobile tuning)',
      'Optional separate poster crop for LCP fallback',
      'A/B test 2–3 crop values in owner preview before going live',
    ],
    tradeoff: 'Works best if face is only slightly covered; extreme crops may clip shoulders or gear.',
  },
  {
    id: 'lower-third-copy',
    title: 'Move copy to the lower third',
    tag: 'Recommended',
    impact: 'Very High',
    effort: 'Low',
    summary: 'Push headline, subhead, and CTAs into the bottom third — clear space for the face above.',
    whyItWorks:
      'Cinematic heroes often keep talent in the upper two-thirds and copy in the lower third. Matches how film titles sit over footage without blocking the subject.',
    includes: [
      'Flex alignment: items-end on hero container',
      'Stronger bottom gradient scrim behind text only',
      'Scroll chevron stays anchored below CTAs',
    ],
    tradeoff: 'Less “poster centered” feel; copy reads more like a trailer end card.',
  },
  {
    id: 'split-layout',
    title: 'Split screen — copy beside video',
    tag: 'Bold',
    impact: 'High',
    effort: 'Medium',
    summary: 'On desktop, text in a left column; video fills the right half so the face is never under type.',
    whyItWorks:
      'Same pattern as your area pages — copy and imagery don’t compete. Face stays fully visible in the video column while messaging stays readable on solid dark panel.',
    includes: [
      'Two-column grid on lg+; stacked on mobile with copy first or video first',
      'Video column: object-cover with face-biased crop',
      'Optional subtle red accent border between panels',
    ],
    tradeoff: 'Less immersive full-bleed hero; stronger editorial / agency look.',
  },
  {
    id: 'bottom-panel',
    title: 'Bottom content panel',
    tag: 'Clean',
    impact: 'High',
    effort: 'Medium',
    summary: 'Full-bleed video on top; headline lives in a dedicated dark panel across the bottom ~35%.',
    whyItWorks:
      'Separates “showcase” (video) from “message” (panel). Face in the upper frame stays completely unobstructed; text gets guaranteed contrast on black.',
    includes: [
      'Video height ~65vh; panel below with headline + CTAs',
      'Panel can include trust line or service chips',
      'Mobile: same stack — video then panel',
    ],
    tradeoff: 'Shorter visible video area on first screen; may need tighter headline sizing.',
  },
  {
    id: 'asymmetric-minimal',
    title: 'Asymmetric copy + lighter overlay',
    tag: 'Premium',
    impact: 'Medium–High',
    effort: 'Medium',
    summary: 'Headline aligned left (or right) away from the face; reduce center overlay; smaller type + text shadow.',
    whyItWorks:
      'If the videographer frames to one side, moving copy to the opposite corner avoids overlap. Lighter center scrim lets the face read through while type stays legible via placement and shadow.',
    includes: [
      'Left-aligned copy block with max-width ~lg',
      'Reduce bg-black/55 to ~35% in center; keep edge vignette',
      'Slightly smaller h1 on mobile; optional glass backdrop behind text only',
    ],
    tradeoff: 'Requires knowing which side the face is on; less symmetrical brand moment.',
  },
];

export function getHeroLayoutById(id) {
  return HERO_LAYOUT_OPTIONS.find((o) => o.id === id);
}
