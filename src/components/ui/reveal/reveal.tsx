"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import styles from "./reveal.module.scss";

type RevealProps = {
  /** Stagger, in milliseconds, against the other reveals around it. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({ delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        // One-shot: the element should not fade back out on the way up.
        observer.disconnect();
      },
      // Waiting for a slice of the element keeps tall blocks from firing while
      // they are still a sliver at the bottom of the screen.
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible ? "" : undefined}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={[styles.reveal, className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
