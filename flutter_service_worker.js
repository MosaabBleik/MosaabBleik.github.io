'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bf54022b7a1d42865bba9a8c0dab6ad4",
"assets/FontManifest.json": "d2f9fbf23ac585ba6707461a89cb9aa4",
"assets/fonts/ElMessiri-Bold.ttf": "286ef705c6bd954162a3f7cc3de64f1d",
"assets/fonts/ElMessiri-Medium.ttf": "3b70155662023f0f4e6ffd53e3277e55",
"assets/fonts/ElMessiri-Regular.ttf": "ecd6ec55d5899a286bbd93ed148992b4",
"assets/fonts/ElMessiri-SemiBold.ttf": "b0d8c4bd377d00c6113eb1532d28579a",
"assets/fonts/Lora-Bold.ttf": "f8a8025761dea9b2d5663f39f1c031a8",
"assets/fonts/Lora-Regular.ttf": "b9a84ed258ff832ebfaa6bf20c3b6bb9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/images/Anony_profile.png": "b6681619dcc616623083589aa826d2be",
"assets/images/appointments.png": "343fb1b23e1076303b09d59900de0b42",
"assets/images/Calendar.png": "61287ba4d53208a3d3941874dfd347f3",
"assets/images/cases.png": "7a536b91e0ecc82fa58b1e11ac74c2ee",
"assets/images/change_lang.png": "870011ca7eeb13ada398007ba9c49511",
"assets/images/consulting.png": "45879090a75cf417e5708c93455d34b4",
"assets/images/contracts.png": "388fada1b62dc7dcbb28ce80361d83ab",
"assets/images/deniedEmail.png": "450eb6d366196a631a2b955e8e88a6aa",
"assets/images/email_icon.png": "e3f87ac05f7da72e466cc3bd6b26ee17",
"assets/images/Hammer.png": "a4da3bb0acfa4bf20fcadabb64b23f84",
"assets/images/hourT.png": "82c70fe755238018b999acacc7bd10d2",
"assets/images/Logo.png": "0ad15d09ef768dc3d800d1432e68e458",
"assets/images/Logo2.png": "0ad15d09ef768dc3d800d1432e68e458",
"assets/images/pot_cases.png": "d902c5bdb115a9007afcab3554e130ea",
"assets/images/previous.png": "7d98e3ac13828e0963c0903336343c46",
"assets/images/recievedEmail.png": "2db51917f4d323f5aa14c0216b8adc31",
"assets/images/rel_rules.png": "9c8f0cfc03cdb83b87ca8040825cfc02",
"assets/images/researches.png": "bbbe03bc56abb1f2b980f21179b7d2af",
"assets/images/role_icon.png": "b982b44bb57b3f038e3b562f8ec655e3",
"assets/images/rules.png": "46887933059d84db48fa461120f9c4de",
"assets/images/services.png": "b9172b43e2745486019d773b9a7d9b0f",
"assets/images/Splash_logo.png": "c6a320cb444713da248d0013bf7d0efa",
"assets/NOTICES": "2b0f28c132760d086c898dceb774f1ac",
"assets/packages/timezone/data/latest_all.tzf": "016df80452fa51f0f61403cd259f2366",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "aac7852b9e92ca8b19c68b6534ffd00b",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Logo.png": "0ad15d09ef768dc3d800d1432e68e458",
"index.html": "7088f1715be7b00a7ab527823f393ab7",
"/": "7088f1715be7b00a7ab527823f393ab7",
"main.dart.js": "202b114a5db2bc3bbb18575d12ea79a8",
"manifest.json": "b88d8b782f7348df1954c1bbf2865275",
"script.js": "b3d0451bfae78701a6a77ea4b04be407",
"splash/img/dark-1x.png": "ab015b08c9f709ed3b825dfca2445a93",
"splash/img/dark-2x.png": "89ec36b5fb881418b10a73083fb88dd9",
"splash/img/dark-3x.png": "d188d06b156113f1a955bcc146c9742a",
"splash/img/dark-4x.png": "b9459d6f0ebd04be07331e81171f541b",
"splash/img/light-1x.png": "ab015b08c9f709ed3b825dfca2445a93",
"splash/img/light-2x.png": "89ec36b5fb881418b10a73083fb88dd9",
"splash/img/light-3x.png": "d188d06b156113f1a955bcc146c9742a",
"splash/img/light-4x.png": "b9459d6f0ebd04be07331e81171f541b",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"version.json": "64de2748bdfc6b1b9d3a9d6d0f352a68"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
