import Image from "next/image";
import { Button } from "@/components/Button";
import { CompanyIntroduction } from "@/components/CompanyIntroduction";
import { HeroPanelScrollTransition } from "@/components/HeroPanelScrollTransition";
import { SiteHeader } from "@/components/SiteHeader";
import { ServicesSection } from "@/components/ServicesSection";
import { CustomerTestimonials } from "@/components/CustomerTestimonials";
import { FAQSection } from "@/components/FAQSection";
import { ContactQuoteSection } from "@/components/ContactQuoteSection";
import { SiteFooter } from "@/components/SiteFooter";
import { siteCopy, type Locale } from "@/lib/site-copy";

type HomePageProps = { locale: Locale };

export function HomePage({ locale }: HomePageProps) {
  const copy = siteCopy[locale];

  return (
    <main id="start">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "TopClean Gebäudeservice",
            telephone: "+49 176 23483923",
            email: "info@topcleannord.de",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Schwartauer Allee 99",
              postalCode: "23554",
              addressLocality: "Lübeck",
              addressCountry: "DE",
            },
            areaServed: { "@type": "AdministrativeArea", name: "Lübeck und Umgebung" },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader locale={locale} />
      <HeroPanelScrollTransition
        hero={
          <section className="hero" aria-labelledby="hero-heading">
            <figure className="hero__visual">
              <Image
                src="/images/hero-office-glass-cleaning.jpg"
                alt={copy.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 760px) calc(100vw - 24px), calc(100vw - 24px)"
                className="hero__image"
              />
            </figure>
            <p className="hero__display" aria-hidden="true">TOP CLEAN</p>
            <div className="hero__shade" aria-hidden="true" />
            <div className="hero__content">
              <div className="hero__copy">
                <h1 id="hero-heading">{copy.hero.headlineFirst} <span>{copy.hero.headlineSecond}</span></h1>
              </div>
              <div className="hero__details">
                <p className="hero__description">{copy.hero.description}</p>
                <div className="hero__actions">
                  <Button href="#kontakt">{copy.hero.quote}</Button>
                  <Button href="#leistungen" variant="secondary" className="hero__secondary">{copy.hero.services}</Button>
                </div>
              </div>
            </div>
          </section>
        }
        introduction={<CompanyIntroduction locale={locale} />}
      />
      <ServicesSection locale={locale} />
      <CustomerTestimonials locale={locale} />
      <FAQSection locale={locale} />
      <ContactQuoteSection locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}
