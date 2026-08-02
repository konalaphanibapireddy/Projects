const slideTrack = document.querySelector(".slide-track");

// Pause animation when the browser tab is inactive
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        slideTrack.style.animationPlayState = "paused";
    } else {
        slideTrack.style.animationPlayState = "running";
    }
});

// Optional: Pause when mouse is over the slider
slideTrack.addEventListener("mouseenter", () => {
    slideTrack.style.animationPlayState = "paused";
});

// Resume when mouse leaves
slideTrack.addEventListener("mouseleave", () => {
    slideTrack.style.animationPlayState = "running";
});

console.log("🌸 Beautiful Flower Garden Loaded Successfully!");