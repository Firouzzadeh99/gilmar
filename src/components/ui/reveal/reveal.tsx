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
      // Start a little early so the soft rise is underway before the block
      // sits fully in the viewport.
      { threshold: 0.04, rootMargin: "0px 0px 10% 0px" },
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
