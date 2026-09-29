# Scroll animation frames

**Desktop / tablet (≥640px):** **300** JPEGs in this folder — `ezgif-frame-001.jpg` … `ezgif-frame-300.jpg`.

**Mobile phones (&lt;640px):** **180** JPEGs in `public/frames-mobile/` with the same naming pattern (portrait-optimized export).

These files are large. If they are not in your Git repository, deploy will succeed but the scroll animation will not show until you either:

1. Commit and push the frames (consider [Git LFS](https://git-lfs.github.com/) for large assets), or  
2. Host frames on a CDN and set `NEXT_PUBLIC_FRAME_BASE_PATH` in Vercel project environment variables to that URL (no trailing slash).
