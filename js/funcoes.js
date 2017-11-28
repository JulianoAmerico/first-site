

function validaFormulario(){
	var a = document.forms["formulario-contato"]["nome"].value;
	var b = document.forms["formulario-contato"]["email"].value;
	var c = document.forms["formulario-contato"]["msg"].value;
	if(a == "" || b == "" || c == ""){
		alert("Existe campo que precisa ser preenchido");
		return false;
	}
}