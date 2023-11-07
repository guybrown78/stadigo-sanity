import { Container } from "@/components/Container";
import InsightCard from "@/components/insights/InsightCard";

import { getInsights } from "@/sanity/sanity-utils";
import InsightBreadcrumbs from '@/components/insights/InsightBreadcrumbs'

export const metadata = {
  title: "Stadigo Insights | Stadium Safety, Competency Assurance, and Fan Experience",
  description: "Explore a wealth of insights at Stadigo, covering stadium safety, competency assurance, and fan experience. Gain valuable knowledge to revolutionise sports venues.",
	keywords: "Stadigo Insights, Stadium Safety, Competency Assurance, Fan Experience, Stadium Management, Digital Innovation, Safety Measures, Fan Engagement, Stadium Excellence"
}


export default async function Insights() {

	const insights = await getInsights();

	return (
		<Container>
			<InsightBreadcrumbs />
			<div className="max-w-2xl">
				<h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Stadigo Insights</h1>
				<p className="mt-2 text-lg leading-8 text-slate-600">
					Explore our full article archive helping you to stay informed and elevate your stadium excellence, fan experience, and digital innovation.
				</p>
			</div>

			<div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{insights.map((insight) => 
					<InsightCard key={insight._id} insight={insight} />
				)}
			</div>
		</Container>
	)
}