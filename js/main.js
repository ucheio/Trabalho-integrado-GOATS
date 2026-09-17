
const speciesList = [
  {
    number: "01 - Carnívoro",
    name: "T-REX",
    image: "./assets/dinossauros/trex.png",
    description: "O grande predador da ilha, com enorme cabeça, dentes afiados e mandíbulas poderosas.",
    arteFundo: "./assets/dino-linearts/trex-lineart.png"
  },
  {
    number: "02 - Carnívoro",
    name: "VELOCIRAPTOR",
    image: "./assets/dinossauros/velociraptor.png",
    description: "Predador ágil e inteligente, conhecido por suas garras e capacidade de caçar em grupo.",
    arteFundo: "./assets/dino-linearts/velociraptor-lineart.png"
  },
  {
    number: "03 - Herbívoro",
    name: "TRICERÁTOPS",
    image: "./assets/dinossauros/triceratops.png",
    description: "Grande herbívoro com três chifres e uma enorme estrutura óssea atrás da cabeça.",
    arteFundo: "./assets/dino-linearts/triceratops-lineart.png"
  },
  {
    number: "04 - Carnívoro",
    name: "DILOFOSSAURO",
    image: "./assets/dinossauros/dilofossauro.png",
    description: "Predador de duas cristas na cabeça, conhecido por sua capacidade de lançar veneno.",
    arteFundo: "./assets/dino-linearts/dilofossauro-lineart.png"
  },
  {
    number: "05 - Carnívoro",
    name: "PROCOMPSÓGNATO",
    image: "./assets/dinossauros/procompsognato.png",
    description: "Pequeno predador ágil que, apesar do tamanho, apresenta comportamento perigoso.",
    arteFundo: "./assets/dino-linearts/procompsognato-lineart.png"
  },
  {
    number: "06 - Herbívoro",
    name: "ESTEGOSSAURO",
    image: "./assets/dinossauros/estegossauros.png",
    description: "Herbívoro de corpo pesado, marcado pelas placas nas costas e estruturas na cauda.",
    arteFundo: "./assets/dino-linearts/estegossauro-lineart.png"
  },
  {
    number: "07 - Herbívoro",
    name: "APATOSSAURO",
    image: "./assets/dinossauros/apatossauro.png",
    description: "Grande herbívoro de pescoço e cauda longos, alimentando-se da vegetação da ilha.",
    arteFundo: "./assets/dino-linearts/apatossauro-lineart.png"
  },
  {
    number: "08 - Herbívoro",
    name: "HADROSSAURO",
    image: "./assets/dinossauros/hadrossauro.png",
    description: "Dinossauro herbívoro que se alimentava de vegetação e fazia parte das espécies presentes na ilha.",
    arteFundo: "./assets/dino-linearts/hadrossauro-lineart.png"
  },
  {
    number: "09 - Herbívoro",
    name: "MAIASSAURO",
    image: "./assets/dinossauros/maiassauro.png",
    description: "Herbívoro conhecido pelo comportamento de grupo e pelo cuidado com seus filhotes.",
    arteFundo: "./assets/dino-linearts/maiassauro-lineart.png"
  },
  {
    number: "10 - Herbívoro",
    name: "HIPSILOFODONTE",
    image: "./assets/dinossauros/HIPSILOFODONTE.png",
    description: "Pequeno herbívoro de corpo leve, muito menor que os gigantes da ilha.",
    arteFundo: "./assets/dino-linearts/hipsolofodonte-lineart.png"
  },
  {
    number: "11 - Herbívoro",
    name: "OTHNIELIA",
    image: "./assets/dinossauros/OTHNIELIA.png",
    description: "Pequeno dinossauro herbívoro que contrasta com os gigantes do parque.",
    arteFundo: "./assets/dino-linearts/OTHNIELIA-lineart.png"
  },
  {
    number: "12 - Herbívoro",
    name: "EUOPLOCÉFALO",
    image: "./assets/dinossauros/EUOPLOCÉFALO.png",
    description: "Herbívoro robusto, protegido por uma forte armadura natural.",
    arteFundo: "./assets/dino-linearts/EUOPLOCEFALO-lineart.png"
  },
  {
    number: "13 - Herbívoro",
    name: "ESTIRACOSSAURO",
    image: "./assets/dinossauros/ESTIRACOSSAURO.png",
    description: "Grande herbívoro com uma estrutura óssea na cabeça e vários chifres, dando ao animal uma aparência bastante imponente.",
    arteFundo: "./assets/dino-linearts/ESTIRACOSSAURO-lineart.png"
  },
  {
    number: "14 - Herbívoro",
    name: "MICROCERÁTOPS",
    image: "./assets/dinossauros/MICROCERÁTOPS.png",
    description: "Pequeno dinossauro herbívoro, de corpo compacto e aparência delicada, que se alimentava da vegetação da ilha.",
    arteFundo: "./assets/dino-linearts/MICROCERÁTOPS-lineart.png"
  },
  {
    number: "15 - Voador",
    name: "PTEROSSAURO",
    image: "./assets/dinossauros/CEARADÁCTILO.png",
    description: "Réptil voador que habitava a ilha. Diferente dos dinossauros terrestres, possuía asas e podia se deslocar pelo ar.",
    arteFundo: "./assets/dino-linearts/CEARADÁCTILO-lineart.png"
  }
];

