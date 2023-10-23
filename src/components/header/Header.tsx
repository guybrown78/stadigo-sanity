import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import { Subscribe } from "@/components/subscribe/Subscribe";

export default async function Header() {
	// get all pages
	const pages = await getPages();
	return (
		<header className="mb-10 py-3">
			<div className="flex flex-row justify-between items-center max-w-5xl mx-auto w-full">
				<Link href="/" className="w-28">
					<Logo />
				</Link>
					
					<ul className="flex justify-end list-none space-x-4 text-sm text-gray-600">
						{
							pages.map(page => (
								<li key={page._id}>
									<NavLink slug={page.slug}>
										{page.title}
									</NavLink>
									
								</li>

							))
						}
						<li>
							 <Subscribe />
						</li>
					</ul>
						
			</div>
		
		</header>
	)
}