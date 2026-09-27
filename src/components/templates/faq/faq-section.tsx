import Image from "next/image";

import questionIcon from "@/assets/icons/Vector10.png";
import backdrop from "@/assets/images/bg-section-2.png";
import faqArt from "@/assets/images/Image.png";
import { IconPill } from "@/components/ui/icon-pill";
import { Reveal } from "@/components/ui/reveal";

import { FaqAccordion, type FaqItem } from "./faq-accordion";
import styles from "./faq-section.module.scss";

const question = "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!";
const answer =
  "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر، قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.";

const faqs: FaqItem[] = Array.from({ length: 5 }, (_, index) => ({
  id: `faq-${index + 1}`,
  question,
  answer,
}));

export function FaqSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.introSlot}>
          <div className={styles.intro}>
            <Image
              src={backdrop}
              alt=""
              aria-hidden
              className={styles.backdrop}
            />

            <IconPill icon={questionIcon} iconSize={20} />

            <h2 className={styles.heading}>سوالات متداول مهمانان گیلمار</h2>

            <p className={styles.lede}>
              پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا
              پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید.
            </p>

            <Image
              src={faqArt}
              alt=""
              aria-hidden
              sizes="(max-width: 1280px) 70vw, 420px"
              className={styles.art}
            />
          </div>
        </Reveal>

        <Reveal delay={160} className={styles.listSlot}>
          <FaqAccordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
