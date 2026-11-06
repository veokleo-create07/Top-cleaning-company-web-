import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { siteCopy, type Locale } from "@/lib/site-copy";

export function WorkPortfolioSection({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].work;

  return (
    <section className="work-section" id="arbeit" aria-labelledby="work-heading">
      <div className="page-shell">
        <header className="work-section__header">
          <p className="work-section__eyebrow"><span aria-hidden="true" />{copy.eyebrow}</p>
          <h2 id="work-heading">{copy.headline}</h2>
          <div className="work-section__intro">
            <p>{copy.introduction}</p>
            <p className="work-section__demo-note">{copy.demoNote}</p>
          </div>
        </header>

        <div className="work-section__grid">
          {copy.items.map((project) => (
            <article className="work-project" key={`${project.service}-${project.location}`}>
              <figure className="work-project__figure">
                <BeforeAfterSlider
                  image={project.image}
                  imageAlt={project.alt}
                  imagePosition={project.position}
                  beforeLabel={copy.before}
                  afterLabel={copy.after}
                  sliderLabel={copy.sliderLabel}
                  service={project.service}
                />
                <figcaption className="work-project__caption">
                  <h3>{project.service}</h3>
                  <p>{project.location}</p>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
