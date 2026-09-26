import { Reveal } from "@/components/ui/reveal";

import { PackagesIntro } from "./packages-intro";
import { PackagesSlider } from "./packages-slider";
import styles from "./packages-section.module.scss";

export function PackagesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.introSlot}>
          <PackagesIntro />
        </Reveal>

        <Reveal delay={160} className={styles.mediaSlot}>
          <PackagesSlider />
        </Reveal>
      </div>
    </section>
  );
}
