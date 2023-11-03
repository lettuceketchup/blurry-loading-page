// Description: Utility functions for the application.

/**
 * Increments the progress by a random value between 0 and 2.
 * @param {number} progress - The current progress value.
 * @returns {number} - The updated progress value.
 */
const incrementProgress = (progress) => {
    // The range of progress increments for the blurry loading page.
    const PROGRESS_INCREMENT_RNG = 2; 
    return progress += parseInt(Math.random() * PROGRESS_INCREMENT_RNG);
}

/**
 * Scales a number from one range to another.
 * @param {number} num - The number to scale.
 * @param {number} inMin - The minimum value of the input range.
 * @param {number} inMax - The maximum value of the input range.
 * @param {number} outMin - The minimum value of the output range.
 * @param {number} outMax - The maximum value of the output range.
 * @returns {number} The scaled number.
 */
const scale = (num, inMin, inMax, outMin, outMax) => ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

module.exports = { incrementProgress, scale };