"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import quoteIcon from "@/assets/icons/faq-icon.png";
import chatIcon from "@/assets/icons/Vector12.png";
import reviewerOne from "@/assets/images/Reviewer Image 1.png";
import reviewerTwo from "@/assets/images/Reviewer Image-1 1.png";
import reviewerThree from "@/assets/images/Reviewer Image-2 1.png";
import reviewerFour from "@/assets/images/Reviewer Image-3 1.png";
import mapBackdrop from "@/assets/images/Vector-bg12.png";
import { IconPill } from "@/components/ui/icon-pill";
import { Reveal } from "@/components/ui/reveal";

import "swiper/css";
import styles from "./guests-section.module.scss";

type Guest = {
  id: string;
  image: StaticImageData;
};

const portraits = [
  reviewerOne,
  reviewerTwo,
  reviewerThree,
  reviewerFour,
] as const;

const guests: Guest[] = Array.from({ length: 5 }, (_, index) => ({
  id: `guest-${index + 1}`,
  image: portraits[index % portraits.length],
}));

const satellites = [
  { guestIndex: 0, className: styles.slotA },
  { guestIndex: 1, className: styles.slotB },
  { guestIndex: 2, className: styles.slotC },
  { guestIndex: 3, className: styles.slotD },
  { guestIndex: 4, className: styles.slotE },
  { guestIndex: 0, className: styles.slotF },
  { guestIndex: 2, className: styles.slotG },
] as const;

const quote =
  "اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.";

export function GuestsSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState(1);

  const goTo = (index: number) => {
    setActive(index);
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <section className={styles.section}>
      <Reveal className={styles.header}>
        <IconPill icon={chatIcon} iconSize={20} />

        <h2 className={styles.heading}>گیلمار از نگاه مهمانان</h2>

        <p className={styles.lede}>
          تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است.
        </p>
      </Reveal>

      <div className={styles.stage}>
        <Image
          src={mapBackdrop}
          alt=""
          aria-hidden
          className={styles.map}
          sizes="(max-width: 1280px) 100vw, 1169px"
        />

        {satellites.map((slot) => {
          const guest = guests[slot.guestIndex];
          const isActive = slot.guestIndex === active;

          return (
            <button
              key={slot.className}
              type="button"
              aria-label={`نظر مهمان ${slot.guestIndex + 1}`}
              aria-pressed={isActive}
              className={`${styles.satellite} ${slot.className}`}
              onClick={() => goTo(slot.guestIndex)}
            >
              <Image
                src={guest.image}
                alt=""
                width={60}
                height={60}
                className={styles.satellitePhoto}
              />
            </button>
          );
        })}

        <div className={styles.stack}>
          <div className={styles.activeAvatar} aria-hidden>
            <Image
              src={(guests[active] ?? guests[0]).image}
              alt=""
              width={100}
              height={100}
              className={styles.activePhoto}
            />
          </div>

          <Swiper
            className={styles.swiper}
            dir="ltr"
            loop
            grabCursor
            slidesPerView={1}
            speed={550}
            initialSlide={1}
            resistanceRatio={0.65}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.slideToLoop(1, 0);
            }}
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
          >
            {guests.map((guest) => (
              <SwiperSlide key={guest.id} className={styles.slide}>
                <article className={styles.card}>
                  <div className={styles.quotes} aria-hidden>
                    <Image
                      src={quoteIcon}
                      alt=""
                      width={20}
                      height={20}
                      className={styles.quoteMark}
                    />
                    <Image
                      src={quoteIcon}
                      alt=""
                      width={20}
                      height={20}
                      className={styles.quoteMark}
                    />
                  </div>

                  <p className={styles.quote}>{quote}</p>

                  <div className={styles.meta}>
                    <p className={styles.name}>احسان عبدی پور</p>
                    <p className={styles.role}>مهمان</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.dots} role="tablist" aria-label="نظرات مهمانان">
            {guests.map((guest, index) => (
              <button
                key={guest.id}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`اسلاید ${index + 1}`}
                className={`${styles.dot} ${
                  index === active ? styles.dotActive : ""
                }`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
