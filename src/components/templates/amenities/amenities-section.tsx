import { Reveal } from "@/components/ui/reveal";

import { AmenitiesIntro } from "./amenities-intro";
import { AmenitiesSlider } from "./amenities-slider";
import styles from "./amenities-section.module.scss";

export function AmenitiesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.introSlot}>
          <AmenitiesIntro />
        </Reveal>

        <Reveal delay={160} className={styles.sliderSlot}>
          <AmenitiesSlider />
        </Reveal>
      </div>
    </section>
  );
}
