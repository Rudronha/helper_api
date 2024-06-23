const express = require('express');
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const session = require('express-session');
const sequelize = require('./config/db');

const app = express();
sequelize.sync();
// Middleware for session management
app.use(session({
    secret: 'secret', // Change this to a strong, random secret
    resave: false,
    saveUninitialized: true
  }));

app.use(express.json());

app.use('/users',userRoutes);
app.get('/',(req,res)=>{
    res.send("We are Live");
})
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});