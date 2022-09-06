const asyncHandler = require('express-async-handler')
// Bringging the patient Model

const Patient = require('../models/patientModel')

// GET user patients
// route /api/patients
// PRIVATE
const getPatients = asyncHandler(async (req,res) => {
    const patients = await Patient.find()
    //res.status(200).json({message:'get patients'})
    res.status(200).json(patients)
})

// SET new user patient
// route /api/patients
// PRIVATE
const setPatient = asyncHandler(async (req,res) => {
    if(!req.body.text){
        throw new Error("please add a text field")
    }
    const patient = await Patient.create({
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.height,
    })
    //res.status(200).json({message:'set patient'})
    res.status(200).json(patient)
})

// UPDATE user patient
// route /api/patients/:id
// PRIVATE
const updatePatient = asyncHandler(async (req,res) => {
    const patient = await Patient.findById(req.params.id)
    if(!patient){
        req.status(400)
        throw new Error("patient not found")
    }
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, {new:true})
    //res.status(200).json({message:`update patient ${req.params.id}`})
    res.status(200).json(updatedPatient)
})

// DELETE user patient
// route /api/patients/:id
// PRIVATE
const deletePatient = asyncHandler(async (req,res) => {
    const patient = await Patient.findById(req.params.id)
    if(!patient){
        req.status(400)
        throw new Error("patient not found")
    }
    await Patient.remove()
    //res.status(200).json({message:`delete patient ${req.params.id}`})
    res.status(200).json({id:req.params.id})
})

module.exports = {
    getPatients,
    setPatient,
    updatePatient,
    deletePatient
}