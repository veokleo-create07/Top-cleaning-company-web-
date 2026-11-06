import Image from "next/image";
import { Button } from "@/components/Button";
import { CompanyIntroduction } from "@/components/CompanyIntroduction";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <main id="start">
      <SiteHeader />
      <section className="hero page-shell" aria-labelledby="hero-heading">
        <div className="hero__copy">
          <p className="eyebrow"><span className="eyebrow__rule" />Gebäudereinigung in Lübeck &amp; Umgebung</p>
          <h1 id="hero-heading">Saubere Räume.<br /><span>Ein starker Auftritt.</span></h1>
          <p className="hero__description">
            Professionelle Reinigung für Unternehmen, Praxen und Immobilien in Lübeck und Umgebung – zuverlässig, gründlich und individuell abgestimmt.
          </p>
          <div className="hero__actions">
            <Button href="#kontakt">Kostenloses Angebot anfordern</Button>
            <Button href="#leistungen" variant="secondary" className="hero__secondary">Unsere Leistungen <span aria-hidden="true">↗</span></Button>
          </div>
          <p className="hero__location">Aus Lübeck. Für Lübeck und Umgebung.</p>
        </div>

        <figure className="hero__visual">
          <Image
            src="/images/hero-cleaning.jpg"
            alt="Reinigungskraft pflegt den Boden in einer hellen, modernen Gewerbeimmobilie"
            fill
            priority
            sizes="(max-width: 760px) 100vw, (max-width: 1200px) 54vw, 54vw"
            className="hero__image"
          />
          <figcaption className="hero__caption">
            <span>Gepflegte Räume. Verlässlicher Service.</span>
            <span>Lübeck · Schleswig-Holstein</span>
          </figcaption>
        </figure>
      </section>
      <div className="hero__baseline page-shell" aria-hidden="true">
        <span>Für Unternehmen und Immobilien</span>
        <span className="hero__baseline-line" />
        <span>Individuell abgestimmt</span>
      </div>
      <CompanyIntroduction />
    </main>
  );
}
