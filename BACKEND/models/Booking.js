const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    Name : {
        type : String,
        required: true
    },
    Contact_Number: {
        type : Number,
        required: true
    },
    Destination : {
        type : String,
        required: true
    },
    Start_Date: {
        type : String,
        required: true
    },
    End_Date: {
        type : String,
        required: true
    },
    DName : {
        type : String,
        required: true
    },
})

const Booking = mongoose.model("Booking",bookingSchema);

module.exports = Booking;