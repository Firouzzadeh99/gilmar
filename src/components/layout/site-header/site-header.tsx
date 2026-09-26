import Image from "next/image";
import Link from "next/link";

import userIcon from "@/assets/icons/user-icon.png";
import logo from "@/assets/images/logo.png";

import { BrandButton } from "@/components/ui/brand-button";

import styles from "./site-header.module.scss";

const navItems = [
  { label: "خانه", href: "/" },
  { label: "سوئیت‌ها و اقامت", href: "/suites" },
  { label: "درباره گیلمار", href: "/about" },
  { label: "راهنمای مهمان‌ها", href: "/guide" },
  { label: "مجله گیلمار", href: "/magazine" },
  { label: "تماس با ما", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className="shrink-0">
        <Image
          src={logo}
          alt="اقامتگاه بوم‌گردی گیلمار"
          priority
          className="h-[38px] w-[108px] xl:h-[53px] xl:w-[150px]"
        />
      </Link>

      <nav className="hidden items-center gap-8 xl:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={styles.navLink}>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Visibility lives on wrappers: a module class on the button itself
          would outrank Tailwind's `hidden`, since CSS modules are unlayered. */}
      <div className="hidden xl:block">
        <BrandButton className="h-[52px] w-[154px] justify-center gap-2 text-sm leading-8 font-extrabold">
          <Image src={userIcon} alt="" width={20} height={20} aria-hidden />
          <span>ورود یا ثبت‌نام</span>
        </BrandButton>
      </div>

      <div className="flex items-center gap-2 xl:hidden">
        <BrandButton aria-label="ورود یا ثبت‌نام" className={styles.iconButton}>
          <Image src={userIcon} alt="" width={20} height={20} aria-hidden />
        </BrandButton>
        <button
          type="button"
          aria-label="باز کردن منو"
          className={styles.menuButton}
        >
          <span aria-hidden className={styles.menuIcon} />
        </button>
      </div>
    </header>
  );
}
