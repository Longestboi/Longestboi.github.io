"use strict";var precacheConfig=[["/2021/03/games-with-a-sndata-header-section.html","01df8c5af9ab39efe0426e04798ca038"],["/2022/09/project-1-engine-basics-teachback.html","d22d2f50291ff0a4984ac2728f6f2915"],["/2022/10/a-day-in-the-life-video.html","328083c95d777f7a33b74eb123d6b609"],["/2022/10/eng301-3-blog-posts.html","38e81cb11cd7ef949a55f96c64378f5a"],["/2022/10/how-to-gain-employment-in-games-programming.html","9f879a354c914092536aeeae00b12b50"],["/2022/10/project-1-functions.html","d29503930c510d5eb97a1460f54b63ce"],["/2022/10/studying-game-industry-infographic.html","24f1f3f71f10c98a9d246003ef090b02"],["/404.html","dbd0d2c9451603d9a8568219268121df"],["/_pages/index.html","510220e8861b5c549bcd10fb49f45976"],["/_pages/sort-by-tags.html","dbe34bb917123e8ccb2033cdab0d0084"],["/about/index.html","211c571efc7fcd5b1c0d8035c66a6857"],["/apple-touch-icon.png","df2ba81d193e75e01b2331e3f31cfb27"],["/assets/img/Project 1 - engine basics teachback/logo-unity-web.png","5f72f8c40720de8b02ef82cdb3276b72"],["/assets/img/Project 1 - engine basics teachback/unity-create-project-page.png","1744fe2aec14c8d36fcf70e68181f249"],["/assets/img/Project 1 - engine basics teachback/unity-new-project-page.png","5e72e11c4cbd87c9863132743d715970"],["/assets/img/Project 1 - functions/Output-from-the-Delgate.png","ea30222e9eb5df93d983d2ccaadcb925"],["/assets/img/Projects/Sndata-Examp.png","e38dc71550029b05e210a6e6aa464cca"],["/assets/img/Projects/TNES2INESGUI.png","9f343c6ec3648086993bf1a7cb1313d1"],["/assets/img/Projects/Wordle-Picture.png","398c9c55e2da7178842e3d0cb6386d0a"],["/assets/pcss/blogSummary.9fff6b48.css","9fff6b488d156fae49a9aab8a5b8cf22"],["/assets/pcss/classwork.74fcdd6c.css","74fcdd6c9e89034145303519099f78f0"],["/assets/svg/Andrew_Long.svg","fcdad2d27b5fc4aa4d238188a7c976ed"],["/assets/svg/amsf.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/assets/svg/heading-image-example.svg","97f9ed1a1221d5353362b35a991414f3"],["/assets/themes/curtana/js/lightense.min.328ac817.js","328ac8176d02ecd57d914cca99b0c2dd"],["/blog/index.html","6fd3b487c77905640692156a930e7a03"],["/boards/index.html","304073d7ee2bff7493911b67cc78a668"],["/favicon.png","df2ba81d193e75e01b2331e3f31cfb27"],["/favicon.svg","4c4b6021ac5dbb8e0ee53e77ddb52336"],["/faviconmod.svg","4c4b6021ac5dbb8e0ee53e77ddb52336"],["/index.html","163aa7c8763c5f40b473bf87f6db613e"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/mask-icon.svg","004f76995509ef6bc4fe131d3b89913b"],["/projects/index.html","a27eeae5206c26ecd574dcbbe18d6fa5"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some((function(e){return a.match(e)}))},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then((function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(a,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(a){return Promise.all(a.map((function(a){if(!t.has(a.url))return e.delete(a)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(a)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return fetch(e.request)})))}}));