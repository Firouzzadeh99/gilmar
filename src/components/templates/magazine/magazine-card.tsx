import Image, { type StaticImageData } from "next/image";

import styles from "./magazine-card.module.scss";

export type MagazineCardProps = {
  image: StaticImageData;
  title: string;
  excerpt: string;
};

export function MagazineCard({ image, title, excerpt }: MagazineCardProps) {
  return (
    <article className={styles.card}>
      <Image
        src={image}
        alt=""
        fill
        sizes="408px"
        className={styles.photo}
      />
      <span aria-hidden className={styles.shade} />
      <div className={styles.copy}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </article>
  );
}
