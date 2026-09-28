import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { StorySection } from "@/components/StorySection/StorySection";
import { Services } from "@/components/Services/Services";
import { Marketing } from "@/components/Marketing/Marketing";
import { CaseStudies } from "@/components/CaseStudies/CaseStudies";
import { Process } from "@/components/Process/Process";
import { Technology } from "@/components/Technology/Technology";
import { FinalCta } from "@/components/FinalCta/FinalCta";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <Services />
        <Marketing />
        <CaseStudies />
        <Process />
        <Technology />
        <FinalCta />
        <section id="contact" className="border-t border-zinc-200 bg-white py-24">
          <div className="mx-auto max-w-xl px-5">
            <h2 className="text-3xl font-semibold tracking-tight">Let&apos;s build something great</h2>
            <form className="mt-8 space-y-4" action="/api/contact" method="post">
              <input name="name" required placeholder="Name" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" />
              <input name="company" placeholder="Company" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" />
              <input name="email" required type="email" placeholder="Email" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" />
              <input name="phone" type="tel" placeholder="Phone" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" />
              <input name="country" placeholder="Country" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" />
              <select name="service" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" defaultValue="">
                <option value="" disabled>Service</option>
                <option>Website</option><option>Mobile App</option><option>AI</option><option>SEO</option><option>Other</option>
              </select>
              <input name="budget" placeholder="Budget" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" />
              <textarea name="details" required rows={4} placeholder="Project details" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" />
              <button type="submit" className="rounded-full bg-[var(--brand-green)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Let&apos;s build something great
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
