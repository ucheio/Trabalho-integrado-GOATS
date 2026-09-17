// Carrossel do manejo
const trilha = document.querySelector(".carrossel-trilha");
const paginas = document.querySelectorAll(".carrossel-pagina");
const bolinhas = document.querySelectorAll(".bolinha");

let paginaAtual = 0;

function irPara(indice) {
    // o resto da divisão faz o carrossel dar a volta nas pontas
    paginaAtual = (indice + paginas.length) % paginas.length;

    trilha.style.transform = `translateX(-${paginaAtual * 100}%)`;
    bolinhas.forEach((bolinha, i) => bolinha.classList.toggle("ativa", i === paginaAtual));
}

document.querySelectorAll(".carrossel-seta").forEach((seta) => {
    seta.addEventListener("click", () => irPara(paginaAtual + Number(seta.dataset.passo)));
});

bolinhas.forEach((bolinha) => {
    bolinha.addEventListener("click", () => irPara(Number(bolinha.dataset.ir)));
});

// Mesmo comportamento do nav no index.html
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

//--------------Menu hamburguer----------------------
const menuMobile = document.getElementById("menu-mobile");
const navSidebar = document.getElementById("nav-sidebar");
const linksMobile = navSidebar.querySelectorAll("a");

menuMobile.addEventListener("click", () => {

    menuMobile.classList.toggle("aberta");
    navSidebar.classList.toggle("aberta");

});

linksMobile.forEach(link => {

    link.addEventListener("click", () => {

        menuMobile.classList.remove("aberta");
        navSidebar.classList.remove("aberta");

    });

});