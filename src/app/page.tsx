import { SiteShell } from "@/components/layout/SiteShell";

import { StorySection } from "@/components/StorySection/StorySection";

import { PremiumStats } from "@/components/Premium/PremiumStats";

import { CapabilitiesMarquee } from "@/components/Premium/CapabilitiesMarquee";

import { PremiumIntro } from "@/components/Premium/PremiumIntro";
import { FounderSection } from "@/components/Premium/FounderSection";

import { PremiumShowcase } from "@/components/Premium/PremiumShowcase";

import { Services } from "@/components/Services/Services";

import { Marketing } from "@/components/Marketing/Marketing";

import { CaseStudies } from "@/components/CaseStudies/CaseStudies";

import { IndustriesSection } from "@/components/Premium/IndustriesSection";

import { TestimonialsSection } from "@/components/Premium/TestimonialsSection";

import { Process } from "@/components/Process/Process";

import { Technology } from "@/components/Technology/Technology";

import { FinalCta } from "@/components/FinalCta/FinalCta";

import { ContactForm } from "@/components/ContactForm/ContactForm";

import Link from "next/link";

import { SITE } from "@/lib/site";



export default function Home() {

  return (

    <SiteShell>

      <StorySection />

      <PremiumStats />

      <CapabilitiesMarquee />

      <PremiumIntro />

      <FounderSection />

      <PremiumShowcase />

      <Services />

      <Marketing />

      <CaseStudies />

      <IndustriesSection />

      <TestimonialsSection />

      <Process />

      <Technology />

      <FinalCta />

      <section id="contact" className="border-t border-white/10 bg-zinc-950 py-24 lg:py-28">

        <div className="mx-auto max-w-xl px-5 lg:px-8">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Contact</p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Let&apos;s build something great</h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-400">

            Share your vision—we&apos;ll respond within one business day at{" "}

            <a href={`mailto:${SITE.email}`} className="text-white hover:text-[var(--brand-green)]">{SITE.email}</a>

            . Or use our{" "}

            <Link href="/contact" className="text-white underline-offset-2 hover:underline hover:text-[var(--brand-green)]">

              contact page

            </Link>

            .

          </p>

          <ContactForm className="mt-8 [&_.contact-field]:border-white/15 [&_.contact-field]:bg-white/5 [&_.contact-field]:text-white [&_.contact-field]:placeholder:text-zinc-500 [&_.contact-service-select]:text-zinc-900 [&_.contact-service-select]:bg-zinc-100" />

        </div>

      </section>

    </SiteShell>

  );

}


