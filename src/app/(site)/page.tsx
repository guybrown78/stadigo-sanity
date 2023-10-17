import LatestInsights from "@/components/LatestInsights"
import StadiumCard from "@/components/StadiumCard"
import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {

	const projects = await getProjects()

	
  return (
		<>
			<div className="max-w-5xl mx-auto w-full">
				{/* bg-gradient-to-right from-green-400 to-green-600 */}
				<h1 className="text-5xl font-semibold">Welcome to <span className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Stadium</span></h1>
				<p className="mt-3 text-xl text-gray-600">Local sports stadiums in our region.</p>

				<h2 className="mt-24 text-3xl font-semibold text-gray-700">Football Stadiums</h2>

				<div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

					{projects.map((project) => (
						<StadiumCard key={project._id} project={project} />
					))}

				</div>
						
				<div className="mt-5">
					<LatestInsights />
				</div>
				
			</div>
		</>
   
  )
}
