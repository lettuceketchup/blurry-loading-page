const { incrementProgress, scale } = require('./utils'); // adjust the path as needed

describe('Utility functions', () => {
  test('incrementProgress should increment the progress', () => {
    const progress = 50;
    const newProgress = incrementProgress(progress);
    expect(newProgress).toBeGreaterThanOrEqual(progress);
    // expect(newProgress).toBeLessThanOrEqual(progress + PROGRESS_INCREMENT_RNG);
  });

  test('scale should scale the number', () => {
    const num = 5;
    const inMin = 0;
    const inMax = 10;
    const outMin = 0;
    const outMax = 100;
    const result = scale(num, inMin, inMax, outMin, outMax);
    expect(result).toBe(50);
  });
});