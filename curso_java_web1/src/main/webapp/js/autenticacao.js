
//Classe
Autenticacao = function () {
				
}

//Método
Autenticacao.prototype.validarCampos = function () {
    elementoUsuario = document.getElementById("txtUsuário");
    textDigitadoUsuario = elementoUsuario.value;

    elementoSenha = document.getElementById("txtSenha");
    textDigitadoSenha = elementoSenha.value;

    if (textDigitadoUsuario=="" || textDigitadoSenha=="") {
        window.alert("#Os campos usuário e senha devem ser digitados!#");
        return false;
    } else {
        return true;
    }

}

//Instanciamos o objeto
aut = new Autenticacao();