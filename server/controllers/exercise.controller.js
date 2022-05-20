const Exercise = require('../models/exercise.model');
module.exports.createExercise = (req, res) => {
    Exercise.create(req.body)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json(err));
}

module.exports.getAllExercises = (req, res) => {
    Exercise.find({})
    .then(exercises => res.json(exercises))
    .catch(err => res.json(err));
}

module.exports.getExercise = (req, res) => {
    Exercise.findOne({_id:req.params.id})
    .then(exercise => res.json(exercise))
    .catch(err => res.json(err));
}

module.exports.updateExercise = (req, res) => {
    Exercise.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedExercise => res.json(updatedExercise))
    .catch(err => res.status(400).json(err));
}

module.exports.deleteExercise = (req, res) => {
    Exercise.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err));
}