import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/templates/about";
import { AmenitiesSection } from "@/components/templates/amenities";
import { FaqSection } from "@/components/templates/faq";
import { GuestsSection } from "@/components/templates/guests";
import { GuidelinesSection } from "@/components/templates/guidelines";
import { Hero } from "@/components/templates/hero";
import { MagazineSection } from "@/components/templates/magazine";
import { PackagesSection } from "@/components/templates/packages";
import { RoomsSection } from "@/components/templates/rooms";
import { VideoTourSection } from "@/components/templates/video-tour";
import { PageZoom } from "@/components/ui/page-zoom";
import { Reveal } from "@/components/ui/reveal";
import { ScrollFade } from "@/components/ui/scroll-fade";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

import styles from "./page.module.scss";

export default function HomePage() {
  return (
    // Overflow stays visible so the amenities slider can bleed past the left
    // edge; the glow blobs are clipped inside their own wrapper instead.
    <main className="relative min-h-dvh">
      <SmoothScroll />
      <PageZoom />
      <div aria-hidden className={styles.glowLayer}>
        <div className={`${styles.glow} ${styles.glowStart}`} />
        <div className={`${styles.glow} ${styles.glowEnd}`} />
      </div>

      <div className={styles.shell}>
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
        <GuestsSection />
        <PackagesSection />
        <MagazineSection />
        <FaqSection />
        <Reveal>
          <SiteFooter />
        </Reveal>
      </div>
    </main>
  );
}
