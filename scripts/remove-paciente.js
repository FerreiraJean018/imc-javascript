var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoEvento = alvoEvento.parentNode;

    paiDoEvento.classList.add("fadeOut")
    
    setTimeout(function(){
        paiDoEvento.remove();
    }, 500);
    
});