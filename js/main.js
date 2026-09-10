
const speciesList = [
  {
    number: "01",
    name: "T-REX",
    image: "./assets/dinossauros/trex.png",
    description: "INSIRA A DESCRIÇÃO DO T-REX AQUI."
    
  },
  {
    number: "02",
    name: "VELOCIRAPTOR",
    image: "./assets/dinossauros/velociraptor.png",
    description: "INSIRA A DESCRIÇÃO DO VELOCIRAPTOR AQUI."
  
  },
  {
    number: "03",
    name: "TRICERÁTOPS",
    image: "./assets/dinossauros/triceratops.png",
    description: "INSIRA A DESCRIÇÃO DO TRICERÁTOPS AQUI."
    
  },
  {
    number: "04",
    name: "DILOFOSSAURO",
    image: "./assets/dinossauros/dilofossauro.png",
    description: "INSIRA A DESCRIÇÃO DO DILOFOSSAURO AQUI."
  },
  {
    number: "05",
    name: "PROCOMPSÓGNATO",
    image: "./assets/dinossauros/miguelssauros.png",
    description: "INSIRA A DESCRIÇÃO DO PROCOMPSÓGNATO AQUI."
  },
  {
    number: "06",
    name: "ESTEGOSSAURO",
    image: "./assets/dinossauros/estegossauros.png",
    description: "INSIRA A DESCRIÇÃO DO ESTEGOSSAURO AQUI."
  },
  {
    number: "07",
    name: "APATOSSAURO",
    image: "./assets/dinossauros/apatossauro.png",
    description: "INSIRA A DESCRIÇÃO DO APATOSSAURO AQUI."
  },
  {
    number: "08",
    name: "HADROSSAURO",
    image: "./assets/dinossauros/triceratops.jpg",
    description: "INSIRA A DESCRIÇÃO DO HADROSSAURO AQUI."
  },
  {
    number: "09",
    name: "MAIASSAURO",
    image: "./assets/dinossauros/triceratops.jpg",
    description: "INSIRA A DESCRIÇÃO DO MAIASSAURO AQUI."
  },
  {
    number: "010",
    name: "HIPSILOFODONTE",
    image: "./assets/dinossauros/triceratops.jpg",
    description: "INSIRA A DESCRIÇÃO DO HIPSILOFODONTE AQUI."
  },
  {
    number: "011",
    name: "OTHNIELIA",
    image: "./assets/dinossauros/triceratops.jpg",
    description: "INSIRA A DESCRIÇÃO DA OTHNIELIA AQUI."
  },
  {
    number: "012",
    name: "EUOPLOCÉFALO",
    image: "./assets/dinossauros/triceratops.jpg",
    description: "INSIRA A DESCRIÇÃO DO EUOPLOCÉFALO AQUI."
  },
  {
    number: "013",
    name: "ESTIRACOSSAURO",
    image: "./assets/dinossauros/triceratops.jpg",
    description: "INSIRA A DESCRIÇÃO DO ESTIRACOSSAURO AQUI."
  },
  {
    number: "014",
    name: "MICROCERÁTOPS",
    image: "./assets/dinossauros/triceratops.jpg",
    description: "INSIRA A DESCRIÇÃO DO MICROCERÁTOPS AQUI."
  },
  {
    number: "015",
    name: "CEARADÁCTILO",
    image: "./assets/dinossauros/triceratops.jpg",
    description: "INSIRA A DESCRIÇÃO DO CEARADÁCTILO AQUI."
  }

  // Continue até a espécie 15.
];


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

let currentSpecies = -1;

function changeSpecies(index, immediate = false) {
  if (index === currentSpecies) return;

  currentSpecies = index;

  const species = speciesList[index];

  const updateContent = () => {
  speciesNumber.textContent = species.number;
  speciesName.textContent = species.name;
  speciesImage.src = species.image;
  speciesImage.alt = species.name;


};

  if (immediate) {
    updateContent();
    gsap.set(speciesCard, { autoAlpha: 1, y: 0 });
    return;
  }

  gsap.killTweensOf(speciesCard);

  gsap.to(speciesCard, {
    autoAlpha: 0,
    y: -20,
    duration: 0.2,
    ease: "power2.in",
    onComplete: () => {
      updateContent();

      gsap.set(speciesCard, { y: 20 });

      gsap.to(speciesCard, {
        autoAlpha: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out"
      });
    }
  });
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
