import { CompanyFeaturePanel } from "@/components/CompanyFeaturePanel";

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
      <CompanyFeaturePanel />

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
