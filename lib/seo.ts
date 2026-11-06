const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl = configuredSiteUrl ?? "https://www.topcleannord.de";
const siteHost = new URL(siteUrl).hostname.toLowerCase();
const isOfficialProductionHost = Boolean(configuredSiteUrl)
  && (siteHost === "topcleannord.de" || siteHost === "www.topcleannord.de");

export const sharedMetadata = {
  metadataBase: new URL(siteUrl),
  robots: {
    index: isOfficialProductionHost,
    follow: isOfficialProductionHost,
    googleBot: { index: isOfficialProductionHost, follow: isOfficialProductionHost },
  },
};
