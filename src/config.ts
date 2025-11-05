// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE =
  "Bando Mega Kusuma | Software Engineer & Frontend Developer";
export const SITE_DESCRIPTION =
  "'m Bando Mega Kusuma, a Software Engineer and Frontend Developer. Explore my portfolio, projects, blog, and ways to connect with me.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME =
  "Bando Mega Kusuma | Software Engineer & Frontend Developer";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
