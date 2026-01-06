const btnNo = document.querySelector("#btn-no");
const btnYes = document.querySelector("#btn-yes");
const title = document.querySelector(".title");
const mainText = document.querySelector("#main-text");
const musica = document.querySelector("#music");
const startBtn = document.querySelector("#start-btn");
const welcomeScreen = document.querySelector("#welcome-screen");
const mainCard = document.querySelector("#main-card");

// 1. Activar todo al dar clic en el inicio
startBtn.addEventListener("click", () => {
    welcomeScreen.style.display = "none";
    mainCard.style.display = "block";
    
    // Intentar reproducir con una promesa para evitar errores de permisos
    if (musica) {
        musica.play().catch(error => {
            console.log("Error al reproducir el audio:", error);
        });
    }
});
// 2. Función para mover el botón "No"
function moverBotonNo() {
    // Calculamos posiciones aleatorias dentro de la pantalla
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.position = "absolute";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

btnNo.addEventListener("mouseover", moverBotonNo);
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Evita que se haga clic accidentalmente en móvil
    moverBotonNo();
});

// 3. Acción al decir que SÍ
btnYes.addEventListener("click", function () {
    title.innerHTML = "¡Sabía que dirías que sí! ❤️";
    mainText.innerHTML = "Eres lo mejor que me ha pasado. <br> ¡Te quiero con todo mi corazón, mon amour!";
    
    btnNo.style.display = "none";

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#ff80ab', '#f48fb1']
    });
});