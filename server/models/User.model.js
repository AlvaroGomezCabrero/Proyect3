const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
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
        enum: ['ADMIN', 'USER']
    },

}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User
