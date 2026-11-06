import { siteCopy, type Locale } from "@/lib/site-copy";
import { Button } from "@/components/Button";

export function CustomerTestimonials({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].testimonials;
  const [featured, ...supporting] = copy.items;

  return (
    <section className="testimonials" id="kundenstimmen" aria-labelledby="testimonials-heading">
      <div className="page-shell">
        <header className="testimonials__header">
          <h2 id="testimonials-heading">{copy.headline}</h2>
          <p className="testimonials__introduction">{copy.introduction}</p>
        </header>

        <div className="testimonials__layout">
          <article className="testimonial testimonial--featured">
            <p className="testimonial__service">{featured.service}</p>
            {featured.quote ? (
              <>
                <blockquote className="testimonial__quote" lang={featured.quoteLanguage}>
                  <p>{featured.quote}</p>
                </blockquote>
                {"translationNote" in featured && featured.translationNote && <p className="testimonial__note">{featured.translationNote}</p>}
              </>
            ) : (
              <p className="testimonial__pending">{copy.pendingQuote}</p>
            )}
            <p className="testimonial__attribution">{featured.name}</p>
          </article>

          <div className="testimonials__supporting">
            {supporting.map((item) => (
              <article className="testimonial" key={item.name}>
                <p className="testimonial__service">{item.service}</p>
                <blockquote className="testimonial__quote" lang={item.quoteLanguage}>
                  <p>{item.quote}</p>
                </blockquote>
                {"translationNote" in item && item.translationNote && <p className="testimonial__note">{item.translationNote}</p>}
                <p className="testimonial__attribution">{item.name}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonials__cta">
          <p>{copy.ctaPrompt}</p>
          <Button href="#kontakt" variant="secondary">{copy.ctaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
