const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    participants: [
        { type: Schema.Types.ObjectId, ref: 'user' }
    ],
}, {
    timestamps: true
})

const Course = mongoose.model('course', courseSchema)
module.exports = Course