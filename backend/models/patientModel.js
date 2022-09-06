const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    height: {type: Number},
    weight: {type: Number},
    age: {type: Number}
}, {
    timestamps: true
})

module.exports = mongoose.model("Patient",patientSchema)