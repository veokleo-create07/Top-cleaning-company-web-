export type Locale = "en" | "de";

export const siteCopy = {
  en: {
    metadata: {
      title: "TopClean Building Services | Commercial Cleaning in Lübeck",
      description:
        "Professional cleaning for businesses, medical practices and properties in Lübeck and the surrounding area.",
    },
    navigation: {
      services: "Services",
      company: "About us",
      contact: "Contact",
      quote: "Request a quote",
      menu: "Menu",
      openMenu: "Open menu",
      mainLabel: "Main navigation",
      mobileLabel: "Mobile navigation",
    },
    hero: {
      eyebrow: "Commercial cleaning in Lübeck & the surrounding area",
      headlineFirst: "Clean spaces.",
      headlineSecond: "A strong impression.",
      description:
        "Professional cleaning for businesses, medical practices and properties in Lübeck and the surrounding area — reliable, thorough and tailored to your needs.",
      quote: "Request a free quote",
      services: "Our services",
      location: "Based in Lübeck. Here for the surrounding area.",
      imageAlt: "A cleaner caring for the floor of a bright, modern commercial property",
      imageCaption: "Well-kept spaces. Service you can rely on.",
      imageLocation: "Lübeck · Schleswig-Holstein",
      baselineFirst: "For businesses and properties",
      baselineSecond: "Tailored to your needs",
    },
    company: {
      eyebrow: "About TopClean",
      headlineFirst: "Clean spaces start",
      headlineSecond: "with trust.",
      description:
        "As a family-run cleaning company, we believe in careful work, clear communication and lasting partnerships. We look after businesses, medical practices, properties and private homes in Lübeck and the surrounding area.",
      link: "More about us",
      imageAlt: "A cleaner wiping a glass wall in a bright, modern interior",
      imageCaption: "Demo image · no TopClean employees are pictured",
      valuesLabel: "What sets TopClean apart",
      values: [
        { title: "Family-run", description: "Personal, committed and responsible." },
        { title: "Well-organized", description: "Clear planning and dependable service." },
        { title: "Lübeck & beyond", description: "Rooted locally and flexible on site." },
      ],
    },
  },
  de: {
    metadata: {
      title: "TopClean Gebäudeservice | Gebäudereinigung in Lübeck",
      description:
        "Professionelle Reinigung für Unternehmen, Praxen und Immobilien in Lübeck und Umgebung.",
    },
    navigation: {
      services: "Leistungen",
      company: "Unternehmen",
      contact: "Kontakt",
      quote: "Angebot anfragen",
      menu: "Menü",
      openMenu: "Menü öffnen",
      mainLabel: "Hauptnavigation",
      mobileLabel: "Mobile Navigation",
    },
    hero: {
      eyebrow: "Gebäudereinigung in Lübeck & Umgebung",
      headlineFirst: "Saubere Räume.",
      headlineSecond: "Ein starker Auftritt.",
      description:
        "Professionelle Reinigung für Unternehmen, Praxen und Immobilien in Lübeck und Umgebung – zuverlässig, gründlich und individuell abgestimmt.",
      quote: "Kostenloses Angebot anfordern",
      services: "Unsere Leistungen",
      location: "Aus Lübeck. Für Lübeck und Umgebung.",
      imageAlt: "Reinigungskraft pflegt den Boden in einer hellen, modernen Gewerbeimmobilie",
      imageCaption: "Gepflegte Räume. Verlässlicher Service.",
      imageLocation: "Lübeck · Schleswig-Holstein",
      baselineFirst: "Für Unternehmen und Immobilien",
      baselineSecond: "Individuell abgestimmt",
    },
    company: {
      eyebrow: "Über TopClean",
      headlineFirst: "Sauberkeit beginnt",
      headlineSecond: "mit Vertrauen.",
      description:
        "Als familiengeführtes Reinigungsunternehmen stehen wir für sorgfältige Arbeit, klare Kommunikation und langfristige Zusammenarbeit. Wir betreuen Unternehmen, Praxen, Immobilien und private Objekte in Lübeck und Umgebung.",
      link: "Mehr über uns",
      imageAlt: "Reinigungskraft wischt eine Glaswand in einem hellen, modernen Innenraum",
      imageCaption: "Demoaufnahme · keine Mitarbeitenden von TopClean abgebildet",
      valuesLabel: "Was TopClean auszeichnet",
      values: [
        { title: "Familiengeführt", description: "Persönlich, engagiert und verantwortungsbewusst." },
        { title: "Strukturierte Abläufe", description: "Klare Planung und zuverlässige Durchführung." },
        { title: "Lübeck & Umgebung", description: "Regional verwurzelt und flexibel im Einsatz." },
      ],
    },
  },
} satisfies Record<Locale, unknown>;
