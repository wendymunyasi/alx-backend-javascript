/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable prefer-destructuring */
const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const bigBrother = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    bigBrother.calculateNumber.restore();
  });
});
