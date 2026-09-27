"use client";

import { useId, useState } from "react";

import styles from "./faq-accordion.module.scss";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <ul className={styles.list}>
      {items.map((item) => {
        const open = item.id === openId;
        const panelId = `${baseId}-${item.id}`;

        return (
          <li
            key={item.id}
            className={styles.item}
            data-open={open ? "" : undefined}
          >
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span className={styles.question}>{item.question}</span>
              <span aria-hidden className={styles.toggle}>
                <span className={styles.bar} />
                <span className={`${styles.bar} ${styles.barVertical}`} />
              </span>
            </button>

            <div id={panelId} role="region" className={styles.panel}>
              <div className={styles.panelInner}>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
