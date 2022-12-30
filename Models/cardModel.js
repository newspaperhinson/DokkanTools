const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    character: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card