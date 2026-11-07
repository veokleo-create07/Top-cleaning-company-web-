import { siteCopy, type Locale } from "@/lib/site-copy";
import { Button } from "@/components/Button";

export function CustomerTestimonials({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].testimonials;
  const reviews = copy.items.filter((item) => typeof item.quote === "string");

  return (
    <section className="testimonials" id="kundenstimmen" aria-labelledby="testimonials-heading">
      <div className="page-shell">
        <header className="testimonials__header">
          <h2 id="testimonials-heading">{copy.headline}</h2>
        </header>

        <div className="testimonials__layout">
          {reviews.map((item) => (
            <article className="testimonial" key={item.name}>
              <blockquote className="testimonial__quote" lang={item.quoteLanguage}>
                <p>{item.quote}</p>
              </blockquote>
              {"translationNote" in item && typeof item.translationNote === "string" && <p className="testimonial__note">{item.translationNote}</p>}
              <p className="testimonial__attribution">{item.name}</p>
            </article>
          ))}
        </div>

        <div className="testimonials__cta">
          <p>{copy.ctaPrompt}</p>
          <Button href="#kontakt" variant="secondary">{copy.ctaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
