import Image, { type StaticImageData } from "next/image";

import styles from "./feature-badge.module.scss";

type FeatureBadgeProps = {
  label: string;
  icon: StaticImageData;
  className?: string;
};

export function FeatureBadge({ label, icon, className }: FeatureBadgeProps) {
  return (
    <div className={[styles.badge, className].filter(Boolean).join(" ")}>
      <span aria-hidden className={styles.icon}>
        <Image src={icon} alt="" className={styles.iconGlyph} />
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
