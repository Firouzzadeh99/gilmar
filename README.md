# Gilmar

پروژه [Next.js 16](https://nextjs.org) با App Router، TypeScript، Tailwind CSS v4 و Sass.

## شروع

```bash
npm i
npm run dev
```

سپس [http://localhost:3000](http://localhost:3000) را باز کنید.

## اسکریپت‌ها

| دستور               | کار                          |
| ------------------- | ---------------------------- |
| `npm run dev`       | اجرای سرور توسعه (Turbopack) |
| `npm run build`     | بیلد پروداکشن                |
| `npm start`         | اجرای بیلد پروداکشن          |
| `npm run lint`      | اجرای ESLint                 |
| `npm run typecheck` | بررسی تایپ‌ها بدون خروجی     |

## ساختار

```
src/
├── app/                  # App Router
│   ├── layout.tsx
│   └── page.tsx
├── assets/
│   ├── fonts/            # فونت محلی + تعریف next/font
│   ├── icons/
│   └── images/
├── components/
│   ├── ui/               # المان‌های پایه و قابل استفاده در همه‌جا
│   │   ├── brand-button/
│   │   ├── cta-button/
│   │   ├── feature-badge/
│   │   └── scroll-fade/
│   ├── layout/           # چیدمان کلی صفحه
│   │   └── site-header/
│   └── templates/        # سکشن‌های صفحه‌ی اصلی
│       ├── hero/
│       └── about/
└── styles/
    ├── globals.scss      # ورودی Tailwind + توکن‌ها + استایل‌های پایه
    └── abstracts/        # متغیرها و میکسین‌های Sass
        ├── _index.scss
        ├── _mixins.scss
        └── _variables.scss
```

هر کامپوننت یک فولدر است و فایل استایلش (`*.module.scss`) کنار خودش می‌نشیند.
`index.ts` هر فولدر فقط خروجی عمومی را re-export می‌کند، پس ایمپورت‌ها کوتاه
می‌مانند: `@/components/templates/about`. سکشن‌های بزرگ‌تر به قطعه‌های کوچک‌تر
شکسته می‌شوند (مثل `about-intro` و `about-gallery` داخل `templates/about`).

## استایل‌دهی

`src/styles/abstracts` روی `loadPaths` ست شده (در `next.config.ts`)، پس در هر فایل
SCSS می‌توانید بدون مسیر نسبی بنویسید:

```scss
@use "abstracts" as *;

.card {
  @include respond-to("md") {
    padding: 2rem;
  }
}
```

برای استفاده از `@apply` یا `theme()` داخل یک CSS Module باید اول تم Tailwind را
`@reference` کنید، چون هر ماژول جدا کامپایل می‌شود:

```scss
@reference "../styles/globals.scss";

.title {
  @apply text-2xl font-bold;
}
```

توکن‌های مشترک بین Sass و Tailwind در `_variables.scss` تعریف و در بلوک `@theme`
داخل `globals.scss` به Tailwind پاس داده می‌شوند.

## فونت

فونت `Abar Mid FaNum` با `next/font/local` در `src/assets/fonts/index.ts` تعریف شده و
از طریق کلاس `abar.variable` روی تگ `<html>` به‌صورت متغیر `--font-abar` در دسترس
است. این متغیر در `globals.scss` به `--font-sans` تیلویند وصل شده، پس کلاس
`font-sans` (و فونت پیش‌فرض `body`) همین فونت را می‌دهد.

فقط `woff2` خانواده‌ی Mid با وزن‌های ۴۰۰، ۶۰۰، ۷۰۰، ۸۰۰ و ۹۰۰ نگه داشته شده.
آرشیو کامل فونت (شامل خانواده‌های Low و High و فرمت‌های otf/ttf) در
`D:\postinst\Abar FaNum.rar` است.

## نکته‌ها

- زبان و جهت صفحه در `src/app/layout.tsx` روی `fa` و `rtl` است.
- مسیر `@/*` به `src/*` اشاره می‌کند.
