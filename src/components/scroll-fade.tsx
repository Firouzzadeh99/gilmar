"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ScrollFade({
  distance = 160,
  children,
}: {
  distance?: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const progress = Math.min(window.scrollY / distance, 1);
      el.style.opacity = String(1 - progress);
      el.style.transform = `translate3d(0, ${-progress * 20}px, 0)`;
      // Once it is gone, stop it swallowing clicks meant for the page.
      el.style.visibility = progress === 1 ? "hidden" : "";
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [distance]);

  return <div ref={ref}>{children}</div>;
}
