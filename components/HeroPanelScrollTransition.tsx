"use client";

import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

type HeroPanelScrollTransitionProps = {
  hero: ReactNode;
  introduction: ReactNode;
};

export function HeroPanelScrollTransition({ hero, introduction }: HeroPanelScrollTransitionProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const introductionRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    const heroElement = heroRef.current;
    const introductionElement = introductionRef.current;
    const panel = introductionElement?.querySelector<HTMLElement>("#company-feature-panel");

    if (!root || !heroElement || !introductionElement || !panel) return;

    const media = gsap.matchMedia();
    const addTransition = (compact: boolean) => {
      const panelOffset = () => Math.min(window.innerHeight * (compact ? 0.12 : 0.18), compact ? 96 : 180);
      let orientationTimer: number | undefined;
      const syncCompactPanelHeight = () => {
        if (!compact) return;
        panel.style.minHeight = `${heroElement.getBoundingClientRect().height}px`;
      };
      const handleOrientationChange = () => {
        window.clearTimeout(orientationTimer);
        orientationTimer = window.setTimeout(() => {
          syncCompactPanelHeight();
          ScrollTrigger.refresh();
        }, 200);
      };
      const panelTravel = () => {
        const currentY = Number(gsap.getProperty(introductionElement, "y")) || 0;
        return Math.max(1, panel.getBoundingClientRect().top - heroElement.getBoundingClientRect().top - currentY);
      };

      syncCompactPanelHeight();
      root.classList.add("hero-panel-transition--active");
      gsap.fromTo(
        introductionElement,
        { y: panelOffset },
        {
          y: 0,
          immediateRender: false,
          ease: "none",
          scrollTrigger: {
            trigger: heroElement,
            start: "top top",
            end: () => `+=${panelTravel()}`,
            pin: heroElement,
            pinSpacing: false,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        },
      );

      if (compact) window.addEventListener("orientationchange", handleOrientationChange);
      return () => {
        if (compact) window.removeEventListener("orientationchange", handleOrientationChange);
        window.clearTimeout(orientationTimer);
        panel.style.removeProperty("min-height");
        root.classList.remove("hero-panel-transition--active");
      };
    };

    media.add("(min-width: 861px) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => addTransition(false));
    media.add("(max-width: 860px) and (prefers-reduced-motion: no-preference), (pointer: coarse) and (prefers-reduced-motion: no-preference)", () => addTransition(true));

    return () => {
      media.revert();
      introductionElement.removeAttribute("style");
    };
  }, []);

  return (
    <div className="hero-panel-transition" ref={rootRef}>
      <div className="hero-panel-transition__hero" ref={heroRef}>
        {hero}
      </div>
      <div className="hero-panel-transition__section" ref={introductionRef}>
        {introduction}
      </div>
    </div>
  );
}
