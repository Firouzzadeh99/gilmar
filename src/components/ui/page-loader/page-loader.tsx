import Image from "next/image";

import mark from "@/assets/icons/Image1.png";

import styles from "./page-loader.module.scss";

/** UI used by App Router `loading.tsx` while the route segment loads. */
export function RouteLoader() {
  return (
    <div className={styles.loader} aria-busy aria-live="polite">
      <div className={styles.inner}>
        <Image
          src={mark}
          alt=""
          width={72}
          height={72}
          priority
          className={styles.mark}
        />

        <div className={styles.track} role="progressbar" aria-label="در حال بارگذاری">
          <span className={styles.bar} />
        </div>
      </div>
    </div>
  );
}
