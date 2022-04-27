const express = require('express')
const router = express.Router()
const pacientesController = require('../controllers/pacienteController')


// agregar nuevos pacientes via POST 
router.post('/pacientes',pacientesController.nuevoPaciente );

router.get('/pacientes',pacientesController.getAllPacientes);

router.get('/pacientes/:id',pacientesController.getPaciente)

router.put('/pacientes/:id',pacientesController.updatePaciente)

router.delete('/pacientes/:id',pacientesController.deletePaciente)

module.exports = router