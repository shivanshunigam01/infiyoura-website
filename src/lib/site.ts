export const SITE = {
  name: "Infiyoura",
  title: "Infiyoura — Technology, Software & Digital Growth",
  description:
    "Infiyoura builds websites, software, mobile applications, AI solutions and digital growth systems for ambitious businesses worldwide.",
  url: "https://infiyoura.com",
  tagline: "YOUR IDEAS. OUR TECHNOLOGY.",
  email: "hello@infiyoura.com",
  address: {
    line1: "FF-04, Indraprastha Business House",
    line2: "Near Vijay Cross Road",
    city: "Ahmedabad 380009",
    country: "India",
  },
} as const;

const ADDRESS_QUERY = [
  SITE.address.line1,
  SITE.address.line2,
  SITE.address.city,
  SITE.address.country,
].join(", ");

export const SITE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_QUERY)}`;

export const SITE_ADDRESS_LINES = [
  SITE.address.line1,
  SITE.address.line2,
  SITE.address.city,
  SITE.address.country,
] as const;

/** Scroll track height (vh) — taller track = scroll through more frames in the hero. */
export const STORY_SCROLL_HEIGHT_VH = 680;
export const STORY_SCROLL_HEIGHT_VH_TABLET = 620;
export const STORY_SCROLL_HEIGHT_VH_MOBILE = 560;

/** Typical frame aspect ratio (width / height) for layout centering. */
export const FRAME_ASPECT_RATIO = 16 / 9;

export const FRAME_COUNT = 300;

/** Stop scroll animation before frames where the Infiyoura logo appears (0–1). */
export const STORY_ANIMATION_MAX_PROGRESS = 0.74;

/** Hide on-scroll story captions from this scroll progress onward (logo visible in frames). */
export const STORY_TEXT_MAX_PROGRESS = 0.72;
export const FRAME_BASE_PATH =
  process.env.NEXT_PUBLIC_FRAME_BASE_PATH?.replace(/\/$/, "") || "/frames";
export const LOGO_PATH = "/logo/infiyoura-logo.png";
export const FAVICON_PATH = "/favicon.png";
export const LOGO_ALT = `${SITE.name} — ${SITE.tagline}`;

export function getFramePath(index: number): string {
  const n = Math.max(1, Math.min(FRAME_COUNT, index));
  return `${FRAME_BASE_PATH}/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;
}
