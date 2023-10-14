import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Header() {
	// get all pages
	const pages = await getPages();
	return (
		<header className="mb-10 py-3">
			<div className="flex flex-row justify-between items-center max-w-5xl mx-auto w-full">
					<Link
						href="/"
						className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent text-lg drop-shadow-md font-bold"
					>Home</Link>
					<ul className="flex justify-end list-none space-x-4 text-sm text-gray-600">
						{
							pages.map(page => (
								<li key={page._id}>
									<Link href={`/${page.slug}`} className="hover:underline">
										{page.title}
									</Link>
								</li>
							))
						}
					</ul>
					
			</div>
		
		</header>
	)
}