const express = require('express');
const router = express.Router();
const lista2Controller = require('../controllers/lista2Controller');

router.get('/alunos', lista2Controller.getAllAlunos);

router.get('/alunos/:ra', lista2Controller.getAlunoByRA);

router.get('/alunos/:ra/disciplinas', lista2Controller.getDisciplinasByRA);

router.post('/alunos/:ra/disciplinas', lista2Controller.addDisciplina);

router.put('/alunos/:ra', lista2Controller.updateAluno);

module.exports = router;