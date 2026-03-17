export async function GET() {
  const siteUrl = "https://rt-informatique.com";

  const pages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "nos-services/", priority: "0.9", changefreq: "monthly" },
    { url: "particuliers/", priority: "0.8", changefreq: "monthly" },
    { url: "professionnels/", priority: "0.8", changefreq: "monthly" },
    { url: "a-propos/", priority: "0.7", changefreq: "monthly" },
    { url: "contact/", priority: "0.8", changefreq: "monthly" },
    { url: "zones-intervention/", priority: "0.8", changefreq: "monthly" },
    { url: "assistance-informatique-et-depannage/", priority: "0.9", changefreq: "monthly" },
    { url: "maintenance-et-depannage-a-distance-et-sur-site/", priority: "0.9", changefreq: "monthly" },
    { url: "creation-de-site-internet-vitrine-et-e-commerce/", priority: "0.9", changefreq: "monthly" },
    { url: "audit-et-transformation-digitale/", priority: "0.8", changefreq: "monthly" },
    { url: "developpement-d-applications-web/", priority: "0.8", changefreq: "monthly" },
    { url: "vente-de-materiel-informatique/", priority: "0.8", changefreq: "monthly" },
    // Pages locales SEO
    { url: "depannage-informatique-maintenon/", priority: "0.9", changefreq: "monthly" },
    { url: "depannage-informatique-pierres/", priority: "0.8", changefreq: "monthly" },
    { url: "depannage-informatique-saint-piat/", priority: "0.8", changefreq: "monthly" },
    { url: "depannage-informatique-hanches/", priority: "0.8", changefreq: "monthly" },
    { url: "depannage-informatique-epernon/", priority: "0.9", changefreq: "monthly" },
    { url: "depannage-informatique-gallardon/", priority: "0.8", changefreq: "monthly" },
    { url: "depannage-informatique-nogent-le-roi/", priority: "0.8", changefreq: "monthly" },
    { url: "depannage-informatique-chartres/", priority: "0.9", changefreq: "monthly" },
    { url: "depannage-informatique-rambouillet/", priority: "0.9", changefreq: "monthly" },
    { url: "depannage-informatique-auneau/", priority: "0.8", changefreq: "monthly" },
    { url: "depannage-informatique-ablis/", priority: "0.8", changefreq: "monthly" },
    { url: "depannage-informatique-houdan/", priority: "0.7", changefreq: "monthly" },
    { url: "mentions-legales/", priority: "0.3", changefreq: "yearly" },
  ];

  const today = new Date().toISOString().split("T")[0];

  const urlEntries = pages
    .map(
      ({ url, priority, changefreq }) => `  <url>
    <loc>${siteUrl}/${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
