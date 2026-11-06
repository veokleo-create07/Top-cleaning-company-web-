import Image from "next/image";
import { Button } from "@/components/Button";
import { CompanyIntroduction } from "@/components/CompanyIntroduction";
import { HeroPanelScrollTransition } from "@/components/HeroPanelScrollTransition";
import { SiteHeader } from "@/components/SiteHeader";
import { ServicesSection } from "@/components/ServicesSection";
import { WorkPortfolioSection } from "@/components/WorkPortfolioSection";
import { CustomerTestimonials } from "@/components/CustomerTestimonials";
import { siteCopy, type Locale } from "@/lib/site-copy";

type HomePageProps = { locale: Locale };

export function HomePage({ locale }: HomePageProps) {
  const copy = siteCopy[locale];

  return (
    <main id="start">
      <SiteHeader locale={locale} />
      <HeroPanelScrollTransition
        hero={
          <>
            <section className="hero page-shell" aria-labelledby="hero-heading">
              <div className="hero__copy">
                <p className="eyebrow"><span className="eyebrow__rule" />{copy.hero.eyebrow}</p>
                <h1 id="hero-heading">{copy.hero.headlineFirst}<br /><span>{copy.hero.headlineSecond}</span></h1>
                <p className="hero__description">{copy.hero.description}</p>
                <div className="hero__actions">
                  <Button href="#kontakt">{copy.hero.quote}</Button>
                  <Button href="#leistungen" variant="secondary" className="hero__secondary">{copy.hero.services} <span aria-hidden="true">↗</span></Button>
                </div>
                <p className="hero__location">{copy.hero.location}</p>
              </div>

              <figure className="hero__visual">
                <Image
                  src="/images/hero-cleaning.jpg"
                  alt={copy.hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 54vw, 54vw"
                  className="hero__image"
                />
                <figcaption className="hero__caption">
                  <span>{copy.hero.imageCaption}</span>
                  <span>{copy.hero.imageLocation}</span>
                </figcaption>
              </figure>
            </section>
            <div className="hero__baseline page-shell" aria-hidden="true">
              <span>{copy.hero.baselineFirst}</span>
              <span className="hero__baseline-line" />
              <span>{copy.hero.baselineSecond}</span>
            </div>
          </>
        }
        introduction={<CompanyIntroduction locale={locale} />}
      />
      <ServicesSection locale={locale} />
      <WorkPortfolioSection locale={locale} />
      <CustomerTestimonials locale={locale} />
    </main>
  );
}
