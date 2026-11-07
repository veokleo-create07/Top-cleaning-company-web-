import Link from "next/link";
import type { Locale } from "@/lib/site-copy";

type LanguageSwitchProps = { locale: Locale };

export function LanguageSwitch({ locale }: LanguageSwitchProps) {
  return (
    <nav className="language-switch" aria-label={locale === "en" ? "Choose language" : "Sprache wählen"}>
      <Link href="/en" lang="en" aria-current={locale === "en" ? "page" : undefined}>
        EN
      </Link>
      <span aria-hidden="true">/</span>
      <Link href="/" lang="de" aria-current={locale === "de" ? "page" : undefined}>
        DE
      </Link>
    </nav>
  );
}
