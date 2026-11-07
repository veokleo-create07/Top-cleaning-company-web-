"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { siteCopy, type Locale } from "@/lib/site-copy";

export function FAQSection({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" id="fragen" aria-labelledby="faq-heading">
      <div className="page-shell faq-section__layout">
        <header className="faq-section__header">
          <h2 id="faq-heading">{copy.headline}</h2>
        </header>

        <div className="faq-section__content">
          <div className="faq-list">
            {copy.items.map((item, index) => {
              const isOpen = openIndex === index;
              const questionId = `faq-question-${index + 1}`;
              const answerId = `faq-answer-${index + 1}`;

              return (
                <article className="faq-item" key={item.question}>
                  <h3 className="faq-item__heading">
                    <button
                      className="faq-item__trigger"
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span>{item.question}</span>
                      <span className={`faq-item__indicator${isOpen ? " is-open" : ""}`} aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    className={`faq-item__panel${isOpen ? " is-open" : ""}`}
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                  >
                    <div className="faq-item__panel-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="faq-section__contact">
            <p>{copy.contactPrompt}</p>
            <Button href="#kontakt" variant="secondary">{copy.contactLink}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
