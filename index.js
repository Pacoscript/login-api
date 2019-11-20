require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const bodyParser = require('body-parser')

const createUserController = require ('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')
const loginUserController = require('./controllers/loginUser')

const app = new express()
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
)

const mongoStore = connectMongo(expressSession)

app.use(
  expressSession({
    secret: process.env.EXPRESS_SESSION_KEY,
    store: new mongoStore({
      mongooseConnection: mongoose.connection
    }),
    resave: true,
    saveUninitialized: true
  })
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')

app.get('/auth/register', redirectIfAuthenticated, createUserController)
app.post('/users/register',  storeUserController)
app.post('/users/login', loginUserController )

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})
