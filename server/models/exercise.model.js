const mongoose = require('mongoose');
const ExerciseSchema = new mongoose.Schema({
    name: { 
        type: String,
        minLength: [3, "Exercise name must be at least 3 characters."],
        required: [true, "Exercise name is required."] },
    type: { 
        type: String,
        minLength: [3, "Exercise type must be at least 3 characters."],
        required: [true, "Exercise type is required."] },
    structure: { 
        type: String,
        minLength: [3, "Targeted structure must be at least 3 characters."],
        required: [true, "Targeted structure is required."] },
    description: { 
        type: String,
        minLength: [3, "Exercise description must be at least 3 characters."],
        required: [true, "Exercise description is required."] },
    sets: { 
        type: Number,
        required: [true, "Number of sets is required."] },
    reps: { 
        type: Number,
        required: [true, "Number of repetitions is required."] },
    time: { type: String },
    frequency: { 
        type: Number,
        required: [true, "Frequency of performance is required."] },
}, { timestamps: true });

module.exports = mongoose.model('Exercise', ExerciseSchema);