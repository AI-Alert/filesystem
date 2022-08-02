const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    mime_type: {type: String, required: true},
    size: {type: Number, required: true},
});

module.exports = mongoose.model("fileSchema", fileSchema);