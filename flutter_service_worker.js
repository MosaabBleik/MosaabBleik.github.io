'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8b8a8b353298f798e3eb8628661617b6",
".git/config": "6bfcf552aa65fbc1a0df645a0021c2f4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cf52299156bbb4acac277b4d32bb2536",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0ec43572b36a5e71f757a4a562bc1d4f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ded898d6d5f1d29a767d3df9c88e33d",
".git/logs/refs/heads/main": "b2ec930d81ccb27aa7683aa2a9d84e75",
".git/logs/refs/remotes/origin/main": "02abc9a5e7d8f1ca91055b1b94289168",
".git/objects/01/30a38e240767ba33fa703040d0fe1f81380424": "f9b074d9b39db34000cb1b6968ffc999",
".git/objects/01/fcf3582dfe4a510fa88cb1095e91afdac38852": "1b4d07edca1275ab1f800cd2eb036b26",
".git/objects/03/0c64024ffc86234a0138a0cfeffddefd818969": "d9ddc8ad3c3cd4f321a62cb54c6232d2",
".git/objects/04/362cd6c588e1ee7d250cef685bb26cb1ec4309": "01f992d939efa8bd822a74595fb3a8c5",
".git/objects/08/290e61b24f94057cd73237559c73c7629c95d8": "b37a1202b290b71e5244a053f4d23ce4",
".git/objects/0a/2a509f90538054fdc4882431672dbda8e0982e": "b506cc0bb4032e8cf1bdcedcca8ce421",
".git/objects/0b/8e5d33cf86db327160c23feb63d823eb2bbfcd": "894e57a16871af6ea7c8eb03893c00f6",
".git/objects/13/95d53828a0accc55d0ffa2a1cd2da567a2d8a8": "53bb1adb6dda6b575dcf4592a73c93b9",
".git/objects/16/81b5e5320bd91252d2d0bbabd5d887229da09e": "f729a85281ba1e5a47218eba24cdedc8",
".git/objects/19/906823c81c06d72b2180eb1c3b7d2d9e70d5ca": "83b5fd4bfd483269db474f4ebd16d6db",
".git/objects/1c/04cc8c22f0abc3059634092d522d5f4891c41d": "a2d53705c1f03f8c77c0ebdb9f3cac4f",
".git/objects/20/54d4c188ed318ca62be5e8937ff0417cfb246c": "d6351f10902ccec42c2cdad9e59606c7",
".git/objects/21/d535307d9181c10ff750fc359f7184ede1036f": "5f19db8bda360a323b60ce444e664577",
".git/objects/21/eb74846ac8b9e60b5036baf22311874b811a39": "d97790eef9b8e5962b0c3bd485709a1c",
".git/objects/25/93119fd97458deb5ba72513968f4855d91adfa": "e52b7f222fe82abdd0ad2d0dd66edd99",
".git/objects/28/fcf828833255887056dd1060963a6419437710": "f4c6f4023f8a03a51e14490e6d8a54e8",
".git/objects/29/a05ad6d342377938cc9cadea8f31fa0d673af8": "11176ae5c31fa3b288753427f0741cf0",
".git/objects/2d/3959ca310b961c65fa22be3a0185cc488e2753": "4e8379efac09cfd9c49bcf36d21a89b6",
".git/objects/2f/29f116f7836767d2fe6b89e252211c642ff674": "0d6d287e3af4b05bd0d881ad4cb950a9",
".git/objects/31/cd08a387f6ab28e0f289217beff960d1c10356": "cfd28f5e36e4d7c0cfe0f4a8c93474f5",
".git/objects/33/904b3b675eb9328bee0fc7073e9a9109d86b0a": "35569b0d21af8cbeaae47a4f7b0f4a76",
".git/objects/37/42457900d51ae5c34ed53657ed8a72f17f19c6": "14c972e5155e5aa3bf2db2ef8589e81a",
".git/objects/3b/def9e1cf157945355c4f5a77e3bb00ab2417a9": "610ab267fa77306eeb018dd6209eea47",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "5094a76191110339c6815fd8ca04f5b7",
".git/objects/3f/5cd793a28df450123c6d24d3f576bf66f15b1c": "8a0cf898a5b2f8d52551489440d1b8af",
".git/objects/47/f851bb8b9e7005410ad46d23ba3b4ed46d40ab": "bfe7f3da09eaa441861b86bc53626c0b",
".git/objects/48/e8c4c05c61bb75139903c6d6b3c9533ce6e859": "72ae937bbd63b51c827bc14a1942ab75",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4c/016063f935f7e743bd350d51e12fffc2d0ca0f": "3fd17d0301d23cc1ec72a25ffabe09ec",
".git/objects/55/659c98b15d462d2758cd706f57f8b691c5fbd4": "91e831b5b9766a9b295696c46e59a12f",
".git/objects/55/969eb9205655efe173bf21f83c61ba38159807": "151df18dee4fbf835ac907fc63fac1b6",
".git/objects/57/69ef51e29f65a08d7725e84cba1870d2b2faeb": "1ff171bcb0b2e656189b1e78f4e678da",
".git/objects/5c/dffde69c78062dc5db78b07d9cf751d42384b6": "71d8e58223b44aefa5c701d9c98851da",
".git/objects/5c/f148a9b1e97103c054979f9379bdc81099816e": "5a2874266ad0430ae78f50d718963ddc",
".git/objects/5d/81ead5fab5ee2edcb95633e5aa853c88af952c": "a4d10f2b63df1cf57d51b060850e1e59",
".git/objects/5f/aa635c75d7d688cf7f153b1c1928a997234bec": "6485a0ba32214ed9444ba5b030cf7d88",
".git/objects/61/5a229280fc4a2f88bf2ab2fdd0243a90a82032": "a948fe08464d53b0cfab8d2b6de14dc7",
".git/objects/61/718c0422430c44bdac8c8015a7addad88997b8": "15052a7fa138d3678fcad4a38c49a51e",
".git/objects/6b/00682fc38ae0f9fd835b49881bbcd21f9b8134": "3dfb9967f88f598f41fd7bed53c3985e",
".git/objects/6d/418da9bc1e2fd8c1e76ae541312bae4ac8fc7b": "6d075a0dce062bc08a788e1d6aedc92b",
".git/objects/6d/75f96ab638ed628bd4023c8e67dff5eedee9a1": "ea01e3799becd526962de1c84181da86",
".git/objects/6f/bea0451b8740b708d2dd3cd5d93c99ea5f0426": "99c466932c052d4699015afdf42316b0",
".git/objects/72/f2c0f90692880fd0f66b19d23fe8939abf74b3": "b9c9ee6ec97ca47b5883b453bd9bcaca",
".git/objects/75/a08ed8cf8b83e677d8b820ff243526519c8509": "16f9075ca21efd76992979c39d497485",
".git/objects/75/ca3ba1838e783c2ad602e790042a76a93b8072": "c84e37cac6884fcc4a93038981dedfda",
".git/objects/77/d928a84d37fc04b5ff8d2d0b59cfce34dfed76": "63e40eedd760305280944a5d2b7eedba",
".git/objects/7b/92482b5ccb8740e3ac26beae48c509462f244e": "a1e2d6317c2b392729e6ce73af0ff132",
".git/objects/7b/f3b1c10a89c73ea53c7dc6905c3646f12970bf": "81ffdffc2e240268d33c7630b5aa95ad",
".git/objects/82/d9717c06a1233f883231be73db4aa30f5ee827": "87158d97a23a1edea7a828c931d1f13b",
".git/objects/83/03769843245bab69f2f5e1a5d1001877e3f77e": "98a1611508388332e9ccee12285c80b2",
".git/objects/83/68d9b5a255175e41adad5c2226f7887a6f05de": "1ef5a99d377d9e0b86859285b9ec0ecf",
".git/objects/83/6da2824c8c300ba47e8bbb89fa35ff88076f3e": "bb8f14dd53d976069812ed025c7820b8",
".git/objects/87/4aad73b3dca12e6207d03ce4a1b2e0d84f8c28": "4841700f34e8a429d984fb1ce7462225",
".git/objects/88/87d4567a175837722d8c19545277f19f076fae": "bc5c12ab4785ce1a9cba33380526fae2",
".git/objects/88/c44ea8b2eaf7e35d8d03b7f34affca14db5c0e": "cf3e835bcc4ec72cc663bc1140c1e442",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0cb024c11b24f82ad1b99a4e5e641b195d5fda": "9ce4f4854ab94b5c0a73b248529a2dbf",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/3eb6e380a47aa3db492c3d05d5f424234a3764": "a290e86eb4a7e1bfc8acb12d2eb9b5e4",
".git/objects/94/131f1b33cd1272739637dc5339f1a43005c603": "dd85d78a0ef50d6cb1f8b50fd1bb5ca5",
".git/objects/94/3578911d6bcb5366e20392f0dce5bb98542120": "6fdc7b50a79ca698a6e31f8938f55d3a",
".git/objects/95/a7a01391eed746e570ca1aa82887af51ee8619": "7266f43f13ca4507d33cac89fbd26da4",
".git/objects/97/b710d753e96f56b3f2170b2f13ad4136436c84": "6165fe34c92f5a0ef443c99e9c2abb70",
".git/objects/9b/7826b1cfa1d5242f4726a9b2e895145981d65b": "0b2acb7a51b745b3a4fc9195006ac10b",
".git/objects/9e/717894169a1bd55d8e4412825fba45ab69c79d": "d07f9ba51f7821c1e42678c8e172f290",
".git/objects/9e/b616790ffb3f114d8a698f649d96ed1e650359": "b86d245806d26d272c1c317f0179d3c7",
".git/objects/a5/cac3ce00a971f44380933f4825a47b62e21f3c": "7e55d8d496dffc145ef793e621d1fd2a",
".git/objects/a5/d7a31974f3354795cf5dc140fcb7a8c7803d88": "fdb5ea5b094376aae335614fc41ce291",
".git/objects/a7/79084ea3c0043a7ff21e0b7c3515115dec7ee2": "bfe9b7623097e5739a7672346a3e3f1b",
".git/objects/a8/3f486b33b6efbb28166a4921a229cdd9386035": "c296f3f27ac29960d4a2563f72b48390",
".git/objects/ac/d7a276a8d5f992f292c06f14cabbc15684eedf": "6575d0802140dda25ed5c060d0597249",
".git/objects/b1/38ad9d69cdb00d75e4a81288233d2610c0fa02": "32873ba9998be1b559b3f7fe497b02fd",
".git/objects/b3/a60f9fbc1abaf93bc0c2f000fcb87884fa0c1c": "c82423c525086701738436dc92b36409",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/3bb561f91f4b0b87badf858f948645ffaa6e5e": "33924205aafa885af06833cb3211edad",
".git/objects/bb/2d0cd9fbcb4af47e4045bb0304eb60bf65967f": "9616840f652a12491b2b8dedbfc61875",
".git/objects/bb/7fea9c08484280411ce08f1fecdcc7e5a06f77": "84b4e6327e42b4af3070fcf085ee4519",
".git/objects/bb/87268b556b0a2ed8ec69f7ffb6e20c31787d44": "3eff544602f19f5180af40acbcf720fe",
".git/objects/bc/1bc6ad7a147f645546edea9add773b861d1ce8": "7e9193350779300ddfcb8b6abfc7615c",
".git/objects/bd/54fd6a4d068c5814e681c35c3c50f38f1e6c49": "be034254f906b0a9787bcb2cbf981f41",
".git/objects/be/414b67a27f65de5dff24dd9efc38a024555e58": "486e2fa9c6b6a2a5f464ddcfad48ca89",
".git/objects/be/851b3c94860b38d1460445654e5958cd306150": "0e748b49ddc4e98d1febfdc4dd874c8a",
".git/objects/c2/552a75963da67210e5a7024e066fd684feeeef": "7ecfde5e16ee9fef878fe69409109a45",
".git/objects/c4/85abf1e661cc36ca8eec9efe0452c6f3793697": "6f60ba0fb1cc20b751142ea3ac053a22",
".git/objects/c9/10a789918530a3b9f02624f01aaf72c2758e93": "e1a04b8a8ab0b253736f799ebb8fc2f7",
".git/objects/d3/f0121aed3c57abd5ae3d42bd734ebc58374987": "b82e6ae9a339f5caec4021f6d096273e",
".git/objects/d5/6fb918e642f82a96d0184765cc2bc4a3ec9457": "053a44cacb6408afba4b96d2f8101d7b",
".git/objects/d5/c5e9f8b250890d1ced990b1f681a3cc1e9a9f2": "108be2f54c21b3482b6753d10357b4bd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c602ded63a037b8e28848585806888719d91ce": "78f3a54f5b4d331e97bc9c7b7acee7c2",
".git/objects/d7/a0a16b4e7f4c162b62929cf9dce2ef2802a6ce": "78316bd90a5aa93a29046de8310721ce",
".git/objects/d9/b306a561786c37dc1f5323cdaffb4ad7acdf2f": "9bf31c254a51edb07de76e7fe2ac6d2c",
".git/objects/da/67d6bb1a9cca7bd72a5cce04301d89324795e8": "18210ff1830ae9a44ce2cec34b5a011d",
".git/objects/da/eb112c15e1def9716c5293e1b57dd5cace4f3f": "a0d7f124fa300a379766a873e090d3b0",
".git/objects/e1/35c5aecc9ad4a18303464dba88a6dab932bb92": "5af6bc2ebbbe421b021e8642a10d2ef2",
".git/objects/e2/ac57d49986f95325437422f12f9cc0fde7128f": "7a75daec7f5729d649428e1ab1ce62f9",
".git/objects/e3/20671043dc77a4134598e499c66fda0cef8301": "8aad09216e23140e0dfa4862cd8a2559",
".git/objects/e5/55e57d0029cc7aac88f4d2103e9a3051fdfda3": "ec13fceb202cbd4375e664d8071a9e98",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c5a1468c260b569ae9a1a9d16bac18b01f7a05": "d0d600a3fe52eee7efdbe13d9ca2016d",
".git/objects/ef/da85a5be4bfa414ef414f49c809d1a81b22341": "c24e42e2ef14de4afd1245bcaaf7e70c",
".git/objects/f1/c81e88c19a2f83e2d0c3ad351c84daca0508c2": "c0fb5c544608100e56ee6a1b0f6e6309",
".git/objects/f1/ea0d28273f8366e8fc9077bc37f2588e555cd3": "20574854c2153ea0333ea16d6522f952",
".git/objects/f2/d2d08050a6bbe440db53edf4bbe546a0908778": "ae09d12996b10456ab721d81cb224f64",
".git/objects/f5/4464f5cc3948ca89917380c116bfcb184b9e6b": "68eb3a6571e86ec2de54a18483b822f2",
".git/objects/f9/d9378ea8892c9871caa0fc7549a5331d33bcc5": "127c2a36f63857d4cac43dc89d55884b",
".git/objects/fb/ee0af363d0a7144e7148eb283a717be72540a1": "ed078700fdce48900b3a412c5c4482d4",
".git/objects/ff/7caec4de1b059f479987108d41fe1bfa5da020": "b9ad7d87cbe76fe601bfc047394fdacf",
".git/objects/ff/a32aeaa4b0fc055ecfd87a29e18dd75f03cf5b": "0826f1593e30da53f6d972ac8ea3262d",
".git/ORIG_HEAD": "63fc0c26fdc258f5d8b05262bb086b36",
".git/refs/heads/main": "63fc0c26fdc258f5d8b05262bb086b36",
".git/refs/remotes/origin/main": "63fc0c26fdc258f5d8b05262bb086b36",
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
"index.html": "d1cc2e838c8cd9d0d82634a016c55a98",
"/": "d1cc2e838c8cd9d0d82634a016c55a98",
"main.dart.js": "202b114a5db2bc3bbb18575d12ea79a8",
"manifest.json": "b88d8b782f7348df1954c1bbf2865275",
"README.md": "d4b7468c9e7b912434f3d59338003a81",
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
