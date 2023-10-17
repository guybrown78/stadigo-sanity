import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Insight } from "@/types/Insight";

export async function getProjects():Promise<Project[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
	)
}

export async function getProject(slug:string):Promise<Project> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`, 
		{ slug }
	)
}

export async function getPages():Promise<Page[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
	)
}
export async function getPage(slug:string):Promise<Page> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
			content
    }`, 
		{ slug }
	)
}
export async function getInsights():Promise<Insight[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "insightArticle"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
			overview,
			publishedAt,
			"coverImage": image.asset->url,
			author-> {
				name, 
				"image": image.asset->url
			},
			categories[]->{
				_id,
				title,
				"slug": slug.current,
			},
			tags[]->{
				_id,
				title,
				description
			},
			body
    }`
	)
}

export async function getInsight(slug:string):Promise<Insight> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "insightArticle" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
			overview,
			publishedAt,
			"coverImage": image.asset->url,
			author-> {
				name, 
				"image": image.asset->url
			},
			categories[]->{
				_id,
				title,
				"slug": slug.current,
			},
			tags[]->{
				_id,
				title,
				description
			},
			body
    }`, 
		{ slug }
	)
}