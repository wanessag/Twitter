var recebeTexto = document.querySelector(".message");
var recebeTweet = document.querySelector(".tweets");
var botao = document.querySelector(".botao");

//Tweets
function addTweet () {
  var bloco = document.createElement("div");
  var text = document.createElement("p");
  recebeTweet.prepend(bloco);
  text.textContent = recebeTexto.value;
  bloco.setAttribute("class", "posts");
  bloco.appendChild(text);
  var hora = document.createElement("small");
  hora.textContent = moment().format('LLLL');
  bloco.appendChild(hora);
  recebeTexto.value = "";
  contador.textContent = "140";
}
botao.addEventListener("click", addTweet);

//Contador de caracteres
  var contador = document.querySelector("#contador")
function contador_area() {
    var limite = 140;
    var total = recebeTexto.value.length;
    var caracteresRestantes = limite - total;
contador.textContent = caracteresRestantes;
}
recebeTexto.addEventListener("keydown", contador_area);

//Desabilitar botão
function condicaoBotao(){
 if (recebeTexto.value !== "" && recebeTexto.value.length <= 140){
 botao.removeAttribute("disabled", "false");
} else if (recebeTexto.value === "" || recebeTexto.value.length > 140){
    botao.setAttribute("disabled", "true");
  }
}
setInterval(condicaoBotao, 1);

function color(){
  if (recebeTexto.value.length > 120 && recebeTexto.value.length < 130){
    contador.style.color = "yellow";
  } else if (recebeTexto.value.length > 130 && recebeTexto.value.length < 140){
    contador.style.color = "red";
  }
}
setInterval(color, 1);

function addEvent(type, el, callback)
{
 if (window.addEventListener) {
     el.addEventListener(type, callback, false);
 } else if (window.attachEvent) {
     el.attachEvent("on" + type, callback);
 } else {
     el["on" + type] = callback;
 }
}


function resizeTextfield(el){
let timer;
function trigger() {
  if (!el) {
    return;
  }
  el.style.height = "auto";
  let height = el.scrollHeight;
  el.style.height = height + "px";
}
function exec() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(trigger, 1);
}
addEvent("keyup", el, exec);
addEvent("input", el, exec);
}
window.onload = function () {
let els = document.getElementsByClassName("increase");
for (let i = els.length - 1; i >= 0; i--) {
resizeTextfield(els[i]);
}
};
setInterval(resizeTextfield(recebeTexto),1);
