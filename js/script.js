function mostrarPrograma(tipo){

    document.getElementById('cinema').classList.add('hidden');
    document.getElementById('museu').classList.add('hidden');

    document.getElementById(tipo).classList.remove('hidden');

    document.getElementById(tipo)
        .scrollIntoView({
            behavior:'smooth'
        });
}

const botoes = document.querySelectorAll(".btn-sinopse");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const sinopse =
            botao.previousElementSibling;

        sinopse.classList.toggle("expandida");

        if(sinopse.classList.contains("expandida")){
            botao.textContent = "Ler menos";
        }else{
            botao.textContent = "Ler mais";
        }

    });

});