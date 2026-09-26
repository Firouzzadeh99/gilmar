import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/templates/about";
import { GuidelinesSection } from "@/components/templates/guidelines";
import { Hero } from "@/components/templates/hero";
import { Reveal } from "@/components/ui/reveal";
import { ScrollFade } from "@/components/ui/scroll-fade";

import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <div aria-hidden className={`${styles.glow} ${styles.glowStart}`} />
      <div aria-hidden className={`${styles.glow} ${styles.glowEnd}`} />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-6 md:px-8 xl:px-20 xl:pt-10">
        <ScrollFade>
          <Reveal>
            <SiteHeader />
          </Reveal>
        </ScrollFade>
        <Hero />
        <AboutSection />
        <GuidelinesSection />
      </div>
    </main>
  );
}
