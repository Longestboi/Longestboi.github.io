"use strict";var precacheConfig=[["/2021/03/games-with-a-sndata-header-section.html","2a66a8c87684a5cede18b6e597bbc6ea"],["/2022/09/project-1-engine-basics-teachback.html","02e630526eec7c2dd3f9e669a1499b5f"],["/2022/10/a-day-in-the-life-video.html","c9805a863507a89a144a3763d1e6552e"],["/2022/10/eng301-3-blog-posts.html","3c8c0b519f1ca4e8fa30c4e271037b54"],["/2022/10/how-to-gain-employment-in-games-programming.html","3d6efd6d6a979533f32a641dac88547e"],["/2022/10/project-1-functions.html","a67c26aaf5578a2cabd1fecf609a455e"],["/2022/10/project-2-gpe338.html","dba75f8aa966acfe3d253e8d484feda4"],["/2022/10/studying-game-industry-infographic.html","c40f3c09f53c57e3de4e460c5afd6472"],["/404.html","2871cf01c7f0ab83ee9c2203cc8cf2d8"],["/_pages/index.html","387757d4293db5816ac15cd28994571c"],["/_pages/page/2/index.html","aba8508c0be30d8edbc07dd65f91c285"],["/_pages/sort-by-tags.html","1dfbd1574cfff9b12485933e122c0725"],["/about/index.html","cf83f48eac03167a122ffeff34238835"],["/apple-touch-icon.png","df2ba81d193e75e01b2331e3f31cfb27"],["/assets/img/Project 1 - engine basics teachback/logo-unity-web.png","5f72f8c40720de8b02ef82cdb3276b72"],["/assets/img/Project 1 - engine basics teachback/unity-create-project-page.png","1744fe2aec14c8d36fcf70e68181f249"],["/assets/img/Project 1 - engine basics teachback/unity-new-project-page.png","5e72e11c4cbd87c9863132743d715970"],["/assets/img/Project 1 - functions/Output-from-the-Delgate.png","ea30222e9eb5df93d983d2ccaadcb925"],["/assets/img/Project 2/GetterAndSetter.png","032fe8d999e917669dd0b5003357d4e7"],["/assets/img/Project 2/Interface.png","6e369d5d3721498e3238655d798e7bdf"],["/assets/img/Project 2/TextureLoad.png","29340d3b5388abfe89e2f49380d92bad"],["/assets/img/Project 2/namespace-textureLoad.png","9c4635e8523051550be65f7641ac1b13"],["/assets/img/Project 2/namespace.png","630906a252086ef54662c6101d0f8c60"],["/assets/img/Project 4 - GPE338/Attributes.png","7b26ceaf7518605814a7adc69d6c6581"],["/assets/img/Project 4 - GPE338/Custom_Property_Drawer.png","677b94b7b7bbfac529b4b3d685888102"],["/assets/img/Project 4 - GPE338/EditorScriptingDone.png","ce971c8161d60accff7332b46713b2a6"],["/assets/img/Project 4 - GPE338/namespace.png","630906a252086ef54662c6101d0f8c60"],["/assets/img/Projects/Sndata-Examp.png","e38dc71550029b05e210a6e6aa464cca"],["/assets/img/Projects/TNES2INESGUI.png","9f343c6ec3648086993bf1a7cb1313d1"],["/assets/img/Projects/Wordle-Picture.png","398c9c55e2da7178842e3d0cb6386d0a"],["/assets/pcss/blogSummary.9fff6b48.css","9fff6b488d156fae49a9aab8a5b8cf22"],["/assets/pcss/classwork.341bd8c6.css","341bd8c6434c8a97e61e4b305b4d018f"],["/assets/svg/Andrew_Long.svg","fcdad2d27b5fc4aa4d238188a7c976ed"],["/assets/svg/amsf.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/assets/svg/heading-image-example.svg","97f9ed1a1221d5353362b35a991414f3"],["/assets/themes/curtana/js/lightense.min.328ac817.js","328ac8176d02ecd57d914cca99b0c2dd"],["/blog/index.html","ce0c92d252d99f3aa9289a782be7233a"],["/boards/index.html","89c78e0b419a143e1c5b49fa225cb3d6"],["/favicon.png","df2ba81d193e75e01b2331e3f31cfb27"],["/favicon.svg","4c4b6021ac5dbb8e0ee53e77ddb52336"],["/faviconmod.svg","4c4b6021ac5dbb8e0ee53e77ddb52336"],["/index.html","9747d4d2636958a8270c1de2610227f1"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/mask-icon.svg","004f76995509ef6bc4fe131d3b89913b"],["/projects/index.html","e945e1063b223896a05ed933c2865d83"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,!1);return[c.toString(),n]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then((function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(t,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!a.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return fetch(e.request)})))}}));