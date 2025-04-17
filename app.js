
const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();
const bookRoutes =require('./routes/bookRoutes.js')
require('dotenv').config();

//using basic auth to authorize the librarian

app.use(basicAuth({
    users: { [process.env.USER]: process.env.PASSWORD },
    challenge: true, 
    unauthorizedResponse: (req) => 'Unauthorized'
}));
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/api/books', bookRoutes);

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
    });
