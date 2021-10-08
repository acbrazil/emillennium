
let usuarios = [
    {"login": "adm", "senha": "adm"},
    {"login": "mamae", "senha": "abacaxi"},
    {"login": "papai", "senha": "melancia"},
]

let btnentrar = document.getElementById('entrar');
btnentrar.addEventListener('click', login)

function login() {

    let senha = document.getElementsByName('password')[0].value;
    let usuario = document.getElementsByName('username')[0].value.toLowerCase();

    for (let i = 0; i < usuarios.length; i++) {
        let l = usuarios[i].login;
        let s = usuarios[i].senha;
        if (l === usuario && s === senha) {
            window.location = "container.html";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}







