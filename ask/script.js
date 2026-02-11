const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const btnContainer = document.querySelector(".btn-container");
const resultContainer = document.getElementById("result-container");

// Variables para el tamaño del botón Yes
let currentFontSize = 1.2;
let currentPadding = 10;
// 1. EL SUSPENSO: Cambiar texto y mostrar botones
setTimeout(() => {
    // Primero hacemos que el texto "Would you..." desaparezca suavemente
    question.style.opacity = 0; 
    
    setTimeout(() => {
        // Cambiamos el texto
        question.innerText = "Would you be my Valentine?";
        
        // Hacemos aparecer el nuevo texto
        question.style.opacity = 1; 
        
        // AQUÍ ESTÁ EL CAMBIO: Hacemos aparecer los botones suavemente
        btnContainer.classList.add("visible"); 

    }, 1000); // Tiempo que tarda en desaparecer el primer texto (1s)

}, 2000); // Tiempo inicial de espera antes de empezar la magia (2s)

// 2. LA LÓGICA DEL "NO" (Escapista)
// Función para mover el botón aleatoriamente
function moveNoButton() {
    const x = Math.random() * (window.innerWidth/2 - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight/2 - noBtn.offsetHeight);
    console.log("innerWidth " + window.innerWidth/2)
    console.log("innerHeight " + window.innerHeight/2)
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    console.log("x " +x)
    console.log("y " + y)
}

// Eventos para el botón NO (Desktop y Móvil)
noBtn.addEventListener("mouseover", () => {
    moveNoButton();
});
noBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Evita click real en móvil
    moveNoButton();
});

// Función para agrandar el botón SI
function growYesButton() {
    currentFontSize += 0.5; // Aumenta fuente
    currentPadding += 5;    // Aumenta padding
    
    yesBtn.style.fontSize = `${currentFontSize}rem`;
    yesBtn.style.padding = `${currentPadding}px ${currentPadding * 3}px`;
}

// Eventos para el botón NO (Desktop y Móvil)
noBtn.addEventListener("mouseover", () => {
    moveNoButton();
    growYesButton();
});
noBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Evita click real en móvil
    moveNoButton();
    growYesButton();
});

// 3. EL FINAL FELIZ
yesBtn.addEventListener("click", () => {
    // Ocultar pregunta y botones
    question.style.display = "none";
    btnContainer.style.display = "none";
    
    // Mostrar el GIF y mensaje final
    resultContainer.classList.remove("hidden");
    
    // Efecto de confeti (opcional, pero simple de simular con fondo)
    document.body.style.backgroundColor = "#FFE8E8";
});