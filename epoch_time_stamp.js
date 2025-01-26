const mongoose = require("mongoose");

const epoch_timestamp_schema = new mongoose.Schema({
    epoch_time: { type: Number, required: true },
    created_at: { type: Date, default: Date.now, expires: 60 }, // Auto-delete after 60 seconds
});

module.exports = mongoose.model("EpochTimeStamp", epoch_timestamp_schema);
