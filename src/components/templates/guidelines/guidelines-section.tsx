import Image from "next/image";

import boltIcon from "@/assets/icons/Vector1.png";
import binocularsArt from "@/assets/icons/Image2.png";
import tentArt from "@/assets/icons/Image1.png";
import vanArt from "@/assets/icons/image3.png";
import backdrop from "@/assets/images/bg-section-2.png";
import { IconPill } from "@/components/ui/icon-pill";
import { Reveal } from "@/components/ui/reveal";

import { GuidelineCard, type GuidelineCardProps } from "./guideline-card";
import styles from "./guidelines-section.module.scss";

// Ordered right to left, the way the row reads.
const guidelines: GuidelineCardProps[] = [
  {
    variant: "one",
    illustration: tentArt,
    title: "مراقبت از وسایل اقامتگاه",
    body: "مهمانان عزیز مسئول نگهداری از تجهیزات و وسایل داخل اقامتگاه در طول مدت اقامت هستند.",
  },
  {
    variant: "two",
    illustration: binocularsArt,
    title: "حفظ آرامش اقامتگاه",
    body: "برای حفظ فضای آرام و دلنشین گیلمار، لطفاً از ایجاد سر‌وصدای زیاد به‌ویژه در ساعات شب خودداری کنید.",
  },
  {
    variant: "three",
    illustration: vanArt,
    title: "حفظ طبیعت و محیط زیست",
    body: "گیلمار در دل طبیعت قرار دارد؛ لطفاً در حفظ محیط‌زیست، فضای سبز و منابع طبیعی همراه ما باشید.",
  },
];

export function GuidelinesSection() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.header}>
        <IconPill icon={boltIcon} iconSize={20} />

        <h2 className={styles.heading}>
          همراهی برای حفظ آرامش و طبیعت گیلمار
        </h2>

        <p className={styles.lede}>
          برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین
          اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید.
        </p>
      </Reveal>

      <div className={styles.cards}>
        <Image src={backdrop} alt="" aria-hidden className={styles.backdrop} />

        {guidelines.map((guideline, index) => (
          <Reveal key={guideline.variant} delay={index * 140}>
            <GuidelineCard {...guideline} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
