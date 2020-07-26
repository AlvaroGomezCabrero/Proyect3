const mongoose = require('mongoose')
const Schema = mongoose.Schema

const materialsSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    genre: {
        type: [String],
        enum:["comedia", "tragedia", "infantil", "mímica"]
    }
}, {
    timestamps: true
})

const Materials = mongoose.model('Materials', materialsSchema)
module.exports = Materials