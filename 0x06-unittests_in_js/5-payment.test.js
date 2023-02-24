/* eslint-disable no-unused-expressions */
/* eslint-disable jest/no-hooks */
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('calls sendPaymentRequestToAPI with 100, and 20: and logs "The total is: 120" once', () => {
    const totalAmount = 100;
    const totalShipping = 20;
    const expectedSum = Utils.calculateNumber('SUM', totalAmount, totalShipping);

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith(`The total is: ${expectedSum}`)).to.be.true;
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('calls sendPaymentRequestToAPI with 10, and 10: and logs "The total is: 20" once', () => {
    const totalAmount = 10;
    const totalShipping = 10;
    const expectedSum = Utils.calculateNumber('SUM', totalAmount, totalShipping);

    sendPaymentRequestToApi(totalAmount, totalShipping);

    // eslint-disable-next-line no-unused-expressions
    expect(consoleSpy.calledOnce).to.be.true;
    // eslint-disable-next-line no-unused-expressions
    expect(consoleSpy.calledWith(`The total is: ${expectedSum}`)).to.be.true;
  });
});
