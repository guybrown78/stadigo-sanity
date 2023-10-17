// import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
	params: { category:string }
}
export default async function Category({ params }:Props){

	const slug = params.category;
	// const project = await getProject(slug)

	return (
		<div className="max-w-5xl mx-auto w-full py-10">
			Category... {slug}
		</div>
	)
}