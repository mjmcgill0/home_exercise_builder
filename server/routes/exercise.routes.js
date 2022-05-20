const ExerciseContoller = require('../controllers/exercise.controller');

module.exports = (app) => {
    app.post('/api/exercise', ExerciseContoller.createExercise);
    app.get('/api/exercises', ExerciseContoller.getAllExercises);
    app.get('/api/exercises/:id', ExerciseContoller.getExercise);
    app.put('/api/exercises/:id', ExerciseContoller.updateExercise);
    app.delete('/api/exercises/:id', ExerciseContoller.deleteExercise);
}