import Image from "next/image";

const values = [
  {
    title: "Familiengeführt",
    description: "Persönlich, engagiert und verantwortungsbewusst.",
  },
  {
    title: "Strukturierte Abläufe",
    description: "Klare Planung und zuverlässige Durchführung.",
  },
  {
    title: "Lübeck & Umgebung",
    description: "Regional verwurzelt und flexibel im Einsatz.",
  },
];

export function CompanyIntroduction() {
  return (
    <section
      className="company-intro"
      id="unternehmen"
      aria-labelledby="company-intro-heading"
    >
      <div className="company-intro__main page-shell">
        <div className="company-intro__copy">
          <p className="company-intro__eyebrow">Über TopClean</p>
          <h2 className="company-intro__heading" id="company-intro-heading">
            <span>Sauberkeit beginnt</span>
            <span>mit Vertrauen.</span>
          </h2>
          <p className="company-intro__description">
            Als familiengeführtes Reinigungsunternehmen stehen wir für sorgfältige Arbeit,
            klare Kommunikation und langfristige Zusammenarbeit. Wir betreuen Unternehmen,
            Praxen, Immobilien und private Objekte in Lübeck und Umgebung.
          </p>
          <a className="company-intro__link" href="#unternehmen">
            Mehr über uns <span aria-hidden="true">↗</span>
          </a>
        </div>

        <figure className="company-intro__figure">
          <Image
            src="/images/company-introduction-demo.jpg"
            alt="Reinigungskraft wischt eine Glaswand in einem hellen, modernen Innenraum"
            fill
            sizes="(max-width: 860px) 100vw, (max-width: 1200px) 52vw, 54vw"
            className="company-intro__image"
          />
          <figcaption className="company-intro__caption">
            Demoaufnahme · keine Mitarbeitenden von TopClean abgebildet
          </figcaption>
        </figure>
      </div>

      <ul className="company-intro__values page-shell" aria-label="Was TopClean auszeichnet">
        {values.map((value) => (
          <li className="company-intro__value" key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
