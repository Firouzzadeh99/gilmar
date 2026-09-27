import Image from "next/image";

import articleIcon from "@/assets/icons/Vector8.png";
import backdrop from "@/assets/images/bg-section-2.png";
import articleImage from "@/assets/images/frame9.png";
import { IconPill } from "@/components/ui/icon-pill";
import { Reveal } from "@/components/ui/reveal";

import { MagazineCard } from "./magazine-card";
import styles from "./magazine-section.module.scss";

const articles = [
  {
    id: "article-1",
    title: "۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    excerpt:
      "از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
  {
    id: "article-2",
    title: "۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    excerpt:
      "از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
  {
    id: "article-3",
    title: "۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    excerpt:
      "از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
] as const;

export function MagazineSection() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.header}>
        <Image src={backdrop} alt="" aria-hidden className={styles.backdrop} />

        <IconPill icon={articleIcon} iconSize={20} />

        <h2 className={styles.heading}>
          مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش
        </h2>

        <p className={styles.lede}>
          در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه
          اقامتی دلنشین را دنبال کنید.
        </p>
      </Reveal>

      <div className={styles.grid}>
        {articles.map((article, index) => (
          <Reveal key={article.id} delay={index * 100}>
            <MagazineCard
              image={articleImage}
              title={article.title}
              excerpt={article.excerpt}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
