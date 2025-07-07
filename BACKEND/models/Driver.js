const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema({
    Name : {
        type : String,
        required: true
    },
    NIC : {
        type : String,
        required: true
    },
    Age : {
        type : Number,
        required: true
    },
    Address : {
        type : String,
        required: true
    },
    Email : {
        type : String,
        required: true
    },
    Contact_Number: {
        type : Number,
        required: true
    },
    Vehicle_Number: {
        type : String,
        required: false
    }
})

const Driver = mongoose.model("Driver",driverSchema);

module.exports = Driver;