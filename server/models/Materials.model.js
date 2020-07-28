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
        type: String
    },
    ad_item: {
        type: String
    },
    username: {
        type: String
    },
    favourite: [
        { type: Schema.Types.ObjectId, ref: 'materials' }
    ],
    my_courses: [
        { type: Schema.Types.ObjectId, ref: 'course' }
    ],
    genre: {
        type: [String],
        enum:["comedia", "tragedia", "infantil", "mímica"]
    }
}, {
    timestamps: true
})

const Materials = mongoose.model('Materials', materialsSchema)
module.exports = Materials