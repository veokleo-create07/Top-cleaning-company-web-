import { Button } from "@/components/Button";
import { siteCopy, type Locale } from "@/lib/site-copy";

export function HowItWorksSection({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].process;

  return (
    <section className="process-section" id="ablauf" aria-labelledby="process-heading">
      <div className="page-shell">
        <header className="process-section__header">
          <p className="process-section__eyebrow"><span aria-hidden="true" />{copy.eyebrow}</p>
          <h2 id="process-heading">{copy.headline}</h2>
          <p className="process-section__intro">{copy.introduction}</p>
        </header>

        <ol className="process-steps">
          {copy.steps.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="process-step__number" aria-hidden="true">{step.number}</span>
              <div className="process-step__copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="process-section__cta">
          <Button href="#kontakt">{copy.cta}</Button>
        </div>
      </div>
    </section>
  );
}
