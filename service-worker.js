"use strict";var precacheConfig=[["/2021/03/games-with-a-sndata-header-section.html","1ed72c63f7c401abe92f3040186fa671"],["/2022/09/project-1-engine-basics-teachback.html","dde5ec1ecedbd461799680393fd35a70"],["/2022/10/a-day-in-the-life-video.html","b20527d8e4304df47d0d1fff074c2b59"],["/2022/10/eng301-3-blog-posts.html","07fc22a61e2b13a0c0774eaa3abf382e"],["/2022/10/how-to-gain-employment-in-games-programming.html","ba7921b935348d014a2cfac59eb755f8"],["/2022/10/project-1-functions.html","56820c5620c33be99396a908c43f6740"],["/2022/10/project-2-gpe338.html","0ab306940bae793b601c1c393064d78b"],["/2022/10/studying-game-industry-infographic.html","6b6769ded071bd82b9c686e9d049277c"],["/2022/12/project-4-gpe338.html","0db792ded5d3053da56beb0199199b5b"],["/404.html","5bbb3b808063a62512541f8a164bacbc"],["/Simple-Card-Deleter.html","3ffb17c79b17025f32a7b9a88e44eaa7"],["/Simple-Card-Deleter/card-delete.html","7ec16dbcdc80d4636e9fb9048373864a"],["/_pages/index.html","9575dfb0b1017c4185ec3bb6b1718327"],["/_pages/page/2/index.html","6812f121b136db1cf099952eb95645f3"],["/_pages/sort-by-tags.html","399087d9d9e21eee6db048b5e1a81982"],["/about/index.html","f9a99ee1446890893e65b1d94b63c6a9"],["/apple-touch-icon.png","df2ba81d193e75e01b2331e3f31cfb27"],["/assets/img/Project 1 - engine basics teachback/logo-unity-web.png","5f72f8c40720de8b02ef82cdb3276b72"],["/assets/img/Project 1 - engine basics teachback/unity-create-project-page.png","1744fe2aec14c8d36fcf70e68181f249"],["/assets/img/Project 1 - engine basics teachback/unity-new-project-page.png","5e72e11c4cbd87c9863132743d715970"],["/assets/img/Project 1 - functions/Output-from-the-Delgate.png","ea30222e9eb5df93d983d2ccaadcb925"],["/assets/img/Project 2/GetterAndSetter.png","032fe8d999e917669dd0b5003357d4e7"],["/assets/img/Project 2/Interface.png","6e369d5d3721498e3238655d798e7bdf"],["/assets/img/Project 2/TextureLoad.png","29340d3b5388abfe89e2f49380d92bad"],["/assets/img/Project 2/namespace-textureLoad.png","9c4635e8523051550be65f7641ac1b13"],["/assets/img/Project 2/namespace.png","630906a252086ef54662c6101d0f8c60"],["/assets/img/Project 4 - GPE338/Attributes.png","7b26ceaf7518605814a7adc69d6c6581"],["/assets/img/Project 4 - GPE338/Custom_Property_Drawer.png","75c1b86d5c061897272129d46068d49d"],["/assets/img/Project 4 - GPE338/EditorScriptingDone.png","ce971c8161d60accff7332b46713b2a6"],["/assets/img/Project 4 - GPE338/ScriptableObjectCode.png","8ef6e534c3ef8c88eb89afeaac2c0cbe"],["/assets/img/Project 4 - GPE338/ScriptableObjectProperty.png","ec914075898667819bc65e3c3ac4d0c6"],["/assets/img/Project 4 - GPE338/duplicateFound.png","313959bc7e91645e2e995df6d12912ec"],["/assets/img/Project 4 - GPE338/namespace.png","630906a252086ef54662c6101d0f8c60"],["/assets/img/Projects/Sndata-Examp.png","e38dc71550029b05e210a6e6aa464cca"],["/assets/img/Projects/TNES2INESGUI.png","9f343c6ec3648086993bf1a7cb1313d1"],["/assets/img/Projects/Wordle-Picture.png","398c9c55e2da7178842e3d0cb6386d0a"],["/assets/img/Trello/Simple-Card-Deleter-Logo.png","b1f4e17888c45235dbdb9a15f0c07a2e"],["/assets/img/Trello/Simple-Card-Deleter-Logo.svg","a6b230ae75d93cd673661b1ddb21d34d"],["/assets/img/Trello/trash-icon.svg","e61545e0cbf170f5c2a2bc539fd644db"],["/assets/pcss/blogSummary.9fff6b48.css","9fff6b488d156fae49a9aab8a5b8cf22"],["/assets/pcss/classwork.0c335158.css","0c335158a8a45a6a3fc3a1742af9a930"],["/assets/svg/Andrew_Long.svg","fcdad2d27b5fc4aa4d238188a7c976ed"],["/assets/svg/amsf.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/assets/svg/heading-image-example.svg","97f9ed1a1221d5353362b35a991414f3"],["/assets/themes/curtana/js/lightense.min.328ac817.js","328ac8176d02ecd57d914cca99b0c2dd"],["/blog/index.html","35022146fb4b355829052776c927e59d"],["/boards/index.html","5b429787571a065fd3e7d9819b181aab"],["/favicon.png","df2ba81d193e75e01b2331e3f31cfb27"],["/favicon.svg","4c4b6021ac5dbb8e0ee53e77ddb52336"],["/faviconmod.svg","4c4b6021ac5dbb8e0ee53e77ddb52336"],["/index.html","000b3678f2cf87cd1e7222f8211de265"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/mask-icon.svg","004f76995509ef6bc4fe131d3b89913b"],["/projects/index.html","d03f7c9764b70c5d90a43efa0fda31d1"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,!1);return[c.toString(),s]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then((function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(t,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!a.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return fetch(e.request)})))}}));