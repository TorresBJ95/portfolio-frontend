// cambio de texto para los objectos p
function cambiar_parrafo() {
  document.querySelector("input").style.display = "inline";
  let container = document.querySelector(".col");
  let texto = container.querySelectorAll("div > p");
  for (let i = 0; i < texto.length; i++) {
    texto[i].textContent = "";
  }
}
function asignar_palabras(value) {
  let container = document.querySelector(".col");
  let texto = container.querySelectorAll("div > p");
  for (let i = 0; i < texto.length; i++) {
    texto[0].textContent = value;
  }
}
// cambio de texto para los objectos ul li
function cambiar_parrafo_2(value){
  let container = document.querySelector(".col-12");
  let texto = container.querySelectorAll("article ul.inner p");
  for (let i = 0; i < texto.length; i++) {
    texto[i].textContent = value;
  }

}
function cambiar_parrafo_3(value){
  let container = document.querySelector(".col-12");
  let texto = container.querySelectorAll("article ul.unner li");
  for (let i = 0; i < texto.length; i++){
    texto[i].textContent = value;
  }
}
// cambio de  texto para los objectos ul li lado derecho
function cambiar_parrafo_4(value) {
  let container = document.querySelector(".second_div");
  let texto = container.querySelectorAll("article ul.inner p");
  for (let i = 0; i < texto.length; i++) {
    texto[i].textContent = value;
  }
}
function cambiar_parrafo_5(value) {
  let container = document.querySelector(".second_div");
  let texto = container.querySelectorAll("article ul.unner li");
  for (let i = 0; i < texto.length; i++) {
    texto[i].textContent = value;
  }
}
// mostrar inputs en la work page
function show_input(){
  document.querySelector("input").style.display = "inline";
}
function show_input_2(){
  document.getElementById("first_input").style.display = "inline";
}



// mensaje de consola
function logMessage(message) {
  console.log(message + "<br>");
}

//controla si se presiono un enter
let textarea = document.getElementById("edit-aboutme");
textarea.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
  if (e.key == "Enter") {
    document.getElementById("edit-aboutme").style.display = "none";
    document.getElementById("edit_aboutme2").style.display = "inline";
  }
});
let text_area_2 = document.getElementById("edit_aboutme2");
text_area_2.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
  if (e.key == "Enter") {
    document.getElementById("edit_aboutme2").style.display = "none";
  }
});
//controla si se presiono un enter lado derecho
let textarea_3 = document.getElementById("first_input");
textarea_3.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
  if (e.key == "Enter") {
    document.getElementById("first_input").style.display = "none";
    document.getElementById("second_input").style.display = "inline";
  }
});
let text_area_4 = document.getElementById("second_input");
text_area_4.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
  if (e.key == "Enter") {
    document.getElementById("second_input").style.display = "none";
  }
});