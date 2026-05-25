import type { MetadataRoute } from "next";

const baseUrl = "https://www.ncde.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "",
    "over-ons",
    "subsidies-financiering",
    "partners",
    "nieuws",
    "contact",
    "duidelijk-inzicht",
    "isolatie",
    "warmtepomp",
    "zonnepanelen",
    "thuisbatterij",
    "ventilatie",
    "laadpaal",
    "noodpakket",
    "salderingsregeling",
    "gemeentelijke-subsidies",
    "isde-warmtepomp",
    "isde-isolatie",
    "isde-zonneboiler",
    "svve",
    "warmtenet-elektrisch-koken",
    "privacy",
    "disclaimer",
    "cookiebeleid",
    "algemene-voorwaarden",
    "cvd-melding",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path ? `/${path}` : ""}`,
    lastModified: now,
    changeFrequency: path === "" || path === "nieuws" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path === "nieuws" ? 0.8 : 0.7,
  }));
}
