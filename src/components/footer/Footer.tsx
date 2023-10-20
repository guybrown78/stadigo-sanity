
import Link from "next/link";
import { Container } from "@/components/Container";
import FooterNav from "@/components/footer/FooterNav";
import FooterBasement from "@/components/footer/FooterBasement";
import FooterLegalLinks from "@/components/footer/FooterLegalLinks";



export default function Footer() {
	// get all pages
	// const pages = await getPages();
	return (
		<footer className="mt-5 border-t border-slate-200/50 bg-slate-100">
			<Container>
				<div className="pb-8 pt-24 lg:pt-32">
					<div className="xl:grid xl:grid-cols-3 xl:gap-8">

						{/* Company Info */}
						<div className="space-y-8">
							{/* Logo */}
            	<p className="text-sm leading-6 text-slate-600">
								Stadigo seo info
							</p>
							<div className="flex space-x-6">
								<Link href="/">LinkedIn</Link>
								<Link href="/">X</Link>
							</div>
						</div>

						{/* Nav items */}
						<FooterNav />


					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-0 my-8">
					<FooterLegalLinks />
				</div>
				
			</Container>


			<FooterBasement />

		</footer>
	)
}