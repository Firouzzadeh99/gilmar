import Image from "next/image";

import earthIcon from "@/assets/icons/Earth.png";
import backdrop from "@/assets/images/bg-section-2.png";
import { CtaButton } from "@/components/ui/cta-button";
import { IconPill } from "@/components/ui/icon-pill";

import styles from "./about-intro.module.scss";

export function AboutIntro() {
  return (
    <div className={styles.intro}>
      <Image src={backdrop} alt="" aria-hidden className={styles.backdrop} />

      <IconPill icon={earthIcon} />

      <h2 className={styles.heading}>
        گیلمار؛ آرامش ناب در آغوش طبیعت گیلان
      </h2>

      <p className={styles.body}>
        گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان
        لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور پرندگان
        بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی مناسب و
        انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی متفاوت برای
        سفر تبدیل کرده است.
      </p>

      <div className={styles.action}>
        <CtaButton size="sm">اقامت در گیلمار</CtaButton>
      </div>
    </div>
  );
}
