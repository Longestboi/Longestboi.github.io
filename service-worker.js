"use strict";var precacheConfig=[["/2021/03/games-with-a-sndata-header-section.html","01df8c5af9ab39efe0426e04798ca038"],["/2022/09/project-1-engine-basics-teachback.html","549b11b6777e65b0d8b8a8f18a8b66f6"],["/2022/10/a-day-in-the-life-video.html","b5366d3f5407069890f3994f6132c951"],["/2022/10/eng301-3-blog-posts.html","d382bd42e4d5c0de62eb35a9505a3985"],["/2022/10/how-to-gain-employment-in-games-programming.html","96eff643fec32f213467f9d86a7ce778"],["/2022/10/project-1-functions.html","11b3373ea1daadfd984164a7c151dcd9"],["/2022/10/project-2-gpe338.html","ce1c9d93dcc059e6a19870311f52217b"],["/2022/10/studying-game-industry-infographic.html","4c48c61969fcb02b77b679266a9690fd"],["/404.html","dbd0d2c9451603d9a8568219268121df"],["/_pages/index.html","387757d4293db5816ac15cd28994571c"],["/_pages/page/2/index.html","aba8508c0be30d8edbc07dd65f91c285"],["/_pages/sort-by-tags.html","aec48e6f4399943641b8cf3e4b1e4b4b"],["/about/index.html","211c571efc7fcd5b1c0d8035c66a6857"],["/apple-touch-icon.png","df2ba81d193e75e01b2331e3f31cfb27"],["/assets/img/Project 1 - engine basics teachback/logo-unity-web.png","5f72f8c40720de8b02ef82cdb3276b72"],["/assets/img/Project 1 - engine basics teachback/unity-create-project-page.png","1744fe2aec14c8d36fcf70e68181f249"],["/assets/img/Project 1 - engine basics teachback/unity-new-project-page.png","5e72e11c4cbd87c9863132743d715970"],["/assets/img/Project 1 - functions/Output-from-the-Delgate.png","ea30222e9eb5df93d983d2ccaadcb925"],["/assets/img/Project 2/GetterAndSetter.png","032fe8d999e917669dd0b5003357d4e7"],["/assets/img/Project 2/Interface.png","6e369d5d3721498e3238655d798e7bdf"],["/assets/img/Project 2/TextureLoad.png","29340d3b5388abfe89e2f49380d92bad"],["/assets/img/Project 2/namespace-textureLoad.png","9c4635e8523051550be65f7641ac1b13"],["/assets/img/Project 2/namespace.png","630906a252086ef54662c6101d0f8c60"],["/assets/img/Projects/Sndata-Examp.png","e38dc71550029b05e210a6e6aa464cca"],["/assets/img/Projects/TNES2INESGUI.png","9f343c6ec3648086993bf1a7cb1313d1"],["/assets/img/Projects/Wordle-Picture.png","398c9c55e2da7178842e3d0cb6386d0a"],["/assets/pcss/blogSummary.9fff6b48.css","9fff6b488d156fae49a9aab8a5b8cf22"],["/assets/pcss/classwork.341bd8c6.css","341bd8c6434c8a97e61e4b305b4d018f"],["/assets/svg/Andrew_Long.svg","fcdad2d27b5fc4aa4d238188a7c976ed"],["/assets/svg/amsf.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/assets/svg/heading-image-example.svg","97f9ed1a1221d5353362b35a991414f3"],["/assets/themes/curtana/js/lightense.min.328ac817.js","328ac8176d02ecd57d914cca99b0c2dd"],["/blog/index.html","94124ed5f5cf98c814ef440d5a3ea48d"],["/boards/index.html","304073d7ee2bff7493911b67cc78a668"],["/favicon.png","df2ba81d193e75e01b2331e3f31cfb27"],["/favicon.svg","4c4b6021ac5dbb8e0ee53e77ddb52336"],["/faviconmod.svg","4c4b6021ac5dbb8e0ee53e77ddb52336"],["/index.html","596a9859a39b8f226428bbb952a47ba2"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/mask-icon.svg","004f76995509ef6bc4fe131d3b89913b"],["/projects/index.html","462314a6d02736d9f114292e2c184add"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some((function(e){return a.match(e)}))},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then((function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(a,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(a){return Promise.all(a.map((function(a){if(!t.has(a.url))return e.delete(a)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(a)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return fetch(e.request)})))}}));