import localFont from "next/font/local";

export const abar = localFont({
  src: [
    {
      path: "./abar/AbarMidFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./abar/AbarMidFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./abar/AbarMidFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./abar/AbarMidFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./abar/AbarMidFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-abar",
  display: "swap",
  // With preload on, Next emits a <link rel="preload"> for every weight listed
  // above; off means the browser only fetches the weights a page actually uses.
  preload: false,
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});
