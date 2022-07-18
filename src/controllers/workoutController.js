const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    // res.send("Get all workouts");
    res.send({ status: "OK", data: allWorkouts });
};

// Get single workout from database
const getOneWorkout = (req, res) => {
    const { params: { workoutId } } = req;

    if(!workoutId) {
        return;
    }

    const workout = workoutService.getOneWorkout(workoutId);
    res.send({ status: "OK", data: workout });
};

// Create new Workout
const createNewWorkout = (req, res) => {
    const { body } = req;

    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };

    const createdWorkout = workoutService.createNewWorkout(newWorkout);

    res.status(201).send({ status: "OK", data: createdWorkout });

};

// Update a single workout
const updateOneWorkout = (req, res) => {
    const {
        body,
        params: { workoutId },
    } = req;

    if (!workoutId) {
        return;
    }

    const updatedWorkout = workoutService.updateOneWorkout();
    res.send({ status: "OK", data: updatedWorkout });
};

const deleteOneWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;

    if (!workoutId) {
        return;
    }

    workoutService.deleteOneWorkout();
    res.status(204).send({ status: "OK" });
};


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout ,
    deleteOneWorkout,
}
