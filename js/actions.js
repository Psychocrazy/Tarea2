$("#Btn").click(function() {
	// body...
	var us = document.getElementById('Us').value;
	var pass = document.getElementById('pass').value;

	if(us == "Admin" && pass== "123"){
		Inicio();
	}else{
		alert("Error");
	}
});

function Inicio(){
	window.location = "./pages/pdfs.html";
}

/*function Menu(){
	document.body.innerHTML= "<nav>"+
	"<div><a>Inicio<a/></div> <div>Muro</div> <div>Mensajes</div>"
	+"</nav>"
}*/

window.addEventListener('load',function(){
	$("section").show(2000);
})