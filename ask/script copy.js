
const noBtn = document.getElementById("noBtn");


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