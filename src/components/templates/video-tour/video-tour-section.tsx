import Image from "next/image";
import type { CSSProperties } from "react";

import playIcon from "@/assets/icons/play.svg";
import compassArt from "@/assets/icons/shape 1.png";
import videoIcon from "@/assets/icons/video.png";
import backdrop from "@/assets/images/bg-section-2.png";
import tourPhoto from "@/assets/images/Step section.png";
import mapMask from "@/assets/images/Subtract.png";
import { CtaButton } from "@/components/ui/cta-button";
import { IconPill } from "@/components/ui/icon-pill";
import { Reveal } from "@/components/ui/reveal";

import styles from "./video-tour-section.module.scss";

const maskStyle = {
  "--map-mask": `url("${mapMask.src}")`,
} as CSSProperties;

export function VideoTourSection() {
  return (
    <section className={styles.section}>
      <div className={styles.stage}>
        <Reveal className={styles.copySlot}>
          <div className={styles.copy}>
            <Image
              src={backdrop}
              alt=""
              aria-hidden
              className={styles.backdrop}
            />

            <IconPill icon={videoIcon} iconSize={20} />

            <h2 className={styles.heading}>تور ویدیویی اقامتگاه گیلمار</h2>

            <p className={styles.body}>
              در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه
              گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال‌وهوای دلنشین آن را
              تجربه کنید.
            </p>

            <div className={styles.action}>
              <CtaButton size="sm">اقامت در گیلمار</CtaButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160} className={styles.mediaSlot}>
          <div className={styles.media}>
            <div className={styles.photoFrame} style={maskStyle}>
              <img
                src={tourPhoto.src}
                alt="جنگل و پل سنگی اطراف اقامتگاه گیلمار"
                className={styles.photo}
              />
              <span aria-hidden className={styles.shade} />
            </div>

            <button
              type="button"
              aria-label="پخش تور ویدیویی"
              className={styles.play}
            >
              <span className={styles.playDisc}>
                <Image
                  src={playIcon}
                  alt=""
                  aria-hidden
                  width={21}
                  height={23}
                  className={styles.playIcon}
                />
              </span>
            </button>

            <Image
              src={compassArt}
              alt=""
              aria-hidden
              className={styles.compass}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
