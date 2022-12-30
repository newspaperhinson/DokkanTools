const express = require('express')
const mongoose = require('mongoose')

// use modules
require('dotenv').config()
const app = express()
mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection

// require mongoose models
const Card = require('./Models/cardModel')

db.on('error', () => {
    console.log('Error during connecting to database')
})
db.once('open', () => {
    console.log('Database is open...')
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    app.post('/debug', (req, res) => {
        const defaultCard = {
            id: '1025560',
            image: './images/card/1025560_thumb.png',
            title: '覚醒するスーパーヒーロー',
            character: 'アルティメット孫悟飯',
            rarity: 'LR',
            cost: 77,
            type: '超体'
        }
        Card.create(defaultCard, (error, card) => {
            if (error) return res.send(error)
            res.send(card)
        })
    })
    app.listen(80, () => {
        console.log('Server is listening to port 80...')
    })
})
