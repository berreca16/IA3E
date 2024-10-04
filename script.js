const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta de cachorros?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Sim gosto muito"
        },
        {
            texto: "Não",
            afirmação: " Não gosto"
        }
        ]
    },
    {
        enunciado: "Você gosta de ouvir músicas?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Sim, sempre"
        },
        {
            texto: "Não",
            afirmação: "Não gosto"
        }
        ]
    },
    {
        enunciado: "Você sabe desenhar?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Sim, sou muito boa"
        },
        {
            texto: "Não",
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
    caixaPergunta.textContent = "Você gostou do questionario?";
}
mostraPergunta();
