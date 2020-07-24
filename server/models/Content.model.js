const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contentSchema = new Schema({
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

const Content = mongoose.model('content', contentSchema)
module.exports = Content