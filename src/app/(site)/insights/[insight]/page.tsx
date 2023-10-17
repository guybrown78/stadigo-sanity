import { getInsight } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
	params: { insight:string }
}
export default async function Project({ params }:Props){

	const slug = params.insight;
	const insight = await getInsight(slug)

	return (
		<div className="max-w-5xl mx-auto w-full py-10">
			{insight.title}

			<div className="mt-5 prose prose-slate lg:prose-lg">
				<PortableText value={insight.body} />
			</div>

			
		</div>
	)
}