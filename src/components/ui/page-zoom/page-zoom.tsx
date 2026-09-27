"use client";

import { useEffect } from "react";

const DESIGN_WIDTH = 1440;
const DESKTOP_MIN = 1280;

/**
 * Publishes `--page-zoom` so the desktop shell can scale a fixed 1440 artboard
 * into narrower viewports. Uses `clientWidth` because `100vw` includes the
 * scrollbar and would overshoot, clipping the right edge.
 */
export function PageZoom() {
  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      const width = root.clientWidth;
      const zoom =
        width >= DESKTOP_MIN ? Math.min(1, width / DESIGN_WIDTH) : 1;
      root.style.setProperty("--page-zoom", String(zoom));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return null;
}
