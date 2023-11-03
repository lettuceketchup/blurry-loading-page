// Declaring constants
const PROGRESS_INCREMENT_RNG = 2;
const PROGRESS_WAIT_RNG = 0.01 * 1000;
const MAX_PROGRESS = 100;
const MIN_PROGRESS = 0;

// Selecting elements
let progressBar = document.querySelector(".progress-bar");
let background = document.querySelector(".bg");

// Utility functions
const incrementProgress = (progress) => progress += parseInt(Math.random() * PROGRESS_INCREMENT_RNG);

const scale = (num, inMin, inMax, outMin, outMax) => 
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

// Animation functions
const blurringProgress = () => {
    /*
    Function to unblur the background and hide the percentage with progress
    */
    const MAX_OPACITY = 1;
    const MIN_OPACITY = 0.01;
    const MAX_BLUR = 30;
    const MIN_BLUR = 0;
    // progress = incrementProgress(progress);
    progress+=.5;
    // Stop if progress reaches MAX_PROGRESS
    if (progress >= MAX_PROGRESS) {
        progress = 100;
        clearInterval(interval);
    }

    // Display progress
    progressBar.innerText = `${progress}%`;
    // Adjsut text opactiy
    progressBar.style.opacity = scale(progress, MIN_PROGRESS, MAX_PROGRESS, MAX_OPACITY, MIN_OPACITY);
    // Adjust background blur filter
    background.style.filter = `blur(${scale(progress, MIN_PROGRESS, MAX_PROGRESS, MAX_BLUR, MIN_BLUR)}px)`;
};

const circularProgressBar = () => {
    const BAR_COLOR = "#1f1f1f";
    const MAX_OPACITY = 100;
    const MIN_OPACITY = 0;
    const MAX_WIDTH = 800;
    const MIN_WIDTH = 0;
    const MAX_SCALE = 20;
    const MIN_SCALE = 1;
    const MAX_BLUR = 30;
    const MIN_BLUR = 0;
    // progress = incrementProgress(progress);
    progress+=.5;
    // Stop if progress reaches MAX_PROGRESS
    if (progress >= MAX_PROGRESS) {
        progress = 100;
        clearInterval(interval);
    }

    progressBar.style.background = `conic-gradient(${BAR_COLOR}${scale(progress, MIN_PROGRESS, MAX_PROGRESS, MAX_OPACITY, MIN_OPACITY)} ${3.6 * progress}deg, transparent ${5 * progress}deg)`;
    progressBar.style.height = `${scale(progress, MIN_PROGRESS, MAX_PROGRESS, MAX_WIDTH, MIN_WIDTH)}px`;
    progressBar.style.width = `${scale(progress, MIN_PROGRESS, MAX_PROGRESS, MAX_WIDTH, MIN_WIDTH)}px`;
    background.style.transform = `scale(${scale(progress, MIN_PROGRESS, MAX_PROGRESS, MAX_SCALE, MIN_SCALE)})`
    background.style.filter = `blur(${scale(progress, MIN_PROGRESS, MAX_PROGRESS, MAX_BLUR, MIN_BLUR)}px)`;
}

// Start and Progress
// setTimeout(console.log(Start), 1)
let progress = MIN_PROGRESS;
let interval = setInterval(circularProgressBar, PROGRESS_WAIT_RNG)


