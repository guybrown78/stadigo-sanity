import { Container } from "@/components/Container";
import { PortableText } from "@portabletext/react";

import { getCategories } from "@/sanity/sanity-utils";




export default async function Categories() {

	const categories = await getCategories();

	return (
		<Container>
			<div className="max-w-4xl">
				<h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Stadigo Insight Categories</h1>
				<p className="mt-4 text-base leading-8 text-slate-600">
				At Stadigo, our commitment to delivering comprehensive insights and innovations in stadium safety and competency assurance is unwavering. To ensure our readers have easy access to a wealth of knowledge, we&apos;ve meticulously crafted each of our articles to encompass at least one category. These categories serve as a structured framework to help you navigate and explore our extensive content library. Whether you&apos;re interested in the digital transformation of sports venues, strategies for enhancing the fan experience, or the latest innovations in stadium management, our categories are designed to bring clarity and ease to your browsing experience. By organising our articles under these categories, we aim to provide you with a seamless journey through the world of stadium excellence, empowering you with valuable insights and solutions.</p>
				<p className="mt-2 text-base leading-8 text-slate-600">
				Welcome to our knowledge hub, where you can discover the future of stadium safety and competency assurance, one category at a time.
				</p>
			</div>

			<div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
			{/* <ul className=""> */}
				{categories.map((category) => 
					<div key={category._id} className="flex flex-col items-start justify-start shadow-md rounded-md p-4">
						<h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900">
							{category.title}
						</h3>
						<div className="mt-5 prose prose-slate prose-sm">
							<PortableText value={category.description} />
						</div>
					</div>
				)}

			{/* </ul> */}
			
			</div>
		</Container>
	)
}