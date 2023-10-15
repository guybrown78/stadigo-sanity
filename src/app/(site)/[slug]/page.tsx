
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";


type Props = {
	params: { slug:string }
}

export default async function Page({ params }:Props){

	const slug = params.slug;
	const page = await getPage(slug)

	return (
		// max-w-5xl mx-auto 
		<div className="max-w-5xl mx-auto w-full py-10 ">

			{/* <header className="flex justify-between items-center">  */}
				<h1 className="mt-2 bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent text-3xl drop-shadow-md font-extrabold mr-10">{page.title}</h1>
			{/* </header> */}


			<div className="mt-5 prose prose-slate lg:prose-xl prose-a:text-green-600">
				<PortableText value={page.content}/>
			</div>


		</div>
	)
}