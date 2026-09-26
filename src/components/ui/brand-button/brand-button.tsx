import type { ComponentProps } from "react";

import styles from "./brand-button.module.scss";

export function BrandButton({
  className,
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={[styles.button, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