//botao subir descer
const dnaSectionBotoes = document.querySelector("#dna-section");

const botaoSubir = document.querySelector(".botao-subir");
const botaoDescer = document.querySelector(".botao-descer");

let ultimaPosicao = window.scrollY;

function atualizarBotaoNavegacao() {
    const rect = dnaSectionBotoes.getBoundingClientRect();

    const dentroDaSection =
        rect.top <= window.innerHeight &&
        rect.bottom >= 0;

    if (!dentroDaSection) {
        botaoSubir.classList.remove("ativo");
        botaoDescer.classList.remove("ativo");
        return;
    }

    const posicaoAtual = window.scrollY;

    if (posicaoAtual < ultimaPosicao) {
        // Subindo
        botaoSubir.classList.add("ativo");
        botaoDescer.classList.remove("ativo");
    }

    if (posicaoAtual > ultimaPosicao) {
        // Descendo
        botaoDescer.classList.add("ativo");
        botaoSubir.classList.remove("ativo");
    }

    ultimaPosicao = posicaoAtual;
}

window.addEventListener("scroll", atualizarBotaoNavegacao);

botaoSubir.addEventListener("click", () => {
    document.querySelector("#dinossauros-section").scrollIntoView({
        behavior: "smooth"
    });
});

botaoDescer.addEventListener("click", () => {
    document.querySelector("#Estadia").scrollIntoView({
        behavior: "smooth"
    });
});

//-----------------------------SEÇÃO THREE.JS----------------------------------------------
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const container = document.querySelector(".dna-model");

// Cena
const scene = new THREE.Scene();

// Câmera
const camera = new THREE.PerspectiveCamera(
  35,
  container.clientWidth / container.clientHeight,
  0.1,
  100
);

camera.position.set(0, 0, 30);

// Renderizador
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.3;

container.appendChild(renderer.domElement);

// Grupo: será útil para animar o DNA com GSAP depois
const dnaTiltGroup = new THREE.Group();
const dnaSpinGroup = new THREE.Group();

dnaTiltGroup.add(dnaSpinGroup);
scene.add(dnaTiltGroup);

// Iluminação ambiente azulada
const ambientLight = new THREE.AmbientLight(0x6fdcff, 2.2);
scene.add(ambientLight);

// Luz principal
const mainLight = new THREE.DirectionalLight(0xb8f7ff, 3);
mainLight.position.set(3, 4, 5);
scene.add(mainLight);

// Luz azul lateral: dá aparência de holograma
const blueLight = new THREE.PointLight(0x1687ff, 35, 15);
blueLight.position.set(-3, 1, 2);
scene.add(blueLight);

// Luz inferior esverdeada
const greenLight = new THREE.PointLight(0x3cffc7,15, 10);
greenLight.position.set(0, -3, 1);
scene.add(greenLight);

// Carregamento do modelo
const loader = new GLTFLoader();
const dnaMaterials = [];

loader.load(
  "./3dmodel/dna_hologram.glb",

  (gltf) => {
    const model = gltf.scene;

    // Centraliza o modelo
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    model.position.sub(center);

    // Ajusta automaticamente o tamanho do DNA
    const targetHeight = 4.5;
    const scale = targetHeight / size.y;

    model.scale.setScalar(scale);

   dnaSpinGroup.add(model);

   model.traverse((object) => {
  if (!object.isMesh && !object.isPoints) return;
});

   // Grupo externo: somente posicionamento/inclinação visual.
dnaTiltGroup.rotation.set(
  0,
  0,
  0.98
);

// Grupo interno: começa reto e gira só no eixo central da hélice.
dnaSpinGroup.rotation.set(0, 0, 0);

    // Reproduz a animação que já existe dentro do .glb
    

    console.log("DNA carregado com sucesso.");
  },

  undefined,

  (error) => {
    console.error("Erro ao carregar o DNA:", error);
  }
);



