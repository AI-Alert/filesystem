const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, createdAt: new Date()},
    mime_type: {type: String, required: true, createdAt: new Date()},
    size: {type: Number, required: true, createdAt: new Date()},
});

module.exports = mongoose.model("fileSchema", fileSchema);