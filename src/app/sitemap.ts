import { MetadataRoute } from "next";

const BASE_URL = "https://gustavo-resende.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/projects/sleipnir`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/projects/muninn`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/projects/frigg`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/projects/bot-fatura`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/projects/resumax`, lastModified: new Date(), priority: 0.8 },
  ];
}
