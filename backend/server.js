const express = require('express')
const app = express()
var cors = require('cors')
// require('dotenv').config()
// const vars = process.env
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api', workoutRoutes)

mongoose.connect('mongodb://localhost:27017/Workouts').then(() => {
    app.listen(5000, () => {
        console.log('connected to db & listening on port', 5000)
    });
}).catch((err) => {
    console.log(err)
})
