import Image from "next/image";
import { siteCopy, type Locale } from "@/lib/site-copy";

export function CompanyFeaturePanel({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].company;

  return (
    <div className="company-panel" id="company-feature-panel">
      <div className="company-panel__inner">
        <div className="company-panel__content">
          <div className="company-panel__copy">
            <h2 className="company-panel__heading" id="company-intro-heading">
              <span>{copy.headlineFirst}</span>
              <span>{copy.headlineSecond}</span>
            </h2>
            <p className="company-panel__description">{copy.description}</p>
            <a className="company-panel__link" href="#kontakt">
              {copy.link} <span aria-hidden="true">↗</span>
            </a>
          </div>

          <figure className="company-panel__figure">
            <Image
              src="/images/company-introduction-demo.jpg"
              alt={copy.imageAlt}
              fill
              sizes="(max-width: 860px) 100vw, (max-width: 1200px) 52vw, 54vw"
              className="company-panel__image"
            />
            <figcaption className="company-panel__caption">{copy.imageCaption}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
