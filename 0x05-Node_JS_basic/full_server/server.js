// import routes from './routes';

import router from './routes';

const express = require('express');
const app = express();

// Use the routes defined in full_server/routes/index.js
app.use('/', router);

// Start the server on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
