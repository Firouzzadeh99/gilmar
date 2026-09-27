import Image from "next/image";
import Link from "next/link";

import iconOne from "@/assets/icons/icon-1.png";
import iconTwo from "@/assets/icons/icon-2.png";
import iconThree from "@/assets/icons/icon-3.png";
import iconFour from "@/assets/icons/icon-4.png";
import logo from "@/assets/images/logo.png";
import mapImage from "@/assets/images/map.png";

import styles from "./site-footer.module.scss";

const exploreLinks = [
  { label: "سوئیت‌ها و اقامت", href: "/suites" },
  { label: "راهنمای مهمان‌ها", href: "/guide" },
  { label: "درباره گیلمار", href: "/about" },
  { label: "مجله گیلمار", href: "/magazine" },
];

const socials = [
  { id: "telegram", icon: iconOne, label: "تلگرام", href: "#" },
  { id: "youtube", icon: iconTwo, label: "یوتیوب", href: "#" },
  { id: "x", icon: iconThree, label: "ایکس", href: "#" },
  { id: "linkedin", icon: iconFour, label: "لینکدین", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.panel}>
        <div className={styles.brand}>
          <Image
            src={logo}
            alt="اقامتگاه بوم‌گردی گیلمار"
            width={169}
            height={53}
            className={styles.logo}
          />
          <p className={styles.about}>
            اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با امکانات
            رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز رسمی میراث فرهنگی
            گیلان فعالیت می‌کند.
          </p>
        </div>

        <div className={styles.middle}>
          <div className={`${styles.column} ${styles.explore}`}>
            <h3 className={styles.heading}>کاوش در گیلمار</h3>
            <ul className={styles.links}>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.column} ${styles.contactCol}`}>
            <h3 className={styles.heading}>راه‌های ارتباط با گیلمار</h3>
            <div className={styles.contact}>
              <p>تلفن پشتیبانی: ۰۱۳۳۴۷۷۵۴۰۰ - ۰۱۳۳۴۷۷۵۴۱۱</p>
              <p>ایمیل: Info@Gilmar-Gilan.Com</p>
              <p>
                موقعیت گیلمار: گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان
                کوزه‌گران، اقامتگاه گیلمار
              </p>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <Image
            src={mapImage}
            alt="موقعیت اقامتگاه گیلمار روی نقشه"
            fill
            sizes="364px"
            className={styles.mapPhoto}
          />
        </div>
      </div>

      <div className={styles.bar}>
        <p className={styles.copy}>
          © تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.
        </p>

        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.id}>
              <Link
                href={social.href}
                aria-label={social.label}
                className={styles.social}
              >
                <Image
                  src={social.icon}
                  alt=""
                  aria-hidden
                  width={20}
                  height={20}
                  className={styles.socialIcon}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
