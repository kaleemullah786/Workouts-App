const express = require('express')
const router = express.Router()
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controller/workoutControllers')

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router