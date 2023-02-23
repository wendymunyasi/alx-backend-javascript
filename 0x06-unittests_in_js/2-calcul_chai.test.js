/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

// You can assume a and b are always number

describe('calculateNumber', () => {
  it('handles adding two rounded numbers when type is SUM', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
  });

  it('handles subtracting two rounded numbers when type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 5.9, 2.3)).to.equal(4);
    expect(calculateNumber('SUBTRACT', -5.9, -2.3)).to.equal(-4);
  });

  it('handles dividing two rounded numbers when type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
    // expect(calculateNumber('DIVIDE', 5.0, 3.0)).toEqual(2);
  });

  it('returns Error when dividing by 0', () => {
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -8, 0)).to.equal('Error');
  });

  it('throws an error when an invalid type is provided', () => {
    expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw(Error);
  });
});
