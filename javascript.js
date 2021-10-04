let mbasic = document.getElementById('manualb');
let all = document.querySelector(".container");
let mespecifico = document.getElementById('manuale');
let homemenu = document.getElementById('home');
let m1 = document.getElementById('firstm');
let m2 = document.getElementById('secondm');
let btnAll = document.getElementById('buttons')

let btn = document.getElementById('basico');
let btn2 = document.getElementById('especifico');

m1.addEventListener("click", firstmanual);
m2.addEventListener("click", secondmanual);

btn.addEventListener("click", firstmanual);
btn2.addEventListener("click", secondmanual);

homemenu.addEventListener("click", home);

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