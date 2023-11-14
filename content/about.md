# About
Nuxt-content PWA with [Giscus](https://giscus.app/){:target="_blank" .text-blue-500 .hover:text-blue-600 .transition-colors .duration-300 .justify-center} - a _GitHub-commenting_-plugin.

This repo/deployment is a clean Nuxt-content init (+ giscus), and was a reproduction to find out why **giscus** wasn't working.

I found the answer here:  
[wite-pwa/nuxt/issues/79](https://github.com/vite-pwa/nuxt/issues/79){:target="_blank" .text-blue-500 .hover:text-blue-600 .transition-colors .duration-300 .justify-center}

The keywork that set me on the right path was `dynamic route`-problem.
