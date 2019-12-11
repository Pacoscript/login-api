// const { mongoose, models: { User, Message } } = require('lets-talk-data')
const mongoose = require('mongoose')
const User = require('../database/models/User')
const { AlreadyExistsError, AuthError, NotAllowedError, NotFoundError } = require('../errors')
// const validate = require('../utils/validate')
// const cloudinary = require('cloudinary')

const logic = {
    registerUser(name, username, password) {

        // validate([{ key: 'name', value: name, type: String },
        // { key: 'surname', value: surname, type: String },
        // { key: 'username', value: username, type: String },
        // { key: 'password', value: password, type: String },
        // { key: 'sex', value: sex, type: String },
        // { key: 'age', value: age, type: Number },
        // { key: 'city', value: city, type: String },
        // { key: 'presentation', value: presentation, type: String },
        // { key: 'minAgePref', value: minAgePref, type: Number },
        // { key: 'maxAgePref', value: maxAgePref, type: Number }])

        return (async () => {
            let user = await User.findOne({ username })

            if (user) throw new AlreadyExistsError(`username ${username} already registered`)
            user = new User({ name, username, password })

            await user.save()
        })()
    }
}

module.exports = logic
