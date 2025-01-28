const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is where the error might occur
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});