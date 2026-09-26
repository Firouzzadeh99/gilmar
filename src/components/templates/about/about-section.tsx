import { Reveal } from "@/components/ui/reveal";

import { AboutGallery } from "./about-gallery";
import { AboutIntro } from "./about-intro";
import styles from "./about-section.module.scss";

export function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.introSlot}>
          <AboutIntro />
        </Reveal>

        <Reveal delay={160} className={styles.gallerySlot}>
          <AboutGallery />
        </Reveal>
      </div>
    </section>
  );
}
