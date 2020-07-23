const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String
    },
    surname: {
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
    password: {
        type: String
    },
    favourite: [
        { type: Schema.Types.ObjectId, ref: 'content' }
    ], 
    my_courses: [
        { type: Schema.Types.ObjectId, ref: 'course' }
    ],
    role: {
        type: String,
        enum: ['ADMIN', 'USER'], 
        default: 'USER'
    }

}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User
