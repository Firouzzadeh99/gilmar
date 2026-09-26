import Image from "next/image";
import type { ComponentProps } from "react";

import arrowIcon from "@/assets/icons/arroe.png";

import { BrandButton } from "../brand-button";
import styles from "./cta-button.module.scss";

type CtaButtonProps = ComponentProps<"button"> & {
  size?: "lg" | "sm";
};

export function CtaButton({
  size = "lg",
  className,
  children,
  ...props
}: CtaButtonProps) {
  return (
    <BrandButton
      className={[styles.cta, styles[size], className].filter(Boolean).join(" ")}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden className={styles.arrow}>
        <Image src={arrowIcon} alt="" width={18} height={14} />
      </span>
    </BrandButton>
  );
}
