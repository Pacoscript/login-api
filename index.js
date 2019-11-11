require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const expressSession = require('express-session')

const app = new express()
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
)

const MongoStore = require('connect-mongo')(expressSession)

app.use(
  expressSession({
    secret: process.env.EXPRESS_SESSION_KEY,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  })
)

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})
