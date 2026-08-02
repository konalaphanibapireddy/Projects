// Floating Hearts Animation

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 250);

// -----------------------------

// Floating Balloons

const balloons = document.getElementById("balloons");

const colors = [
    "#ff4d6d",
    "#ff66b2",
    "#ffcc00",
    "#66ccff",
    "#99ff66",
    "#ff884d"
];

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.classList.add("balloon");

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    balloon.style.animationDuration =
        (8 + Math.random() * 6) + "s";

    balloons.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 15000);
}

setInterval(createBalloon, 1200);

// -----------------------------

// Surprise Button

const button = document.getElementById("surpriseBtn");

button.addEventListener("click", () => {

    button.innerHTML = "💖 Loading Surprise...";

    button.style.transform = "scale(0.95)";

    createConfetti();

    setTimeout(() => {
        window.location.href = "surprise.html";
    }, 1800);

});

// -----------------------------

// Simple Confetti Effect

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.width = "8px";
        piece.style.height = "8px";
        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.left = Math.random() * window.innerWidth + "px";
        piece.style.top = "-20px";

        piece.style.borderRadius = "50%";
        piece.style.pointerEvents = "none";
        piece.style.zIndex = "9999";

        document.body.appendChild(piece);

        const x = (Math.random() - 0.5) * 500;
        const y = window.innerHeight + 200;

        piece.animate(
            [
                {
                    transform: "translate(0,0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translate(${x}px,${y}px) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 3000 + Math.random() * 1500,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            piece.remove();
        }, 4500);
    }
}
