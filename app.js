
const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();
const bookRoutes =require('./routes/bookRoutes.js')
require('dotenv').config();

// app.use(basicAuth({
//     users: { 'admin': 'password123' }, // 👈 change this to your credentials
//     challenge: true, // prompts browser popup
//     unauthorizedResponse: (req) => 'Unauthorized'
// }));
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/api/books', bookRoutes);

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
    });