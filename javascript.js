let usuarios = [
    {"login": "adm", "senha": "adm"},
    {"login": "mamae", "senha": "abacaxi"},
    {"login": "papai", "senha": "melancia"},
]
let mbasic = document.getElementById('manualb');
let all = document.querySelector(".container");
let mespecifico = document.getElementById('manuale');
let homemenu = document.getElementById('home');
let m1 = document.getElementById('firstm');
let m2 = document.getElementById('secondm');
let btnAll = document.getElementById('buttons')
let btnRLogin = document.getElementById('rLogin')
let btnentrar = document.getElementById('entrar');
let btn = document.getElementById('basico');
let btn2 = document.getElementById('especifico');
let wLogin = document.getElementById('inputs');
let menubar = document.querySelector('.menu');
let h1login = document.getElementById('loginh1');
let pedidoVenda = document.getElementById('pv');
let cvenda = document.querySelector('.containervenda');







m1.addEventListener("click", firstmanual);
m2.addEventListener("click", secondmanual);

btn.addEventListener("click", firstmanual);
btn2.addEventListener("click", secondmanual);

homemenu.addEventListener("click", home);

btnRLogin.addEventListener("click", rLogin);

btnentrar.addEventListener('click', login);

pedidoVenda.addEventListener('click', pedVenda);

pedidoVenda.addEventListener('mouseenter', function hover(){
	pedidoVenda.style.color ="yellow"
})

function firstmanual() {
	all.style.display = 'block';
	mespecifico.style.display = "none";
	mbasic.style.display = "block";
	btnAll.style.display = "none";
}

function secondmanual() {
	all.style.display = 'block';
	mbasic.style.display = "none";
	mespecifico.style.display = "block";
	btnAll.style.display = "none";
}

function home() {
	all.style.display = "none";
	btnAll.style.display = "block";	
}

function rLogin(){
	window.location = "index.html";
}

function login() {

    let senha = document.getElementsByName('password')[0].value;
    let usuario = document.getElementsByName('username')[0].value.toLowerCase();

    for (let i = 0; i < usuarios.length; i++) {
        let l = usuarios[i].login;
        let s = usuarios[i].senha;
        if (l === usuario && s === senha) {
            //window.location = "container.html";
			
			wLogin.style.display = 'none';
			btnAll.style.display = 'block';
			btnRLogin.style.display = 'block';
			menubar.style.display = "flex";
			h1login.style.display = "none";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}

function pedVenda(){
	cvenda.style.display = "block";
	btnAll.style.display = 'none';
	all.style.display = "none";

}