// Responsividade
function resizeThree() {
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

window.addEventListener("resize", resizeThree);

// Loop de renderização
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();

// Deixa o grupo acessível para você usar com GSAP depois
window.dna3D = {
  group: dnaSpinGroup,
  camera,
  scene
};
//-----------------------------SEÇÃO DADOS DOS DINOSSAUROS----------------------------------------------


const speciesCard = document.querySelector(".species");
const speciesNumber = document.querySelector(".species-number");
const speciesName = document.querySelector(".species-text");
const speciesImage = document.querySelector(".species-img");
const speciesDescription = document.querySelector(".species-description");
const speciesArt = document.querySelector(".species-art");


let currentSpecies = -1;

function changeSpecies(index, immediate = false) {
    if (index === currentSpecies) return;

    const species = speciesList[index];
    currentSpecies = index;

    const updateContent = () => {
        speciesNumber.textContent = species.number;
        speciesName.textContent = species.name;
        speciesImage.src = species.image;
        speciesImage.alt = species.name;
        speciesDescription.textContent = species.description;

        speciesArt.src = species.arteFundo;

        speciesArt.style.filter = `
            brightness(1.35)
            saturate(1.4)
            drop-shadow(0 0 8px rgba(255,255,255,.35))
            drop-shadow(0 0 18px ${species.glow})
            drop-shadow(0 0 45px ${species.glow})
        `;
    };

    if (immediate) {
        updateContent();
        gsap.set([speciesCard, speciesArt], { autoAlpha: 1 });
        return;
    }

    gsap.killTweensOf([speciesCard, speciesArt]);

    const tl = gsap.timeline();

    tl.to(speciesCard, {
        autoAlpha: 0,
        x: 40,
        duration: 0.2,
        ease: "power2.in"
    })

    .to(speciesArt, {
        autoAlpha: 0,
        x: -50,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in"
    }, "<")

    .add(() => {
        updateContent();
    })

    .set(speciesCard, {
        x: -40
    })

    .set(speciesArt, {
        x: 50,
        scale: 0.95
    })

    .to(speciesCard, {
        autoAlpha: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out"
    })

    .to(speciesArt, {
        autoAlpha: 0.75,
        x: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
    }, "<");
}
changeSpecies(0, true);


//-----------------------------SEÇÃO GSAP----------------------------------------------
//----------------------------FAVOR NÃO FAZER ALTERAÇÕES-------------------------------
gsap.registerPlugin(ScrollTrigger);

//smooth scroll na página
const lenis = new Lenis({
  lerp:0.067,
  smoothWheel: true
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


//parte dos dinossauros
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#dinossauros-section",
        start: "top top",
        end: "+=500",
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
},0)



const dnaTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#dna-section",
    start: "top top",
    end: "+=9000",
    pin: true,
    scrub: 1.5,

    onUpdate: (self) => {
      const index = Math.round(
        self.progress * (speciesList.length - 1)
      );

      changeSpecies(index);
    },

    snap: {
      snapTo: 1 / (speciesList.length - 1),
      duration: { min: 0.15, max: 0.45 },
      ease: "power2.out"
    }
  }
});

dnaTimeline.to(dnaSpinGroup.rotation, {
  x: Math.PI * 6,
  duration: 3,
  ease: "none"
}, 0);
//-------------------Animação da nav-------------------------------------------------
const nav = document.querySelector(".nav");
const dnaSection = document.querySelector("#dna-section");

let insideDna = false;

// Regra normal da NAV
window.addEventListener("scroll", () => {
    // Se estiver dentro da DNA, o observer manda
    if (insideDna) return;

    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Observer da DNA
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            // Entrou na DNA
            insideDna = true;
            nav.classList.remove("scrolled");

        } else {
            // Saiu da DNA
            insideDna = false;

            // Volta a obedecer a regra dos 50px
            nav.classList.toggle("scrolled", window.scrollY > 50);
        }

    });
}, {
    rootMargin: "0px 0px -50% 0px",
    threshold: 0
});

observer.observe(dnaSection);
//---------------------------------------------------------------------------------
// Área restrita
const modalRestrito = document.getElementById("Restrito");

document.getElementById("link-restrito").addEventListener("click", (evento) => {
    evento.preventDefault();
    modalRestrito.showPopover();
});

// Abas: mostra um formulário por vez
modalRestrito.querySelectorAll(".aba").forEach((aba) => {
    aba.addEventListener("click", () => {
        modalRestrito.querySelectorAll(".aba")
            .forEach((botao) => botao.classList.toggle("ativa", botao === aba));

        modalRestrito.querySelectorAll(".restrito-form")
            .forEach((form) => form.classList.toggle("ativa", form.id === "form-" + aba.dataset.aba));
    });
});

function senhasConferem(form) {
    if (form.senha.value !== form.confirmar.value) {
        alert("As senhas não coincidem.");
        return false;
    }
    return true;
}

const acessoNegado = "Acesso negado. Apenas funcionários com código de autorização.";

document.getElementById("form-login").addEventListener("submit", (evento) => {
    evento.preventDefault();
    alert(acessoNegado);
});

document.getElementById("form-cadastro").addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (senhasConferem(evento.target)) alert(acessoNegado);
});

document.getElementById("form-codigo").addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (!senhasConferem(evento.target)) return;

    if (evento.target.codigo.value.trim().toLowerCase() === "abacaxi") {
        window.location.href = "./restrito.html";
    } else {
        alert("Código de autorização inválido.");
    }
});
//-------------------------Card das especies de dino--------------------------------------------------------


speciesCard.addEventListener("click", () => {

    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
        speciesCard.classList.toggle("ativo");
    }

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
//------------------------Cards normais pra mobile-----------------------------------
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        // Só aplica esse comportamento em dispositivos touch
        if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
            card.classList.toggle("ativo");
        }

    });
});