
const express = require('express');
const app = express();
const bookRoutes =require('./routes/bookRoutes.js')
require('dotenv').config();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/api/books', bookRoutes);

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
    });