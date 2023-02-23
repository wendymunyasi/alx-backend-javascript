/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

// You can assume a and b are always number

describe('calculateNumber', () => {
  it('handles adding two rounded numbers when type is SUM', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
  });

  it('handles subtracting two rounded numbers when type is SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 5.9, 2.3), 4);
    assert.equal(calculateNumber('SUBTRACT', -5.9, -2.3), -4);
  });

  it('handles dividing two rounded numbers when type is DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 8, 2), 4);
    // assert.equal(calculateNumber('DIVIDE', 5.0, 3.0), 2);
  });

  it('returns Error when dividing by 0', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', -8, 0), 'Error');
  });

  it('throws an error when an invalid type is provided', () => {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1, 2), Error);
  });
});
