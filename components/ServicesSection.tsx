import Image from "next/image";
import { Button } from "@/components/Button";
import { siteCopy, type Locale } from "@/lib/site-copy";

export function ServicesSection({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].services;

  return (
    <section className="services" id="leistungen" aria-labelledby="services-heading">
      <div className="page-shell">
        <header className="services__header">
          <h2 className="services__heading" id="services-heading">{copy.headline}</h2>
          <p className="services__intro">{copy.introduction}</p>
        </header>

        <div className="services__grid">
          {copy.items.slice(0, 3).map((service, index) => (
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
              <h3 className="service-item__heading">{service.title}</h3>
            </article>
          ))}
        </div>

        <div className="services__actions">
          <Button href="#kontakt">{copy.serviceLinkLabel}</Button>
          <Button href="#fragen" variant="secondary">{copy.moreLabel}</Button>
        </div>
      </div>
    </section>
  );
}
