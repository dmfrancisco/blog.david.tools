"use strict";var precacheConfig=[["/index.html","f86d3e8e845925baa576ae141b3b3a70"],["/static/css/main.0c25c109.css","5bbeeb72a8b309e0cffcddd49a26aeae"],["/static/js/0.b4eb5505.chunk.js","f7a88c4606e8ad62b178e3c9ad66312c"],["/static/js/1.11ba7f0e.chunk.js","3f0fd3250879009e761acc8b88188232"],["/static/js/main.8c13bf82.js","d978c8eb490258c2fb8ea0301cb36fe5"],["/static/media/karla-latin-400.27b852a4.woff2","27b852a41d0b7a4ca2b3e454402ee785"],["/static/media/karla-latin-400.915346bf.woff","915346bfd9a2b9d72abda4f1eea7f9de"],["/static/media/karla-latin-400italic.31cc10ef.woff","31cc10ef17802f05967cc7c7680053f8"],["/static/media/karla-latin-400italic.b89fa7ab.woff2","b89fa7ab14573571587dc9d047630526"],["/static/media/karla-latin-700.d14b8b21.woff2","d14b8b2172b9b804e16779b4a8a430de"],["/static/media/karla-latin-700.defc2f6a.woff","defc2f6ab28ecaa4dda00cc0d470fce3"],["/static/media/karla-latin-700italic.3b267e58.woff","3b267e58615ce11711d6c588218257b9"],["/static/media/karla-latin-700italic.ae1a7971.woff2","ae1a797150f46a4617a00004580fb811"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});