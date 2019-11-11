const mongoose = require('mongoose');

const NinjaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    totalPoints: { type: Number},
    transactions: [],
    }, { timestamps: true });

const Ninja = mongoose.model('ninjas', NinjaSchema);

//Exports:
module.exports = {
    Ninja: Ninja,
};