import Image from "next/image";

import arrowIcon from "@/assets/icons/arroe.png";
import avatarOne from "@/assets/images/Image1.png";
import avatarTwo from "@/assets/images/Image2.png";
import avatarThree from "@/assets/images/Image3.png";
import heroBottom from "@/assets/images/hero-bottom.png";
import heroTop from "@/assets/images/hero-top.png";

import { BrandButton } from "./brand-button";
import styles from "./hero.module.scss";

const avatars = [avatarOne, avatarTwo, avatarThree];

export function Hero() {
  return (
    <section className="pt-10 xl:pt-[53px]">
      <h1
        style={{ animationDelay: "120ms" }}
        className="reveal text-center text-[28px] leading-[1.35] font-extrabold tracking-[-1px] text-ink md:text-[34px] xl:text-[40px] xl:leading-none xl:tracking-[-2.4px]"
      >
        اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
      </h1>

      <p
        style={{ animationDelay: "240ms" }}
        className="reveal mx-auto mt-5 max-w-[808px] text-center text-[13px] leading-7 font-semibold text-ink-muted xl:text-sm xl:leading-8"
      >
        اقامتگاه بومگردی گیلمار بزرگ‌ترین مجموعه اکولوژ شمال کشور دارای امکانات
        رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره میراث فرهنگی،
        صنایع دستی و گردشگری گیلان فعالیت دارد.
      </p>

      <div
        style={{ animationDelay: "360ms" }}
        className="reveal mt-3 flex justify-center"
      >
        <BrandButton className="h-[52px] w-[191px] justify-between ps-5 pe-[6px] text-sm font-semibold">
          <span>مهمان گیلمار شو</span>
          <span className={styles.arrowCircle}>
            <Image src={arrowIcon} alt="" width={18} height={14} aria-hidden />
          </span>
        </BrandButton>
      </div>

      <div style={{ animationDelay: "480ms" }} className="reveal relative mt-3">
        <div
          role="img"
          aria-label="نمای بیرونی اقامتگاه بوم‌گردی گیلمار در دل جنگل"
          className={styles.frame}
        >
          <Image
            src={heroBottom}
            alt=""
            aria-hidden
            priority
            sizes="(max-width: 1440px) 100vw, 1280px"
            className={styles.frameBottom}
          />
          <Image
            src={heroTop}
            alt=""
            aria-hidden
            priority
            sizes="(max-width: 1440px) 92vw, 1171px"
            className={styles.frameTop}
          />
          <span aria-hidden className={styles.grain} />
        </div>

        <div className={styles.badge}>
          <span className={styles.avatars}>
            {avatars.map((avatar, index) => (
              <Image
                key={avatar.src}
                src={avatar}
                alt=""
                width={26}
                height={26}
                aria-hidden
                className={styles.avatar}
                priority={index === 0}
              />
            ))}
          </span>
          <span>۱۲۰+ رزرو موفق</span>
        </div>

        <p className={styles.caption}>
          فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
        </p>
      </div>
    </section>
  );
}
