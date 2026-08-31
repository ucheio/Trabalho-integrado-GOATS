
//-----------------------------SEÇÃO GSAP----------------------------------------------
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#dinossauros-section",
        start: "top top",
        end: "+=2100",
        scrub: true,
        pin: true
    }
});

tl
.to(".section2-texts", {
    y: -300,
    x: -300,
    opacity: 0
}, 0)

.to(".texts-island2", {
    x: -150,
    opacity: 0
}, 0)

.to(".trex-head", {
    scale: 5,
    opacity: 0
}, 0)

.to(".section-dark", {
    opacity: 1
}, 0.8);


const dnaTimeline = gsap.timeline({
    scrol
})

//-------------------Animação da nav-------------------------------------------------
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
});
//---------------------------------------------------------------------------------
