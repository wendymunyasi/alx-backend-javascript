const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  // console.log(`sum: ${sum}`); // added console.log statement
  // console.log(`about to log The total is: ${sum}`); // added console.log statement
  console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;
