
const express = require('express')
require('dotenv').config();
const db = require('./db/connection')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const categoryRouter = require('./route/categoryRoute')



const app = express()

//middleware
app.use(bodyParser.json())
app.use(morgan('dev'))


//route

app.use('/api', categoryRouter);


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})