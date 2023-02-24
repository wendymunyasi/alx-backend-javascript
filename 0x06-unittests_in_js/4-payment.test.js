/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-hooks */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable prefer-destructuring */
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;

  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    stub.restore();
  });

  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(stub);
    sinon.assert.calledWith(stub, 'SUM', 100, 20);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'The total is: 10');

    spy.restore();
  });
});
