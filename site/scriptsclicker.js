let score = 0;
let buttonSize = 20; 
const scoreElement = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const shrinkButton = document.getElementById('shrinkButton');
const autoClickerButton = document.getElementById('autoClickerButton');
const soundButton = document.getElementById('soundButton');
const menuButton = document.getElementById('menuButton');


let rickRollAudio = new Audio('https://www.myinstants.com/media/sounds/rickroll.mp3');
let isRickRollPlaying = false;


clickButton.addEventListener('click', () => {
    score--;
    scoreElement.textContent = `Score : ${score}`;
});


// Réduction de la taille contre 500 clics
shrinkButton.addEventListener('click', () => {
    if (score >= 50000) {
        score -= 50000;
        buttonSize -= 20;
        if (buttonSize < 20) buttonSize = 20; // Taille minimale
        clickButton.style.padding = `${buttonSize}px ${buttonSize * 2}px`;
        scoreElement.textContent = `Score : ${score}`;
    } else {
        alert("Pas assez de clics pour réduire la taille du bouton il te faut 50000 🙂 !");
    }
});


setInterval(() => {
    buttonSize += 5;
    clickButton.style.padding = `${buttonSize}px ${buttonSize * 2}px`;
}, 1000);


setInterval(() => {
    const randomX = Math.random() * window.innerWidth * 0.8;
    const randomY = Math.random() * window.innerHeight * 0.8;

    clickButton.style.left = `${randomX}px`;
    clickButton.style.top = `${randomY}px`;
}, 3000);


// Fake Auto-clicker 
autoClickerButton.addEventListener('click', () => {
    if (score >= 100) {
        score -= 100;
        setInterval(() => {
            score--;
            scoreElement.textContent = `Score : ${score}`;
        }, 1000);
    } else {
        alert("Pas assez de clics pour activer l'auto-clicker !");
    }
});


// Bouton avec Rick Roll
soundButton.addEventListener('click', () => {
    if (score >= 50) {
        score -= 50;
        scoreElement.textContent = `Score : ${score}`;
        if (!isRickRollPlaying) {
            rickRollAudio.loop = true;
            rickRollAudio.play();
            isRickRollPlaying = true;
        } else {
            alert("Rick Roll est déjà activé !");
        }
    } else {
        alert("Pas assez de clics pour activer le bruit irritant !");
    }
});


// Bouton "Retourner au menu" ajoute 10 clics
menuButton.addEventListener('click', () => {
    score += 10; 
    scoreElement.textContent = `Score : ${score}`;
    alert("Retourner au menu vous a fait gagner des clics !");
});
