import Image from "next/image";

export function CompanyFeaturePanel() {
  return (
    <div className="company-panel page-shell">
      <div className="company-panel__content">
        <div className="company-panel__copy">
          <p className="company-panel__eyebrow">Über TopClean</p>
          <h2 className="company-panel__heading" id="company-intro-heading">
            <span>Sauberkeit beginnt</span>
            <span>mit Vertrauen.</span>
          </h2>
          <p className="company-panel__description">
            Als familiengeführtes Reinigungsunternehmen stehen wir für sorgfältige Arbeit,
            klare Kommunikation und langfristige Zusammenarbeit. Wir betreuen Unternehmen,
            Praxen, Immobilien und private Objekte in Lübeck und Umgebung.
          </p>
          <a className="company-panel__link" href="#unternehmen">
            Mehr über uns <span aria-hidden="true">↗</span>
          </a>
        </div>

        <figure className="company-panel__figure">
          <Image
            src="/images/company-introduction-demo.jpg"
            alt="Reinigungskraft wischt eine Glaswand in einem hellen, modernen Innenraum"
            fill
            sizes="(max-width: 860px) 100vw, (max-width: 1200px) 52vw, 54vw"
            className="company-panel__image"
          />
          <figcaption className="company-panel__caption">
            Demoaufnahme · keine Mitarbeitenden von TopClean abgebildet
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
