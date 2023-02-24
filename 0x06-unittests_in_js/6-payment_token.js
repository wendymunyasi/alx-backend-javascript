/**
 * Simulates an API call to get a payment token
 * @param {boolean} success - Whether the API call is successful or not
 * @returns {Promise} A Promise that resolves with an object containing
 * a "data" property if success is true. Otherwise, the Promise does nothing.
 */
function getPaymentTokenFromAPI(success) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // We are not doing anything if success is false, 
      // but we can reject the promise if desired
      // reject('Error: API call failed');
    }
  });
}

module.exports = getPaymentTokenFromAPI;
