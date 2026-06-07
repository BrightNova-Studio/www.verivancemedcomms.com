import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/under-development"],
      },
    ],
    sitemap: "https://verivancemedcomms.com/sitemap.xml",
    host: "https://verivancemedcomms.com",
  }
}
