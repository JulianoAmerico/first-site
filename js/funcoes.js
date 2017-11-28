

function validaFormulario(){
	var x = document.forms["formulario-contato"]["nome"].value;
	if(x == ""){
		alert("O nome precisa ser preenchido");
		return false;
	}
}