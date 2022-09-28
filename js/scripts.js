function cambiar_parrafo(){
    document.getElementById("edit-aboutme").style.display="inline";
    let texto = document.getElementById("text-aboutme").innerText;
    console.log(texto);
};

function myFunction2(valor){
    document.getElementById("text-aboutme").innerText=valor;
};