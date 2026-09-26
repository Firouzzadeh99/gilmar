import Image from "next/image";

import sparkleIcon from "@/assets/icons/Vector2.png";
import backdrop from "@/assets/images/bg-section-2.png";
import { IconPill } from "@/components/ui/icon-pill";

import styles from "./amenities-intro.module.scss";

export function AmenitiesIntro() {
  return (
    <div className={styles.intro}>
      <Image src={backdrop} alt="" aria-hidden className={styles.backdrop} />

      <IconPill icon={sparkleIcon} iconSize={20} />

      <h2 className={styles.heading}>
        خدمات رفاهی گیلمار برای اقامتی دلنشین
      </h2>

      <p className={styles.body}>
        در گیلمار، آرامش طبیعت را در کنار خدمات رفاهی کامل تجربه می‌کنید؛ فضایی
        دنج و صمیمی که برای ساختن لحظاتی آرام، خوش و به‌یادماندنی آماده شده است.
      </p>
    </div>
  );
}
