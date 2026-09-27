"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import frameOne from "@/assets/images/frame1.png";
import frameTwo from "@/assets/images/frame2.png";
import frameThree from "@/assets/images/frame3.png";

import "swiper/css";
import styles from "./amenities-slider.module.scss";

type Slide = {
  src: StaticImageData;
  label: string;
  id: string;
};

const baseSlides: Omit<Slide, "id">[] = [
  { src: frameThree, label: "دوچرخه سواری" },
  { src: frameTwo, label: "قایق سواری" },
  { src: frameOne, label: "پرنده نگری" },
];

const slides: Slide[] = [...baseSlides, ...baseSlides].map((slide, index) => ({
  ...slide,
  id: `${slide.label}-${index}`,
}));

function ArrowGlyph() {
  return (
    <span aria-hidden className={styles.navFace}>
      <span className={styles.navDisc}>
        <svg
          className={styles.arrow}
          viewBox="0 0 24 24"
          width="12"
          height="12"
        >
          <path
            d="M5 12h12.5M13 5.5 19.5 12 13 18.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}

export function AmenitiesSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [hasNavigated, setHasNavigated] = useState(false);

  const markNavigated = () => setHasNavigated(true);

  return (
    <div className={styles.slider}>
      {hasNavigated ? (
        <button
          type="button"
          aria-label="اسلاید قبلی"
          className={`${styles.nav} ${styles.navPrev}`}
          onClick={() => {
            markNavigated();
            swiperRef.current?.slidePrev();
          }}
        >
          <ArrowGlyph />
        </button>
      ) : null}

      <Swiper
        className={styles.swiper}
        dir="ltr"
        loop
        grabCursor
        slidesPerView="auto"
        spaceBetween={16}
        centeredSlides
        initialSlide={1}
        speed={650}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.slideToLoop(1, 0);
        }}
        onSlideChange={(swiper) => {
          if (swiper.realIndex !== 1) markNavigated();
        }}
        onTouchStart={markNavigated}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <article className={styles.card}>
              <Image
                src={slide.src}
                alt=""
                fill
                sizes="(max-width: 768px) 230px, 288px"
                className={styles.photo}
                draggable={false}
              />
              <span aria-hidden className={styles.shade} />
              <h3 className={styles.label}>{slide.label}</h3>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="اسلاید بعدی"
        className={`${styles.nav} ${styles.navNext}`}
        onClick={() => {
          markNavigated();
          swiperRef.current?.slideNext();
        }}
      >
        <ArrowGlyph />
      </button>
    </div>
  );
}
