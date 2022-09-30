function cambiar_parrafo(){
    document.getElementById("edit-aboutme").style.display="inline";
    let texto = document.getElementById("text-aboutme").innerText;
    console.log(texto);
};

function myFunction2(valor){
    document.getElementById("text-aboutme").innerText=valor;
};

function logMessage(message){
    console.log(message + "<br>");
}

//controla si se presiono un enter
let textarea=document.getElementById("edit-aboutme")
textarea.addEventListener('keyup', (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key=="Enter"){
        document.getElementById("edit-aboutme").style.display="none"
    }
    
});




