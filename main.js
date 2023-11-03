// const DEFAULT_BACKGROUND = {
//     imageUrl: "./images/painting-image.png"
// }

// const DEFAULT_PROGRESS_BAR_STYLE = {
//     style: "percentage"
// }

// Declaring constants
const PROGRESS_INCREMENT_RNG = 4;
const PROGRESS_WAIT_RNG = 0.08 * 1000;

// Selecting elements
let loadText = document.querySelector(".progress-bar");
let bg = document.querySelector(".bg");

const scale = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

const blurring = () => {
    /*
    Function to unblur the background and hide the percentage with progress
    */
    progress += parseInt(Math.random() * PROGRESS_INCREMENT_RNG);
    if (progress > 99) clearInterval(interval);

    loadText.innerText = `${progress}%`;
    loadText.style.opacity = scale(progress, 0, 100, 1, 0.01);
    bg.style.filter = `blur(${scale(progress, 0, 100, 30, 0)}px)`;
};

// Start and Progress
let progress = 0;
let interval = setInterval(blurring, Math.random() * PROGRESS_WAIT_RNG);
