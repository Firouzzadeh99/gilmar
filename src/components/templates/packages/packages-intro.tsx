import Image from "next/image";

import featureOne from "@/assets/icons/Image1.png";
import featureTwo from "@/assets/icons/Image2.png";
import featureThree from "@/assets/icons/image3.png";
import sparkleIcon from "@/assets/icons/Vector6.png";
import backdrop from "@/assets/images/bg-section-2.png";
import { CtaButton } from "@/components/ui/cta-button";
import { IconPill } from "@/components/ui/icon-pill";

import styles from "./packages-intro.module.scss";

const features = [
  { id: "forest", label: "تور جنگل‌نوردی", icon: featureOne },
  { id: "boat", label: "قایق‌سواری", icon: featureTwo },
  { id: "breakfast", label: "صبحانه", icon: featureThree },
  { id: "stay", label: "۱ شب اقامت", icon: featureOne },
] as const;

export function PackagesIntro() {
  return (
    <div className={styles.intro}>
      <Image src={backdrop} alt="" aria-hidden className={styles.backdrop} />

      <IconPill icon={sparkleIcon} iconSize={20} />

      <h2 className={styles.heading}>پکیج‌های ویژه اقامت در گیلمار</h2>

      <p className={styles.lede}>
        پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات هیجان‌انگیز
        در دل طبیعت است.
      </p>

      <h3 className={styles.packageTitle}>پکیج رمانتیک دو نفره</h3>

      <p className={styles.includes}>
        شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری
      </p>

      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature.id} className={styles.feature}>
            <Image
              src={feature.icon}
              alt=""
              aria-hidden
              width={48}
              height={48}
              className={styles.featureIcon}
            />
            <span className={styles.featureLabel}>{feature.label}</span>
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <p className={styles.price}>قیمت: ۲,۳۰۰,۰۰۰ تومان</p>
        <CtaButton size="sm" className={styles.book}>
          همین حالا رزرو کن
        </CtaButton>
      </div>
    </div>
  );
}
