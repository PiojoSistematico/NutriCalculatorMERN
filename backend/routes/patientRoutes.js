const express = require('express')
const router = express.Router()
const {getPatients,setPatient,updatePatient,deletePatient} = require('../controllers/patientController')

router.route('/').get(getPatients).post(setPatient)
router.route('/:id').put(updatePatient).delete(deletePatient)

//router.get('/', getPatients)
//router.post('/', setPatient)
//router.put('/', updatePatient)
//router.delete('/', deletePatient)

module.exports = router