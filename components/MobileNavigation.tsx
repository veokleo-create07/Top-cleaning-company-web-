"use client";

import { useRef, type MouseEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

type MobileNavigationProps = {
  label: string;
  openLabel: string;
  menuLabel: string;
  quoteLabel: string;
  links: { href: string; label: string }[];
};

export function MobileNavigation({ label, openLabel, menuLabel, quoteLabel, links }: MobileNavigationProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  function closeAfterNavigation(event: MouseEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("a")) menuRef.current?.removeAttribute("open");
  }

  return (
    <details className="mobile-nav" ref={menuRef}>
      <summary aria-label={openLabel}>
        <span className="mobile-nav__label">{menuLabel}</span>
        <span className="mobile-nav__icon" aria-hidden="true"><i /><i /></span>
      </summary>
      <nav className="mobile-nav__panel" aria-label={label} onClick={closeAfterNavigation}>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>{link.label}</Link>
        ))}
        <Button href="#kontakt">{quoteLabel}</Button>
      </nav>
    </details>
  );
}
