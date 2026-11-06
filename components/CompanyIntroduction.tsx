import { CompanyFeaturePanel } from "@/components/CompanyFeaturePanel";
import { siteCopy, type Locale } from "@/lib/site-copy";

export function CompanyIntroduction({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].company;

  return (
    <section
      className="company-intro"
      id="unternehmen"
      aria-labelledby="company-intro-heading"
    >
      <CompanyFeaturePanel locale={locale} />

      <ul className="company-intro__values page-shell" aria-label={copy.valuesLabel}>
        {copy.values.map((value) => (
          <li className="company-intro__value" key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
