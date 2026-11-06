import Link from "next/link";
import { Button } from "@/components/Button";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#unternehmen", label: "Unternehmen" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <Link className="wordmark" href="#start" aria-label="TopClean Gebäudeservice – Startseite">
          <span className="wordmark__name">TopClean</span>
          <span className="wordmark__descriptor">Gebäudeservice</span>
        </Link>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="#kontakt" className="header-cta">
          Angebot anfragen
        </Button>

        <details className="mobile-nav">
          <summary aria-label="Menü öffnen">
            <span className="mobile-nav__label">Menü</span>
            <span className="mobile-nav__icon" aria-hidden="true"><i /><i /></span>
          </summary>
          <nav className="mobile-nav__panel" aria-label="Mobile Navigation">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Button href="#kontakt">Angebot anfragen</Button>
          </nav>
        </details>
      </div>
    </header>
  );
}
