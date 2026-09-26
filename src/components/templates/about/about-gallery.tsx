import Image from "next/image";

import houseIcon from "@/assets/icons/h-icon.png";
import magicStickIcon from "@/assets/icons/Magic Stick.png";
import photoOne from "@/assets/images/img 01.png";
import photoTwo from "@/assets/images/img 02.png";
import photoThree from "@/assets/images/img 03.png";
import { FeatureBadge } from "@/components/ui/feature-badge";

import styles from "./about-gallery.module.scss";

const photos = [
  {
    src: photoTwo,
    alt: "نمای سردر اقامتگاه بوم‌گردی گیلمار در غروب",
    className: styles.photoTwo,
  },
  {
    src: photoOne,
    alt: "ایوان چوبی اقامتگاه در کنار تالاب",
    className: styles.photoOne,
  },
  {
    src: photoThree,
    alt: "مسیر چوبی منتهی به ساختمان اقامتگاه",
    className: styles.photoThree,
  },
];

export function AboutGallery() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.collage}>
        {photos.map((photo) => (
          <Image
            key={photo.src.src}
            src={photo.src}
            alt={photo.alt}
            sizes="452px"
            className={`${styles.photo} ${photo.className}`}
          />
        ))}

        <FeatureBadge
          label="اقامتگاه بوم‌گردی گیلمار"
          icon={houseIcon}
          className={`${styles.badge} ${styles.badgeOne}`}
        />
        <FeatureBadge
          label="تجربه اقامت اصیل شمال"
          icon={magicStickIcon}
          className={`${styles.badge} ${styles.badgeTwo}`}
        />

        <span aria-hidden className={`${styles.confetti} ${styles.confettiLilac}`} />
        <span aria-hidden className={`${styles.confetti} ${styles.confettiIndigo}`} />
        <span aria-hidden className={`${styles.confetti} ${styles.confettiRose}`} />
        <span aria-hidden className={`${styles.confetti} ${styles.confettiSky}`} />
      </div>
    </div>
  );
}
