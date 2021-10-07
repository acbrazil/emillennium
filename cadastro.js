let btncadastro = document.getElementById('cadastrar');
btncadastro.addEventListener('click', cadastrando);

function cadastrando() {
    let csenha = document.getElementsByName('cpassword')[0].value;
    let cusuario = document.getElementsByName('cusername')[0].value.toLowerCase();
    usuarios.push({"login": cusuario, "senha": csenha})
    window.location = "index.html";
}