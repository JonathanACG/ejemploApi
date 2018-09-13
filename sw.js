//Asignar nombre y version de la cache
const CACHE_NAME = 'v1_cache_jonathan_camarillo_pwa';
//ficheros a cachear
var urlsToCache = [//se cachean todos los ficheros del proyecto
'./',
'./css/styless.css',
'./img/favicon.png',
'./img/1.png',
'./img/2.png',
'./img/3.png',
'./img/4.png',
'./img/5.png',
'./img/6.png',
'./img/facebook.png',
'./img/instagram.png',
'./img/twitter.png',
'./img/favicon-1024.png',
'./img/favicon-512.png',
'./img/favicon-384.png',
'./img/favicon-256.png',
'./img/favicon-192.png',
'./img/favicon-128.png',
'./img/favicon-96.png',
'./img/favicon-64.png',
'./img/favicon-32.png',
'./img/favicon-16.png'
];


//evento install
//instalacion del serer worker y guardar en cache
self.addEventListener('install', e => {
	e.waitUntil(
		caches.open(CACHE_NAME)//abre memoria cache
			.then(cache => {
				return cache.addAll(urlsToCache)//asigna ficheros del array
					.then(() => {
						self.skipWaiting();//espera a que guarde
					});

			})
			.catch(err => console.log('No se ha registrado el cache',err))
			
	);	
});
//evento activate
//hace que funcione sin conexion

self.addEventListener('activate', e => {
		const cacheWhitelist = [CACHE_NAME];//se añaden los elementos de la cache original

		e.waitUntil(//evento espera a que se realiza la logica
			caches.keys()//recorre los elementos de cache y como es una promesa recogemos los resultados
						.then(cacheNames => {
							return Promise.all(//retornamos 
								cacheNames.map(cacheName => {//recoore todos los elementos con el metodo map se crea variable cacheNames

									if(cacheWhitelist.indexOf(cacheName) === -1){// entramos a los elementos con indexof si vemos que un elemento no esta o no es necesario que se elimine
										//borrar elementos que no se necesitan
										return caches.delete(cacheName);
									}

								})
							
							);
						})
						.then(() => {
							//activar cache actual y que funcione sin conexion
							self.clients.claim();
						})
	);

});
//evento fetch//cuando soliictesmos una rl comprueba si ya esta en cache o lo solicita a la web en caso de que no
self.addEventListener('fetch', e => {//recupera informacion ya sea que este en cache o no

			e.respondWith(
				caches.match(e.request)
				.then(res => {
					if(res){
						return res;//decuelvo datos de cache
					}
					return fetch(e.request);//peticion ajax con metodo fetch a la url original osea la solicito del servidor
				})

			);

});
