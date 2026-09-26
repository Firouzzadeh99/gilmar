import Image, { type StaticImageData } from "next/image";

import iconContainer from "@/assets/icons/Icon Container.png";

import styles from "./icon-pill.module.scss";

type IconPillProps = {
  icon: StaticImageData;
  /** Intrinsic glyph size; omit to keep the asset's own dimensions. */
  iconSize?: number;
  className?: string;
};

export function IconPill({ icon, iconSize, className }: IconPillProps) {
  return (
    <span
      aria-hidden
      className={[styles.pill, className].filter(Boolean).join(" ")}
    >
      <Image src={iconContainer} alt="" className={styles.shell} />
      {iconSize != null ? (
        <Image
          src={icon}
          alt=""
          width={iconSize}
          height={iconSize}
          className={styles.glyph}
        />
      ) : (
        <Image src={icon} alt="" className={styles.glyph} />
      )}
    </span>
  );
}
