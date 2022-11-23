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
    texto[i].textContent = value;
  }
  
}

function logMessage(message) {
  console.log(message + "<br>");
}

//controla si se presiono un enter
let textarea = document.getElementById("edit-aboutme");
textarea.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
  if (e.key == "Enter") {
    document.getElementById("edit-aboutme").style.display = "none";
  }
});