"use strict";var precacheConfig=[["/2021/03/games-with-a-sndata-header-section.html","352feb5a56742ac3a9f6e93d50cc9099"],["/2022/09/project-1-engine-basics-teachback.html","28b4e5316a09d2cfdf69e8de726f5947"],["/404.html","6cce183b58b3a701c5efcbdac1573c0b"],["/_pages/index.html","ebd33a7cbc4d258439b1ec0c84dfe1b0"],["/_pages/sort-by-tags.html","3dd472b3ed89519d064ef3b6c4f170c1"],["/about/index.html","2b32fa4e62e9389587d753a9ac0aa0cd"],["/apple-touch-icon.png","df2ba81d193e75e01b2331e3f31cfb27"],["/assets/img/Project 1 - engine basics teachback/logo-unity-web.png","5f72f8c40720de8b02ef82cdb3276b72"],["/assets/img/Project 1 - engine basics teachback/unity-create-project-page.png","1744fe2aec14c8d36fcf70e68181f249"],["/assets/img/Project 1 - engine basics teachback/unity-new-project-page.png","5e72e11c4cbd87c9863132743d715970"],["/assets/img/Projects/Sndata-Examp.png","e38dc71550029b05e210a6e6aa464cca"],["/assets/img/Projects/TNES2INESGUI.png","9f343c6ec3648086993bf1a7cb1313d1"],["/assets/img/Projects/Wordle-Picture.png","398c9c55e2da7178842e3d0cb6386d0a"],["/assets/pcss/classwork.6a506dbd.css","6a506dbd2ed2ce059360b9b056bc3031"],["/assets/svg/Andrew_Long.svg","fcdad2d27b5fc4aa4d238188a7c976ed"],["/assets/svg/amsf.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/assets/svg/heading-image-example.svg","97f9ed1a1221d5353362b35a991414f3"],["/assets/themes/curtana/js/lightense.min.328ac817.js","328ac8176d02ecd57d914cca99b0c2dd"],["/blog/index.html","e0ffb72f0b3fa019df4bc7b8e6709509"],["/boards/index.html","7bbbf3c834845a75e1eff52ea6a9d0f0"],["/favicon.png","df2ba81d193e75e01b2331e3f31cfb27"],["/favicon.svg","4c4b6021ac5dbb8e0ee53e77ddb52336"],["/faviconmod.svg","4c4b6021ac5dbb8e0ee53e77ddb52336"],["/index.html","7f1636555c75cb0301a464c37cfb4b09"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/mask-icon.svg","004f76995509ef6bc4fe131d3b89913b"],["/projects/index.html","376338d64cd04993404471bba8e7c9df"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some((function(e){return a.match(e)}))},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then((function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(a,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(a){return Promise.all(a.map((function(a){if(!t.has(a.url))return e.delete(a)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(a)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return fetch(e.request)})))}}));