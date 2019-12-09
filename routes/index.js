const express = require('express')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json({ limit: '50mb' })

const router = express.Router()


//REGISTER USER
// router.post('/users', jsonBodyParser, (req, res) => {
//     routeHandler(() => {
//         const { name, surname, username, password, sex, age, city, presentation, minAgePref, maxAgePref } = req.body

//         return logic.registerUser(name, surname, username, password, sex, age, city, presentation, minAgePref, maxAgePref)
//             .then(() => {
//                 res.status(201)

//                 res.json({
//                     message: `${username} successfully registered`
//                 })
//             })
//     }, res)
// })

//AUTHENTICATE
// router.post('/auth', jsonBodyParser, (req, res) => {
//     routeHandler(() => {
//         const { username, password } = req.body

//         return logic.authenticateUser(username, password)
//             .then(id => {
//                 const token = jwt.sign({ sub: id }, JWT_SECRET)

//                 res.json({
//                     data: {
//                         id,
//                         token
//                     }
//                 })
//             })
//     }, res)
// })


module.exports = router