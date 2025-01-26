// CALL THE PACKAGES --------------------

require("dotenv").config();

let mongoose = require('mongoose');
let EpochTimeStamp = require("./epoch_time_stamp");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', function(err) {
    console.log('mongoose connection error:', err.message);
});

async function generate_epoch_timestamp() {
    try {
        let epoch_time = Math.floor(Date.now() / 1000); //convert to seconds and round to whole number.
        let timestamp = new EpochTimeStamp({ epoch_time });
        timestamp = await timestamp.save();

        //console.log(`Saved timestamp: ${epoch_time}`);

        return timestamp;
    } catch (error) {
        console.error("Error saving timestamp:", error);
    }
}

//generate a timestamp every 5 seconds.
//this conditional is to prevent the indefinite timer from holding jest from exiting after its test.
if (process.env.NODE_ENV !== 'test') {
    setInterval(generate_epoch_timestamp, 5000);
}

module.exports = generate_epoch_timestamp;
