

import { getLatestInsights } from "@/sanity/sanity-utils";
import InsightCard from "@/components/insights/InsightCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default async function LatestInsights() {

	// TODO - just get the 3 latest insights
	const latestInsights = await getLatestInsights();

	return (
		<>
			 <div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Stadigo Insights</h2>
				<p className="mt-2 text-lg leading-8 text-slate-600">
					Stay informed and elevate stadium excellence with our latest articles
				</p>
			</div>

			<div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{latestInsights.map((insight) => 
					<InsightCard key={insight._id} insight={insight} />
				)}
			</div>

			{/* <div className="mt-16 flex justify-end items-end">
				<Link href="/insights">Discover more insights</Link>
			</div> */}
			<div className="mt-16 mx-auto max-w-2xl text-center">
				<p className="mt-2 text-md leading-8 text-slate-600">
					Explore our complete article archive <Link href="/insights" className="group relative flex-inline items-center font-semibold text-green-600 underline whitespace-nowrap">Stadigo Insights <span className="inline-flex ml-1 mr-1 group-hover:mr-0 group-hover:ml-2 transition-all"><FaArrowRight /></span></Link>
				</p>
			</div>
		</>
	)
}