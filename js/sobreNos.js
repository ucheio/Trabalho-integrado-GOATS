const slides = [
    {
        tema: "1983",
        titulo: "A IDEIA",
        descricao: "Tudo começou quando o Dr. John Hammond fundou a InGen. O projeto nasceu com a ambiciosa proposta de unir ciência, turismo e educação em um único conceito inovador.",
        imagem: "./assets/johnHammond.jpg"
    },

    {
        tema: "1990",
        titulo: "CLONAGEM",
        descricao: "Anos depois, foi iniciada a pesquisa científica com o DNA de dinossauros. O primeiro grande avanço e sucesso da equipe foi a clonagem do Velociraptor.",
        imagem: "./assets/dna-slide.jpg"
    },

    {
        tema: "1993",
        titulo: "INVESTIMENTOS",
        descricao: "Com o progresso dos experimentos, grandes empresas se uniram para financiar a empreitada. Foi nesse período que o parque começou a tomar forma concreta na Ilha Nublar.",
        imagem: "./assets/ilha-slide.jpg"
    },

    {
        tema: "1996",
        titulo: "ABERTURA DO PARQUE",
        descricao: "Por fim, ocorreu a inauguração oficial para o público em geral. A abertura das portas marcou o momento exato em que o sonho finalmente se tornou realidade.",
        imagem: "./assets/mansao-slide.jpg"
    }
];

const pontos = document.querySelectorAll(".ponto-container");
const tema = document.querySelector(".slideshow-tema");
const titulo = document.querySelector(".slideshow-titulo");
const descricao = document.querySelector(".slideshow-descricao");
const imagem = document.querySelector(".slideshow-imagem");

pontos.forEach((ponto, i) => {
    ponto.addEventListener("click", () => {

        pontos.forEach(p => p.classList.remove("ativo"));
        ponto.classList.add("ativo");

        tema.textContent = slides[i].tema;
        titulo.textContent = slides[i].titulo;
        descricao.textContent = slides[i].descricao;
        imagem.src = slides[i].imagem;
    });
});

// Primeiro pra esclarecer
// apartir desse "pontos.forEach((ponto, i) => {" usei gpt memo.

// A primeira seção de blocos de código é os dados como: titulo, tema, descrição, etc.A
//logo dps essa seção dos const....  são as variaveis pra pegar os elementos no html
//e o forEach mt provavelmente eu conseguiria fazer se eu estivesse hiper focado, com 10 copos de café, memoria boa de js e não tivesse parado de programar em java por causa de uma gripe, aí pedi pro gpt