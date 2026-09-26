import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

import iconContainer from "@/assets/icons/Icon Container.png";

import styles from "./icon-pill.module.scss";

type IconPillProps = {
  /** Raster glyph (PNG). Prefer `children` when the mark is an SVG. */
  icon?: StaticImageData;
  children?: ReactNode;
  /** Intrinsic glyph size for raster icons; omit to keep the asset's own size. */
  iconSize?: number;
  className?: string;
};

export function IconPill({
  icon,
  children,
  iconSize,
  className,
}: IconPillProps) {
  return (
    <span
      aria-hidden
      className={[styles.pill, className].filter(Boolean).join(" ")}
    >
      <Image src={iconContainer} alt="" className={styles.shell} />
      {children ? (
        <span className={styles.glyph}>{children}</span>
      ) : icon != null ? (
        iconSize != null ? (
          <Image
            src={icon}
            alt=""
            width={iconSize}
            height={iconSize}
            className={styles.glyph}
          />
        ) : (
          <Image src={icon} alt="" className={styles.glyph} />
        )
      ) : null}
    </span>
  );
}
