/** Unsplash CDN URLs for Next/Image (IT, software, teams, offices). */

export function unsplash(photoSlug: string, width = 1200): string {
  return `https://images.unsplash.com/photo-${photoSlug}?auto=format&fit=crop&w=${width}&q=80`;
}

export const UNSPLASH_IT = {
  laptopCode: unsplash("1498050108023-c5249f4df085", 1600),
  teamCollaboration: unsplash("1522071820081-009f0129c71c", 1400),
  analytics: unsplash("1460925895917-afdab827c52f", 1400),
  officeTeam: unsplash("1551434678-e076c223a692", 1400),
  devWorkspace: unsplash("1519389950473-47ba0277781c", 1400),
  meeting: unsplash("1531482615713-2afd69097998", 1200),
  startup: unsplash("1552664730-d307ca884978", 1200),
  mobileDev: unsplash("1512941937669-90a1b58e7e9c", 1200),
  serverRoom: unsplash("1558494949-ef010cbdcc31", 1200),
  designUI: unsplash("1561070791-2526d30994b5", 1200),
  marketing: unsplash("1557804506-669a67965ba0", 1200),
  remoteTeam: unsplash("1600880292203-757bb62b4baf", 1200),
} as const;
