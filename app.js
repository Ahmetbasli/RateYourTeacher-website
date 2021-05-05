const express = require('express')
const cors = require('cors')
//const test = require('ava')
// don't need to use anymore ---- const bodyParser = require('body-parser')
const bodyParser = require('body-parser')

const personRouter = require('./routes/person')
const postRouter = require('./routes/post')

require('./mongo-connection')

const app = express()

app.use(cors())
app.set('view engine', 'pug')
//don't need to use anymore ---- app.use(bodyParser.json())
app.use(bodyParser.json())

app.use('/person', personRouter)
app.use('/post', postRouter)

/* app.get('/', (req, res) => {
  res.render('index')
})  */

module.exports = app