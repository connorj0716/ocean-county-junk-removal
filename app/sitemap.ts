import type { MetadataRoute } from "next";

const BASE_URL = "https://www.oceancountyjunkremoval.com";

// Public, indexable routes. Dashboard, login and API routes are intentionally
// excluded — they're behind auth and shouldn't be crawled.
const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [{ path: "/", changeFrequency: "weekly", priority: 1 }];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
