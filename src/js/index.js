/* Objetivo -quando clicar no botão temos que mostrar a imagem de fundo correspondente

passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário pelo botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem ativa de fundo
passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// passo 1
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo 2
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //passo 3
        desativarBotaoSelecionado();

        //passo 4
        selecionarBotaoCarrosel(botao);

        //passo5
        esconderImagemAtiva();

        //passo6
        mostrarImagemFundo(indice);
    })
})
function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

