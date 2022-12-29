const express = require('express')
const mongoose = require('mongoose')

// use modules
require('dotenv').config()
const app = express()
mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection

db.on('error', () => {
    console.log('Error during connecting to database')
})
db.once('open', () => {
    console.log('Database is open...')
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    app.listen(80, () => {
        console.log('Server is listening to port 80...')
    })
})
