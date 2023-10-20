import sanity from "@sanity/client";
import groq from "groq";

// export default function SiteMap() {
//   return &lt;div&gt;loading&lt;/div&gt;;
// }

// export async function getServerSideProps({ res }) {
//   const baseUrl = `<https://cwp-www.vercel.app>`;

//   const query = groq`{
//     "pages": *[_type == 'sitePage']{slug},
//   	"service": *[_type == 'service']{slug},
//     "people": *[_type == 'person' &amp;&amp; title-&gt;name != 'Service Ambassador']{slug} ,
// 	  "article": *[_type == 'article']{slug}
//     }`;

//   const client = sanity({
//     projectId: "YOUR PROJECTID",
//     dataset: "YOUR DATASET",
//     token: "", // or leave blank to be anonymous user
//     useCdn: false, // `false` if you want to ensure fresh data
//   });

//   const urls = await client.fetch(query);

//   const pages = urls.pages.map((page) =&gt; {
//     const slug = page.slug.current === "/" ? "/" : `/${page.slug.current}`;
//     return `${baseUrl}${slug}`;
//   });

//   const service = urls.service.map((page) =&gt; {
//     const slug = `/service/${page.slug.current}`;
//     return `${baseUrl}${slug}`;
//   });

//   const people = urls.people.map((page) =&gt; {
//     const slug = `/people/${page.slug.current}`;
//     return `${baseUrl}${slug}`;
//   });

//   const article = urls.article.map((page) =&gt; {
//     const slug = `/article/${page.slug.current}`;
//     return `${baseUrl}${slug}`;
//   });

//   const locations = [...pages, ...service, ...people, ...article];

//   const createSitemap = () =&gt; `&lt;?xml version="1.0" encoding="UTF-8"?&gt;
//     &lt;urlset xmlns="<http://www.sitemaps.org/schemas/sitemap/0.9>"&gt;
//         ${locations
//           .map((location) =&gt; {
//             return `&lt;url&gt;
//                         &lt;loc&gt;${location}&lt;/loc&gt;
//                         &lt;changefreq&gt;weekly&lt;/changefreq&gt;
//                     &lt;/url&gt;
//                   `;
//           })
//           .join("")}
//     &lt;/urlset&gt;
//     `;
//   res.setHeader("Content-Type", "text/xml");
//   res.write(createSitemap());
//   res.end();

//   return {
//     props: {},
//   };
// }