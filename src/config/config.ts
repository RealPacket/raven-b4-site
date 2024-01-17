// set this in production to "/raven-b4-site/"
export const BASE_PATH = "/raven-b4-site/";
if (!BASE_PATH.endsWith("/")) {
	throw new Error("base path is malformed!");
}
