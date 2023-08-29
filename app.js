const express = require('express');
const path = require('path');

const app = express();
const port = 8000; // Use your desired port number

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
