import Image from "next/image";

import backdrop from "@/assets/images/bg-section-2.png";
import roomImageA from "@/assets/images/section4.png";
import roomImageB from "@/assets/images/section5.png";
import { IconPill } from "@/components/ui/icon-pill";
import { Reveal } from "@/components/ui/reveal";

import { RoomCard } from "./room-card";
import { RoomIcon } from "./room-icon";
import styles from "./rooms-section.module.scss";

const rooms = [
  {
    id: "room-1",
    image: roomImageA,
    title: "خانه‌ی چوبی گیلمار",
    price: "هر شب اقامت از ۱,۳۰۰,۰۰۰ تومان",
  },
  {
    id: "room-2",
    image: roomImageB,
    title: "خانه‌ی چوبی گیلمار",
    price: "هر شب اقامت از ۱,۳۰۰,۰۰۰ تومان",
  },
  {
    id: "room-3",
    image: roomImageA,
    title: "خانه‌ی چوبی گیلمار",
    price: "هر شب اقامت از ۱,۳۰۰,۰۰۰ تومان",
  },
  {
    id: "room-4",
    image: roomImageB,
    title: "خانه‌ی چوبی گیلمار",
    price: "هر شب اقامت از ۱,۳۰۰,۰۰۰ تومان",
  },
];

export function RoomsSection() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.header}>
        <Image src={backdrop} alt="" aria-hidden className={styles.backdrop} />

        <IconPill>
          <RoomIcon size={24} />
        </IconPill>

        <h2 className={styles.heading}>انواع اتاق‌های اقامتگاه گیلمار</h2>

        <p className={styles.lede}>
          اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل
          طبیعت آماده شده‌اند.
        </p>
      </Reveal>

      <div className={styles.grid}>
        {rooms.map((room, index) => (
          <Reveal key={room.id} delay={index * 100}>
            <RoomCard image={room.image} title={room.title} price={room.price} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
