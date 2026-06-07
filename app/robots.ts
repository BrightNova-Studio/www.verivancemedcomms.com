import type { MetadataRoute } from "next"

// Required for `output: "export"` — force the route to be statically generated.
export const dynamic = "force-static"

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
