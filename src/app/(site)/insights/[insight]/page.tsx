import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa6'
import { Container } from "@/components/Container";
import InsightAuthor from "@/components/insights/InsightAuthor";
import InsightCategory from "@/components/insights/InsightCategory";
import InsightTag from "@/components/insights/InsightTag";
import { getInsight } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import MoreInsights from "@/components/insights/MoreInsights";


type Props = {
	params: { insight:string }
}
export default async function Project({ params }:Props){

	const slug = params.insight;
	const insight = await getInsight(slug)

	console.log(insight)
	return (
		<Container>

			<Image 
				src={insight.coverImage}
				alt={insight.title}
				width={950}
				height={512}
				className="mt-10 border-2 border-slate-100 rounded-3xl rounded-b-none object-cover w-full max-h-128"
			/>
			<header className="relative z-10 -mt-16 block rounded-md bg-white mx-9 md:mx-12 p-4">
				<h1 className="mb-4 text-3xl md:text-5xl font-semibold">{insight.title}</h1>
				{
					insight.subTitle &&
					<h2 className="mb-4 text-xl font-semibold">{insight.subTitle}</h2>
				}
				<div className="flex flex-col-reverse justify-start md:justify-between md:flex-row items-start md:items-center mt-4 ">
					<div className="mt-1 md:mt-0">
						<div className="mb-1">{moment(insight.publishedAt).format('MMMM Do YYYY') }</div>
						<div className="italic text-slate-500"><span >Reading time:</span> {String(insight.estimatedReadingTime)} mins</div>
					</div>
					
					<InsightAuthor 
						name={insight.author.name}
						role={insight.author.role}
						imageURL={insight.author.image}
						linkedinURL={insight.author.linkedin}
					/>
				</div>
				<div className="flex md:justify-end mt-4 ">
					<div className="flex flex-col md:items-end">
						<h4 className="text-sm font-medium text-slate-700 mb-2 whitespace-nowrap">Posted in:</h4>
						<div className="flex md:flex-row-reverse flex-wrap">
							{
								insight.categories.map(category => (
									<InsightCategory
										key={category._id}
										title={category.title}
										className="mr-4 ml-0 md:ml-4 md:mr-0 mb-2"
									>
										<Link href={`/insights/cate	gories/${category.slug}`} replace className="relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20 text-slate-600/50 hover:text-slate-600/75">
											<span className="sr-only">Visit</span>
											<FaArrowRight className="h-2.5 w-2.5 mx-auto mt-0.5"/>
											<span className="absolute -inset-1" />
										</Link>
									</InsightCategory>
								))
							}
						</div>
					</div>
					
				</div>
			</header>
			
			
			<div className="mt-5 prose prose-slate lg:prose-lg max-w-7xl">
				<PortableText value={insight.body} />
			</div>

			<div className="mt-5 border-t border-slate-200">
				<div className="flex flex-col md:flex-row md:space-x-4 my-4">
					<h4 className="text-sm font-semibold mb-2 md:mb-0 whitespace-nowrap text-slate-600">Tags linked to this Insight article:</h4>
					<div className="flex flex-wrap">
						{
							insight.tags.map(tag => (
								<InsightTag 
									key={tag._id} 
									title={tag.title} 
									description={tag.description} 
									className="mr-4 mb-2"	
								/>
							))
						}
					</div>
					
				</div>
				
			</div>

			{/* more */}
			<div className="my-9">
				<MoreInsights insight={insight} />
			</div>
		</Container>
	)
}