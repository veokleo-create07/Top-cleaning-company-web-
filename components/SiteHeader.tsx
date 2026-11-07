import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { MobileNavigation } from "@/components/MobileNavigation";
import { siteCopy, type Locale } from "@/lib/site-copy";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].navigation;
  const links = [
    { href: "#leistungen", label: copy.services },
    { href: "#unternehmen", label: copy.company },
    { href: "#kundenstimmen", label: copy.references },
    { href: "#kontakt", label: copy.contact },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <Link className="wordmark" href="#start" aria-label={locale === "en" ? "TopClean Building Services – Home" : "TopClean Gebäudeservice – Startseite"}>
          <Image
            src="/images/topclean-logo.png"
            alt=""
            width={920}
            height={593}
            priority
            className="wordmark__logo"
          />
        </Link>

        <nav className="desktop-nav" aria-label={copy.mainLabel}>
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <LanguageSwitch locale={locale} />

        <Button href="#kontakt" className="header-cta">
          <span className="header-cta__desktop">{copy.quote}</span>
          <span className="header-cta__mobile">{copy.quoteShort}</span>
        </Button>

        <MobileNavigation
          label={copy.mobileLabel}
          openLabel={copy.openMenu}
          menuLabel={copy.menu}
          quoteLabel={copy.quote}
          links={links}
        />
      </div>
    </header>
  );
}
