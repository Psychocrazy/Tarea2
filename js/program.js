this.logueado = false;

$("#entrar").click(function(){
	if ($("#usuario").val() == "Admin" && $("#contraseña").val() == '123'){
		logueado = true;
		if (logueado == true) {
			window.location = "./pages/pdfs.html"
		}
	}else{
		Swal.fire('Error');
	}
});
$("#Galeria").click(function(){

});

$("#PDF").click(function(){
	window.location= "../pages/pdfs.html"

});

window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});