import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";
cleanupOutdatedCaches();
self.skipWaiting();
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

/*
Source:
https://github.com/unkuz/instagram-nuxt3/blob/main/public/sw.js
https://github.com/R0N1n-dev/nuxt3-pwa/blob/main/sw.js
*/
