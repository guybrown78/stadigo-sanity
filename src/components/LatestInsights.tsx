

import { getInsights } from "@/sanity/sanity-utils";
import category from "@/sanity/schemas/category-schema";
import Link from "next/link";


export default async function LatestInsights() {

	const insights = await getInsights();

	console.log(insights)

	return (
		<>
			<h1>Insights</h1>
			{insights.map((insight) => (
				<div key={insight._id}>
					<Link href={`insights/${insight.slug}`}>
						<ul className="text-xs">
							<li>{insight.title}</li>
							<li>{insight.author.name}</li>
							<li>{insight.overview}</li>
							<li>{insight.slug}</li>
							<li>
								<span className="font-semibold">Categories</span>
								<ul className="ml-8 list-disc">
									{insight.categories.map((category) => (
										<li key={category._id}>
											<Link href={`insights/categories/${category.slug}`}>
												<span>{category.title}</span>
											</Link>
										</li>
									))}
								</ul>
							</li>
							<li>
								<span className="font-semibold">Tags</span>
								<ul className="ml-8 list-disc">
									{insight.tags.map((tag) => (
										<li key={tag._id} title={tag.description}>#{tag.title}</li>
									))}
								</ul>
							</li>
						</ul>
					</Link>
		
				</div>
			))}
		</>
	)
}