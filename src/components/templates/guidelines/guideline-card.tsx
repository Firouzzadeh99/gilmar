import Image, { type StaticImageData } from "next/image";

import styles from "./guideline-card.module.scss";

export type GuidelineCardProps = {
  title: string;
  body: string;
  illustration: StaticImageData;
  /** Picks the panel tilt and the confetti placed around it. */
  variant: "one" | "two" | "three";
};

export function GuidelineCard({
  title,
  body,
  illustration,
  variant,
}: GuidelineCardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.artwork}>
        {/* Two stacked sheets: the back one sits a few pixels lower so the
            bottom edge reads as a double layer. */}
        <span aria-hidden className={`${styles.panel} ${styles.panelBack}`} />
        <span aria-hidden className={`${styles.panel} ${styles.panelFront}`} />
        <Image
          src={illustration}
          alt=""
          aria-hidden
          className={styles.illustration}
        />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>

      <span aria-hidden className={`${styles.confetti} ${styles.confettiFirst}`} />
      <span
        aria-hidden
        className={`${styles.confetti} ${styles.confettiSecond}`}
      />
    </div>
  );
}
