import { Hero } from "@/components/hero";
import { ScrollFade } from "@/components/scroll-fade";
import { SiteHeader } from "@/components/site-header";

import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <div aria-hidden className={`${styles.glow} ${styles.glowStart}`} />
      <div aria-hidden className={`${styles.glow} ${styles.glowEnd}`} />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-6 md:px-8 xl:px-20 xl:pt-10">
        <ScrollFade>
          <SiteHeader />
        </ScrollFade>
        <Hero />
      </div>
    </main>
  );
}
