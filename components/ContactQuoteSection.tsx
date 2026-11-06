"use client";

import { FormEvent, useRef, useState } from "react";
import { siteCopy, type Locale } from "@/lib/site-copy";

type FieldName = "name" | "email" | "privacyConsent";
type ContactErrors = Partial<Record<FieldName, string>>;

export function ContactQuoteSection({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].contactForm;
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "error" | "demo">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: ContactErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const consent = data.get("privacyConsent") === "on";

    if (!name) nextErrors.name = copy.errors.name;
    if (!email) nextErrors.email = copy.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = copy.errors.emailInvalid;
    if (!consent) nextErrors.privacyConsent = copy.errors.privacyConsent;

    setErrors(nextErrors);
    setStatus(Object.keys(nextErrors).length ? "error" : "demo");

    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      form.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }

    // This demo intentionally has no submission endpoint and never persists or transmits form values.
    form.reset();
  }

  function clearError(field: FieldName) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setStatus("idle");
  }

  const fieldDescription = (field: FieldName) => errors[field] ? `${field}-error` : undefined;

  return (
    <section className="contact-section" id="kontakt" aria-labelledby="contact-heading">
      <div className="contact-panel">
        <div className="contact-panel__inner">
          <div className="contact-panel__layout">
            <div className="contact-panel__copy">
              <h2 id="contact-heading">{copy.headline}</h2>
              <p className="contact-panel__intro">{copy.introduction}</p>

              <address className="contact-details">
                <div>
                  <span>{copy.phoneLabel}</span>
                  <a href="tel:+4917623483923">+49 176 23483923</a>
                </div>
                <div>
                  <span>{copy.emailLabel}</span>
                  <a href="mailto:info@topcleannord.de">info@topcleannord.de</a>
                </div>
                <div>
                  <span>{copy.locationLabel}</span>
                  <p>{copy.location}</p>
                </div>
              </address>

              <a className="contact-panel__whatsapp" href="https://wa.me/4917623483923" target="_blank" rel="noreferrer">
                {copy.whatsapp}<span aria-hidden="true"> ↗</span>
              </a>
            </div>

            <div className="contact-form-wrap">
              <p className="contact-form__demo" role="note">{copy.demoNotice}</p>
              <form ref={formRef} className="contact-form" noValidate onSubmit={handleSubmit}>
                {status === "error" && (
                  <p className="contact-form__status contact-form__status--error" role="alert">{copy.errorSummary}</p>
                )}
                {status === "demo" && (
                  <p className="contact-form__status" role="status">{copy.demoResult}</p>
                )}

                <div className="contact-form__grid">
                  <div className="contact-form__field">
                    <label htmlFor="contact-name">{copy.fields.name}<span aria-hidden="true"> *</span></label>
                    <input id="contact-name" name="name" type="text" autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={fieldDescription("name")} onChange={() => clearError("name")} />
                    {errors.name && <p className="contact-form__error" id="name-error">{errors.name}</p>}
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-email">{copy.fields.email}<span aria-hidden="true"> *</span></label>
                    <input id="contact-email" name="email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={fieldDescription("email")} onChange={() => clearError("email")} />
                    {errors.email && <p className="contact-form__error" id="email-error">{errors.email}</p>}
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-phone">{copy.fields.phone}</label>
                    <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-service">{copy.fields.service}</label>
                    <select id="contact-service" name="service" defaultValue="">
                      <option value="">{copy.fields.servicePrompt}</option>
                      {copy.services.map((service) => <option key={service.value} value={service.value}>{service.label}</option>)}
                    </select>
                  </div>

                  <div className="contact-form__field contact-form__field--wide">
                    <label htmlFor="contact-location">{copy.fields.propertyLocation}</label>
                    <input id="contact-location" name="propertyLocation" type="text" autoComplete="address-level2" />
                  </div>

                  <div className="contact-form__field contact-form__field--wide">
                    <label htmlFor="contact-message">{copy.fields.message}</label>
                    <textarea id="contact-message" name="message" rows={3} />
                  </div>
                </div>

                <div className="contact-form__consent">
                  <input id="contact-consent" name="privacyConsent" type="checkbox" required aria-invalid={Boolean(errors.privacyConsent)} aria-describedby={fieldDescription("privacyConsent")} onChange={() => clearError("privacyConsent")} />
                  <label htmlFor="contact-consent">
                    {copy.privacyPrefix} <a href={copy.privacyHref} target="_blank" rel="noreferrer">{copy.privacyLink}</a> {copy.privacySuffix}<span aria-hidden="true"> *</span>
                  </label>
                  {errors.privacyConsent && <p className="contact-form__error" id="privacyConsent-error">{errors.privacyConsent}</p>}
                </div>

                <button className="button button--primary contact-form__submit" type="submit">{copy.submit}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
