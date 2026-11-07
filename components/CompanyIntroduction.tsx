import { CompanyFeaturePanel } from "@/components/CompanyFeaturePanel";
import type { Locale } from "@/lib/site-copy";

export function CompanyIntroduction({ locale }: { locale: Locale }) {
  return (
    <section
      className="company-intro"
      id="unternehmen"
      aria-labelledby="company-intro-heading"
    >
      <CompanyFeaturePanel locale={locale} />

    </section>
  );
}
