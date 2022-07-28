const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        validate(value) {
            return validator.isEmail(value)
        }
    },
    password: {
        type: String,
        required: true,
        // validate(value) {
        //     return validator.isStrongPassword(value)
        // }
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
})

userSchema.set('timestamps', true)
userSchema.set('versionKey', false)

const User = mongoose.model('users', userSchema)

module.exports = User
