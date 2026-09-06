
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
//-----------------------------SEÇÃO GSAP----------------------------------------------
//----------------------------FAVOR NÃO FAZER ALTERAÇÕES-------------------------------
gsap.registerPlugin(ScrollTrigger);

//smooth scroll na página
const lenis = new Lenis({
  lerp:0.045,
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
        end: "+=1400",
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
    end: "+=5000",
    pin: true,
    scrub: 1.5
  }
});

dnaTimeline
  .to(dnaSpinGroup.rotation, {
    x: Math.PI * 6,
    duration: 3,
    ease: "none"
  }, 0)

  .to(".species-1", {
    opacity: 0,
    y: -30,
    duration: 0.5
  }, 1)

  .to(".species-2", {
    opacity: 1,
    y: 0,
    duration: 0.5
  }, 1.2);
//-------------------Animação da nav-------------------------------------------------
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
});
//---------------------------------------------------------------------------------
