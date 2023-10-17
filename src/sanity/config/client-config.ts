
const config = {
	projectId: String(process.env.SANITY_PROJECT_ID),

	dataset:  String(process.env.SANITY_DATASET),
	
	useCdn: true,

	apiVersion: String(process.env.SANITY_API_VERSION),
};

export default config