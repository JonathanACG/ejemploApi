//Service worker

if('serviceWorker' in navigator){//es para verificar que el navegador puede utilizar services worker
console.log('puedes');
		navigator.serviceWorker.register('./sw.js')//llama el archivo que contiene el service worker
							.then(res => console.log('serviceWorker cargado correctamente',res))
							.catch(err => console.log('serviceWorker no se ha podido registrar',err));
}else{
console.log(' no puedes');	
}








//scrol suavizado
$(document).ready(function(){

$("#menu a").click(function(e){//el evento de click se activa cuando presieonas un elemento del menu
		e.preventDefault();

		$("html,body").animate({
			scrollTop: $($(this).attr('href')).offset().top
		});
		return false;
	});

});