const express = require('express');
const { getStudents, addStudent, updateStudent, deleteStudent } = require('../controllers/studentsController');
const router = express.Router();

router.get('/', getStudents); // Lire les étudiants
router.post('/', addStudent); // Ajouter un étudiant
router.put('/:id', updateStudent); // Modifier un étudiant
router.delete('/:id', deleteStudent); // Supprimer un étudiant

module.exports = router;
