const http = require('http');

/**
 * HTTP server that responds with "Hello Holberton School!" to any endpoint.
 * @module 4-http
 */

/**
 * Callback function that handles incoming HTTP requests.
 * @param {http.IncomingMessage} req The incoming HTTP request.
 * @param {http.ServerResponse} res The server response that will be sent back to the client.
 */
const handleRequest = (req, res) => {
  // Set the response header to indicate that the response body will be plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello Holberton School!');
};

// Create a new HTTP server and pass the handleRequest function as the callback
const app = http.createServer(handleRequest);

// Start the server and have it listen on port 1245
app.listen(1245);

// Export the app variable so that it can be used by other modules
module.exports = app;
