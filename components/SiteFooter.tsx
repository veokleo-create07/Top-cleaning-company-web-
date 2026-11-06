import { siteCopy, type Locale } from "@/lib/site-copy";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].footer;

  return (
    <footer className="site-footer" aria-label={copy.label}>
      <div className="page-shell">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a className="site-footer__brand-name" href="#start">TopClean</a>
            <p className="site-footer__descriptor">{copy.descriptor}</p>
            <p className="site-footer__description">{copy.description}</p>
          </div>

          <nav className="site-footer__nav" aria-label={copy.navigationLabel}>
            <h2>{copy.navigationHeading}</h2>
            <ul>
              {copy.navigation.map((item) => (
                <li key={item.label}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </nav>

          <address className="site-footer__contact">
            <h2>{copy.contactHeading}</h2>
            <p>{copy.addressLineFirst}<br />{copy.addressLineSecond}</p>
            <a href="tel:+4917623483923">+49 176 23483923</a>
            <a href="mailto:info@topcleannord.de">info@topcleannord.de</a>
          </address>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">© 2026 TopClean Gebäudeservice</p>
          <nav className="site-footer__legal" aria-label={copy.legalLabel}>
            <a href="https://www.topcleannord.de/impressum/">{copy.imprint}</a>
            <a href="https://www.topcleannord.de/datenschutz">{copy.privacy}</a>
          </nav>
        </div>

        <p className="site-footer__wordmark" aria-hidden="true">TopClean</p>
      </div>
    </footer>
  );
}
