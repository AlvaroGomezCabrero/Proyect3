const mongoose = require('mongoose')
const Schema = mongoose.Schema

const materialsSchema = new Schema({

    imageUrl: {
        type: String
    },
    description: {
        type: String
    },
    theater_play: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: [String],
        enum: ["Comedia", "Tragedia", "Infantil", "Mímica"],
        require: true
    }
}, {
    timestamps: true
})

const Materials = mongoose.model('Materials', materialsSchema)
module.exports = Materials