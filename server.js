const express = require('express')

// use modules
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(80, () => {
    console.log('Server is listening to port 80...')
})