import Image, { type StaticImageData } from "next/image";

import styles from "./room-card.module.scss";

export type RoomCardProps = {
  image: StaticImageData;
  title: string;
  price: string;
};

export function RoomCard({ image, title, price }: RoomCardProps) {
  return (
    <article className={styles.card}>
      <Image
        src={image}
        alt=""
        fill
        sizes="302px"
        className={styles.photo}
      />
      <span aria-hidden className={styles.shade} />
      <div className={styles.copy}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
      </div>
    </article>
  );
}
