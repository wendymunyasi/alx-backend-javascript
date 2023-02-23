/**
 * Performs a mathematical operation on two rounded numbers
 * @param {string} type - The type of operation to perform (SUM, SUBTRACT,
 * or DIVIDE)
 * @param {number} a - The first number to be rounded and used in the
 * operation
 * @param {number} b - The second number to be rounded and used in the
 * operation
 * @returns {number|string} The result of the operation, or "Error" if
 * the operation is division and b is rounded to 0
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;

    default:
      throw new Error(`Invalid type: ${type}`);
  }
}

module.exports = calculateNumber;
