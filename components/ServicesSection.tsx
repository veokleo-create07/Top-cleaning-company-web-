import Image from "next/image";
import { Button } from "@/components/Button";
import { siteCopy, type Locale } from "@/lib/site-copy";

export function ServicesSection({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].services;

  return (
    <section className="services" id="leistungen" aria-labelledby="services-heading">
      <div className="page-shell">
        <header className="services__header">
          <p className="services__eyebrow"><span aria-hidden="true" />{copy.eyebrow}</p>
          <h2 className="services__heading" id="services-heading">{copy.headline}</h2>
          <div className="services__intro">
            <p>{copy.introduction}</p>
            <p className="services__demo-note">{copy.demoNote}</p>
          </div>
        </header>

        <div className="services__grid">
          {copy.items.map((service, index) => (
            <article className="service-item" key={service.title}>
              <figure className={`service-item__figure service-item__figure--${index + 1}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 46vw"
                  className="service-item__image"
                />
              </figure>
              <div className="service-item__body">
                <h3 className="service-item__heading">{service.title}</h3>
                <p className="service-item__description">{service.description}</p>
                <a
                  className="service-item__link"
                  href="#kontakt"
                  aria-label={`${copy.learnMore} & ${copy.quoteCta}: ${service.title}`}
                >
                  {copy.learnMore}<span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="services__more-link">
          <a href="#weitere-leistungen">{copy.moreLabel}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="services__more" id="weitere-leistungen">
          <div>
            <h3>{copy.moreHeading}</h3>
            <p>{copy.moreDescription}</p>
          </div>
        </div>

        <div className="services__quote" id="kontakt">
          <div>
            <h3>{copy.quoteHeading}</h3>
            <p>{copy.quoteDescription}</p>
          </div>
          <Button href="#kontakt">{copy.quoteCta}</Button>
          <p className="services__contact-placeholder">{copy.contactPlaceholder}</p>
        </div>
      </div>
    </section>
  );
}
