import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/templates/about";
import { AmenitiesSection } from "@/components/templates/amenities";
import { GuidelinesSection } from "@/components/templates/guidelines";
import { Hero } from "@/components/templates/hero";
import { PackagesSection } from "@/components/templates/packages";
import { RoomsSection } from "@/components/templates/rooms";
import { VideoTourSection } from "@/components/templates/video-tour";
import { Reveal } from "@/components/ui/reveal";
import { ScrollFade } from "@/components/ui/scroll-fade";

import styles from "./page.module.scss";

export default function HomePage() {
  return (
    // Overflow stays visible so the amenities slider can bleed past the left
    // edge; the glow blobs are clipped inside their own wrapper instead.
    <main className="relative min-h-dvh">
      <div aria-hidden className={styles.glowLayer}>
        <div className={`${styles.glow} ${styles.glowStart}`} />
        <div className={`${styles.glow} ${styles.glowEnd}`} />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-6 md:px-8 xl:px-20 xl:pt-10">
        <ScrollFade>
          <Reveal>
            <SiteHeader />
          </Reveal>
        </ScrollFade>
        <Hero />
        <AboutSection />
        <GuidelinesSection />
        <AmenitiesSection />
        <RoomsSection />
        <VideoTourSection />
        <PackagesSection />
      </div>
    </main>
  );
}
