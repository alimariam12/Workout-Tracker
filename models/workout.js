const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrackerSchema = new Schema({
// name
// type
// weight
// sets
// reps
// duration of exercise
});

const Tracker = mongoose.model("User", TrackerSchema);

module.exports = Tracker;
