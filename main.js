const { incrementProgress, scale } = require("./utils");

// Declaring constants
const PROGRESS_WAIT_RNG = 0.01 * 1000;
const MAX_PROGRESS = 100;
const MIN_PROGRESS = 0;

// Selecting elements
let progressBar = document.querySelector(".progress-bar");
let background = document.querySelector(".bg");

// Animation functions
/**
 * Function to unblur the background and hide the percentage with progress
 * @function
 * @returns {void}
 */
const blurringProgress = () => {
    const MAX_OPACITY = 1;
    const MIN_OPACITY = 0.01;
    const MAX_BLUR = 30;
    const MIN_BLUR = 0;
    // progress = incrementProgress(progress);
    progress += 0.5;
    // Stop if progress reaches MAX_PROGRESS
    if (progress >= MAX_PROGRESS) {
        progress = 100;
        clearInterval(interval);
    }

    // Display progress
    progressBar.innerText = `${progress}%`;
    // Adjsut text opactiy
    progressBar.style.opacity = scale(
        progress,
        MIN_PROGRESS,
        MAX_PROGRESS,
        MAX_OPACITY,
        MIN_OPACITY
    );
    // Adjust background blur filter
    background.style.filter = `blur(${scale(
        progress,
        MIN_PROGRESS,
        MAX_PROGRESS,
        MAX_BLUR,
        MIN_BLUR
    )}px)`;
};

/**
 * This function updates the circular progress bar and the background blur effect based on the progress value.
 * @function
 * @returns {void}
 */
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
    progress += 0.5;

    // Stop if progress reaches MAX_PROGRESS
    if (progress >= MAX_PROGRESS) {
        progress = 100;
        clearInterval(interval);
    }

    // Set the background of sBar to a conic-gradient. The color and degree of rotation are determined by the scale function and the progress variable.
    progressBar.style.background = `conic-gradient(${BAR_COLOR}${scale(
        progress,
        MIN_PROGRESS,
        MAX_PROGRESS,
        MAX_OPACITY,
        MIN_OPACITY
    )} ${3.6 * progress}deg, transparent ${5 * progress}deg)`;
    // Set the height of progressBar. The height is determined by the scale function and the progress variable.
    progressBar.style.height = `${scale(
        progress,
        MIN_PROGRESS,
        MAX_PROGRESS,
        MAX_WIDTH,
        MIN_WIDTH
    )}px`;
    // Set the width of progressBar. The width is determined by the scale function and the progress variable.
    progressBar.style.width = `${scale(
        progress,
        MIN_PROGRESS,
        MAX_PROGRESS,
        MAX_WIDTH,
        MIN_WIDTH
    )}px`;
    // Transform the background by scaling it. The scale value is determined by the scale function and the progress variable.
    background.style.transform = `scale(${scale(
        progress,
        MIN_PROGRESS,
        MAX_PROGRESS,
        MAX_SCALE,
        MIN_SCALE
    )})`;
    // Blurs the background. The blur value is determined by the scale function and the progress variable.
    background.style.filter = `blur(${scale(
        progress,
        MIN_PROGRESS,
        MAX_PROGRESS,
        MAX_BLUR,
        MIN_BLUR
    )}px)`;
};

// Start and Progress
let progress = MIN_PROGRESS;
let interval = setInterval(circularProgressBar, PROGRESS_WAIT_RNG);
