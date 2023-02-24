/* eslint-disable jest/expect-expect */
const assert = require('assert');
const http = require('http');

// Set up the endpoint URLs
const BASE_URL = 'http://localhost:7866';
const LOGIN_URL = `${BASE_URL}/login`;
const PAYMENTS_URL = `${BASE_URL}/available_payments`;

// Test the /login endpoint
describe('/login', () => {
  it('should return a welcome message with the username', () => new Promise((done) => {
    // Define the request payload
    const payload = JSON.stringify({ userName: 'john_doe' });

    // Set up the request options
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: LOGIN_URL,
      body: payload,
    };

    // Send the request
    const req = http.request(options, (res) => {
      let data = '';

      // Set up the response listener
      res.on('data', (chunk) => {
        data += chunk;
      });

      // Set up the end listener
      res.on('end', () => {
        // Parse the response body
        const body = JSON.parse(data);

        // Check the status code
        assert.strictEqual(res.statusCode, 200);

        // Check the response message
        assert.strictEqual(body.message, 'Welcome john_doe');

        // Done
        done();
      });
    });

    // Send the request payload
    req.write(payload);

    // End the request
    req.end();
  }));
});

// Test the /available_payments endpoint
describe('/available_payments', () => {
  it('should return the list of available payments', () => new Promise((done) => {
    // Set up the request options
    const options = {
      method: 'GET',
      url: PAYMENTS_URL,
    };

    // Send the request
    const req = http.request(options, (res) => {
      let data = '';

      // Set up the response listener
      res.on('data', (chunk) => {
        data += chunk;
      });

      // Set up the end listener
      res.on('end', () => {
        // Parse the response body
        const body = JSON.parse(data);

        // Check the status code
        assert.strictEqual(res.statusCode, 200);

        // Check the response structure
        assert.deepStrictEqual(body, {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });

        // Done
        done();
      });
    });

    // End the request
    req.end();
  }));
});
