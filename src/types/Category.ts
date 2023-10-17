
import { PortableTextBlock } from "sanity";

export type Category = {
	_id: string;
	_createdAt: Date;
	title: string;
	slug: string;
	description: PortableTextBlock[];
	metaDescription:string,
	keywords:string,
}