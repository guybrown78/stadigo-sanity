import { MetadataRoute } from 'next'
 
import { getInsights, getCategories, getPolicyPages } from "@/sanity/sanity-utils";

export default async function sitemap() {

	const insights = await getInsights();
	const categories = await getCategories();
	const policies = await getPolicyPages();

	const insightsSiteMap = insights.map(insight => {
			return{
				url: `https://stadigo.com/insights/${insight.slug}`,
				lastModified: new Date(),
				changeFrequency: 'yearly',
				priority: 0.6,
			}
		}
	)

	const categoriesSiteMap = categories.map(category => {
			return{
				url: `https://stadigo.com/insights/category/${category.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.4,
			}
		}
	)

	const policiesSiteMap = policies.map(policy => {
		return{
			url: `https://stadigo.com/policies/${policy.slug}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.2,
		}
	}
)
  return [
    {
      url: 'https://stadigo.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://stadigo.com/stadigo-pioneer-program',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://stadigo.com/insights',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
		...insightsSiteMap,
		{
      url: 'https://stadigo.com/insights/categories',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
		...categoriesSiteMap,
		{
      url: 'https://stadigo.com/faqs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
		{
      url: 'https://stadigo.com/policies',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
		...policiesSiteMap,
		
  ]
}