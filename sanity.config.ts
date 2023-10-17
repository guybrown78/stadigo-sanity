
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './src/sanity/schemas';

const config = defineConfig({

	projectId: String(process.env.SANITY_PROJECT_ID),

	dataset:  String(process.env.SANITY_DATASET),

	title: "Stadium Website",

	useCdn: true,

	apiVersion: String(process.env.SANITY_API_VERSION),

	basePath: "/admin",

	plugins: [deskTool()],

	schema: { types: schemas }
})

export default config;	