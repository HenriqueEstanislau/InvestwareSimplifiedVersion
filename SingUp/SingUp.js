function validar(){
    var nomeUsuario = document.getElementById("singup-nome").value
    var sobrenomeUsuario = document.getElementById("singup-sobrenome").value
    var email = document.getElementById("singup-email").value
    var usuario = document.getElementById("singup-user").value
    var senha = document.getElementById("singup-senha").value
    var confirmarSenha = document.getElementById("singup-senha2").value
    var Alerta = document.getElementById("alert")

    if(senha == confirmarSenha){
        window.localStorage.setItem("usuario", usuario)
        window.localStorage.setItem("senha", senha)
        window.localStorage.setItem("nomeUsuario", nomeUsuario)

        window.location.href = "../SingIn/SingIn.html"
    }else{
        window.alert("As senhas precisam ser iguais")
    }
}