const express = require('express');
require('dotenv').config();
const app = express();
const connection = require('./db');
const cors = require('cors')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
//database connection
connection();


app.use(cors());
app.use(express.json());


//routes 
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})