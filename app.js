const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
require('dotenv/config')

const app = express()

app.use(cors)
app.use(bodyParser.json())

// Import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

// ROUTES
app.get('/', async (req, res) => {
    res.send("We are on home")
})


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log('Connected to DB');
    })
    .catch((error) => {
        console.error('Error connecting to DB:', error);
    });

// LISTENING THE APP
app.listen(3000)