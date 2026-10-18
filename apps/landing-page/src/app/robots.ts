import type { MetadataRoute } from "next";
import { BRAND_CONFIG } from "@startup/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: "*", allow: "/", disallow: "/__forms.html" },
        sitemap: `${BRAND_CONFIG.domain}/sitemap.xml`,
    };
}
