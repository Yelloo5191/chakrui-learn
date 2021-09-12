// google analytics measurement id
const GA_TRACKING_ID = "";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

type MetaType = {
	title: string;
	lang: string;
	description: string;
	url: string;
	image: string;
	tags: string[];
};

const META: MetaType = {
	title: "Programming Simplified",
	lang: "en-us",
	description:
		"Landing page for Programming Simplified",
	url: "https://boilerplate.hazimarafa.tech",
	image: "/logo.png",
	tags: ["nextjs", "typescript", "chakraui", "google analytics", "eslint", "jest", "styled components", "icons"]
};

export { GA_TRACKING_ID, IS_PRODUCTION, META };
