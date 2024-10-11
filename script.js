const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoresultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta de ter contato com os animais?",
        alternativas: [{
            texto: "Sim, eu gosto",
            afirmação: "Sim, sempre que eu posso"
        },
        {
            texto: "Não gosto",
            afirmação: " Não, eu detesto"
        }
        ]
    },
    {
        enunciado: "Você frequentemente ouve músicas?",
        alternativas: [{
            texto: "Sim, eu amo",
            afirmação: "Sim, sempre"
        },
        {
            texto: "Não tenho tempo ",
            afirmação: "Não gosto"
        }
        ]
    },
    {
        enunciado: "Você sabe desenhar?",
        alternativas: [{
            texto: "Sim, sou muito boa",
            afirmação: "Sim, gosto muito"
        },
        {
            texto: "Não sei desenhar",
            afirmação: "Não é muito a minha praia"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAternativas = document.createElement("button");
        botaoAternativas.textContent = alternativa.texto;
        botaoAternativas.addEventListener("click", ()=> respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas = afirmacoes;
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas";
    textoresultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();
