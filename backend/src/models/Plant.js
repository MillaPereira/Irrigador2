const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    name: String,
    description: String,
    frequency: Number,
    id_node: String,
 })

module.exports = mongoose.model("Plant",PlantSchema);