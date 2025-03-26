require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// (Optional) Parse JSON request bodies if you need it
app.use(express.json());

// 1) Serve everything in the "frontend" folder
app.use(express.static(path.join(__dirname, '../frontend')));

// 2) Serve index.html at the root path "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// (Optional) Additional routes go here
// e.g. app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
