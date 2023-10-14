
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './src/sanity/schemas';

const config = defineConfig({

	projectId: "iiusl7yw",

	dataset: "production",

	title: "Stadium Website",

	useCdn: true,
	apiVersion: "2023-04-04",

	basePath: "/admin",

	plugins: [deskTool()],

	schema: { types: schemas }
})

export default config;