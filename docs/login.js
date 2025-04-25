botao = document.getElementById("cadastrar")
botao.addEventListener("click", ()=>{
    let senha = document.getElementById("senha").value
    let email = document.getElementById("email").value
    console.log(email)
    if (email==""){
        alert("Preencha o campo email")
    }
    if (senha === "123456"){
        window.location= ("projecao.html")
    }else{
        alert("Senha incorreta")
    }
})