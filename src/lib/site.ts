export const SITE = {
  name: "Infiyoura",
  title: "Infiyoura — Technology, Software & Digital Growth",
  description:
    "Infiyoura builds websites, software, mobile applications, AI solutions and digital growth systems for ambitious businesses worldwide.",
  url: "https://www.infiyoura.com",
  tagline: "YOUR IDEAS. OUR TECHNOLOGY.",
  email: "hello@infiyoura.com",
} as const;

export const FRAME_COUNT = 300;
export const FRAME_BASE_PATH = "/frames";
export const LOGO_PATH = "/logo/infiyoura-logo.png";

export function getFramePath(index: number): string {
  const n = Math.max(1, Math.min(FRAME_COUNT, index));
  return `${FRAME_BASE_PATH}/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;
}
