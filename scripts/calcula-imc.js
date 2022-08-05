var pacientes = document.querySelectorAll(".paciente");

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura*altura)

    return imc.toFixed(2);
}

for(var i=0; i<pacientes.length; i++){
    var paciente = pacientes[i];

    var tdImc = document.querySelector(".info-imc")

    function buscaDadoPaciente(dado, seletor){
        dado = paciente.querySelector(seletor)

        var valor = dado.textContent;

        return valor
    }
    var peso = buscaDadoPaciente(peso, ".info-peso")
    var altura = buscaDadoPaciente(altura, ".info-altura")

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso é invalido")
        tdImc.textContent = "peso é invalido"
        paciente.classList.add("paciente-invalido")
    }
    if (!alturaEhValida){
        console.log("altura é invalido")
        tdImc.textContent = "Altura é invalido"
        paciente.classList.add("paciente-invalido")
    } 
    if (pesoEhValido && alturaEhValida) {
        var imc = paciente.querySelector(".info-imc")

        imc.textContent = calculaImc(peso, altura);
    }
}

function validaPeso (peso){
    if(peso >=0 && peso<1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura (altura){
    if (altura >= 0 && altura < 3.0){
        return true;
    }else{
        return false
    }
}


