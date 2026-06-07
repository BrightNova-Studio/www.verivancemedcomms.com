import type { MetadataRoute } from "next"

// Required for `output: "export"` — force the route to be statically generated.
export const dynamic = "force-static"

const BASE = "https://verivancemedcomms.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const courses = [
    "5-domain-program",
    "clinical-research",
    "medical-writing",
    "pharmacovigilance",
    "ai-in-pharma",
    "regulatory-affairs",
    "clinical-data-management",
    "stem-cell-therapy",
    "clinical-sas",
    "internship-programs",
    "gpat-coaching",
  ]

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/brochure`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...courses.map((slug) => ({
      url: `${BASE}/courses/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ]
}
