const http = require('http');
const app = require('./api');

// Define a simple test runner
function runTests(tests) {
  let failures = 0;
  for (const [name, test] of tests) {
    console.log(`Running test: ${name}`);
    try {
      test();
      console.log(`\t✓ Passed`);
    } catch (error) {
      failures++;
      console.log(`\t✕ Failed: ${error.message}`);
    }
  }
  console.log(`\n${failures} test(s) failed`);
}

// Define an assertion function for checking status codes
function expectStatus(response, statusCode) {
  if (response.statusCode !== statusCode) {
    throw new Error(`Expected status ${statusCode}, but got ${response.statusCode}`);
  }
}

// Define an assertion function for checking response bodies
function expectBody(response, expectedBody) {
  let body = '';
  response.on('data', chunk => {
    body += chunk;
  });
  response.on('end', () => {
    if (body !== expectedBody) {
      throw new Error(`Expected body "${expectedBody}", but got "${body}"`);
    }
  });
}

// Define the tests for the index page
const indexTests = [
  ['Returns status code 200', () => {
    const request = http.get('http://localhost:7865', response => {
      expectStatus(response, 200);
    });
  }],
  ['Returns the welcome message', () => {
    const request = http.get('http://localhost:7865', response => {
      expectStatus(response, 200);
      expectBody(response, 'Welcome to the payment system');
    });
  }]
];

// Run the tests for the index page
console.log('Running tests for the index page:');
runTests(indexTests);
