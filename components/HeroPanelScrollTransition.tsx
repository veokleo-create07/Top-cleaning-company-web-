"use client";

import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    media.add(
      {
        desktop: "(min-width: 861px)",
        mobile: "(max-width: 860px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      ({ conditions }) => {
        const { desktop, motion } = conditions as { desktop: boolean; mobile: boolean; motion: boolean };
        if (!motion) return;

        const panelOffset = () => Math.min(window.innerHeight * (desktop ? 0.18 : 0.12), desktop ? 180 : 96);
        const panelTravel = () => {
          const currentY = Number(gsap.getProperty(introductionElement, "y")) || 0;
          return Math.max(1, panel.getBoundingClientRect().top - heroElement.getBoundingClientRect().top - currentY);
        };

        root.classList.add("hero-panel-transition--active");
        const context = gsap.context(() => {
          gsap.fromTo(
            introductionElement,
            { y: panelOffset },
            {
              y: 0,
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
        }, root);

        return () => {
          context.revert();
          root.classList.remove("hero-panel-transition--active");
        };
      },
    );

    return () => media.revert();
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
