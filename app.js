const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')


// // Middleware
// app.use('/post', () => {
//     console.log('This is a middleware running')
// })

// Routes
app.get('/', (req, res) => {
    res.send("We are on home page")
})

app.get('/post', (req, res) => {
    res.send("We are on post page")
})


mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connect to DB")
})

// Listening to the server
app.listen(3000)
