	var xhr;

function crearObjeto(){
    if (window.ActiveXObject){
        xhr= new ActiveXObject("Microsoft.XMLHttp");
        
    }else if ((window.XMLHttpRequest) || (typeof  XMLHttpRequest)!=undefined) {
        xhr=new XMLHttpRequest();
    }else{
        alert("Su navegadir no soporta AJAX");
        return;
    }
}


function  apiejemplo1(){
	crearObjeto();
    

   xhr.open("GET","Personas.Json",true);
    xhr.onreadystatechange=mostrarR;
    xhr.send(null);
    
}


function mostrarR(){

	if (xhr.readyState==4){
       
          var respuesta = JSON.parse(xhr.responseText);
          var personas=respuesta.personas;
    var salida ='';
 

    for( var i = 0; i < personas.length; i++){
        var v=personas[i].nombre;
           salida += `<li>${personas[i].nombre} su nickname es ${personas[i].nickname}</li>`;


	 document.getElementById("res1").innerHTML=salida;

	    
        }
	}
}

function  apiejemplo2(){

    crearObjeto();
    
    var valor=document.getElementById("apitext2").value;
    xhr.open("GET","https://fourtonfish.com/hellosalut/?cc="+valor+"",true);
    xhr.onreadystatechange=mostrarR2;
    xhr.send(null);

}


function mostrarR2(){

    if (xhr.readyState==4){
       
         var respuesta = JSON.parse(xhr.responseText);
          
         document.getElementById("res1").innerHTML="<p>"+respuesta.hello+"<p>";
         
        
        }
    
}



function  apiejemplo3(){
var valor=document.getElementById("apitext3").value;

    crearObjeto();
    
    var valor=document.getElementById("apitext3").value;
    xhr.open("GET","https://apilayer.net/api/check?access_key=2b8ccdec2694825634414bda899d0546&email="+valor+"",true);
    xhr.onreadystatechange=mostrarR3;
    xhr.send(null);


}
function mostrarR3(){

    if (xhr.readyState==4){
       
         var respuesta1 = JSON.parse(xhr.responseText);
          
         document.getElementById("res1").innerHTML="<p>Correo: "+respuesta1.email+"<br>Usuario: "+respuesta1.user+"<br>Dominio: "+respuesta1.domain+"<br>Valido: "+respuesta1.format_valid+"<p>"; 
        
        }
    
}

