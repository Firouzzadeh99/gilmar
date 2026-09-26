"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import styles from "./scroll-fade.module.scss";

/**
 * Sticky wrapper that fades its content out once the page has scrolled past
 * `threshold` going down, and brings it back as soon as the user scrolls up.
 */
export function ScrollFade({
  threshold = 150,
  children,
}: {
  threshold?: number;
  children: ReactNode;
}) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let frame = 0;
    lastY.current = window.scrollY;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY.current;

      // Ignore sub-pixel jitter so trackpads don't flicker the header.
      if (Math.abs(delta) < 4) return;

      setHidden(delta > 0 && y > threshold);
      lastY.current = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return (
    <div className={styles.wrapper} data-hidden={hidden ? "" : undefined}>
      {children}
    </div>
  );
}
