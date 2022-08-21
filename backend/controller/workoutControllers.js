const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    try {
        const response = await Workout.create({ title, reps, load })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}

const getWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.json({ error: 'No such workout' })
    const workout = await Workout.findById(id)
    if (!workout)
        return res.json({ error: 'No such workout' })
    res.status(200).json(workout)
}

const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.json({ error: 'No such workout' })
    const workout = await Workout.findByIdAndDelete(id)
    if (!workout)
        return res.json({ error: 'No such workout' })
    res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.json({ error: 'No such workout' })
    const workout = await Workout.findByIdAndUpdate(id, { ...req.body })
    if (!workout)
        return res.json({ error: 'No such workout' })
    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
}