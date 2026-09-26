"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import packageThree from "@/assets/images/package3 2.png";
import packageFour from "@/assets/images/package4 2.png";
import patternMask from "@/assets/images/pattern 1.png";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./packages-slider.module.scss";

const slides = [
  { id: "pkg-1", src: packageThree },
  { id: "pkg-2", src: packageFour },
  { id: "pkg-3", src: packageThree },
  { id: "pkg-4", src: packageFour },
];

const maskStyle = {
  "--pkg-mask": `url("${patternMask.src}")`,
} as CSSProperties;

export function PackagesSlider() {
  return (
    <div className={styles.slider} style={maskStyle}>
      <Swiper
        className={styles.swiper}
        modules={[Pagination]}
        dir="ltr"
        loop={slides.length > 1}
        grabCursor
        slidesPerView={1}
        speed={650}
        pagination={{
          el: `.${styles.dots}`,
          clickable: true,
          bulletClass: styles.dot,
          bulletActiveClass: styles.dotActive,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div className={styles.frame}>
              <Image
                src={slide.src}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 620px"
                className={styles.photo}
                priority={slide.id === "pkg-1"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Outside the masked track so it sits in the white top-left cutout. */}
      <p className={styles.caption}>تجربه‌ی اقامتی اصیل در دل طبیعت شمال</p>

      <div className={styles.dots} />
    </div>
  );
}
