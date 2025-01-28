const express = require('express');
const app = express();
const port = 3000;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  try {
    // Your existing code here, potentially the source of errors
    res.send('Hello from Express!');
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});