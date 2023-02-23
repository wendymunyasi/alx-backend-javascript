/**
 * Calculates the sum of two rounded numbers
 * @param {number} a - The first number to be rounded and added
 * @param {number} b - The second number to be rounded and added
 * @returns {number} The sum of a and b, with both numbers rounded to the
 * nearest integer
 */
function calculateNumber(a, b) {
  // Round the first number to the nearest integer
  const roundedA = Math.round(a);
  // Round the second number to the nearest integer
  const roundedB = Math.round(b);
  // Add the two rounded numbers together and return the result
  return roundedA + roundedB;
}

// Export the calculateNumber function so it can be used in other files
module.exports = calculateNumber;
