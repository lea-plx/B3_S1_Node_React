const express = require('express');
const router = express.Router();
const data = require('../data'); // Charger les données

// Récupérer tous les étudiants
router.get('/', (req, res) => {
  res.json(data.students);
});

// Ajouter un étudiant
router.post('/', (req, res) => {
  const newStudent = req.body;
  newStudent.id = data.students.length ? Math.max(...data.students.map(s => s.id)) + 1 : 1; // Assigner un nouvel ID
  data.students.push(newStudent);
  res.status(201).json(newStudent);
});

// Modifier un étudiant
router.put('/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const studentToUpdate = data.students.find(s => s.id === studentId);

  if (studentToUpdate) {
    Object.assign(studentToUpdate, req.body);
    res.json(studentToUpdate);
  } else {
    res.status(404).send('Étudiant non trouvé');
  }
});

// Supprimer un étudiant
router.delete('/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const index = data.students.findIndex(s => s.id === studentId);

  if (index !== -1) {
    data.students.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send('Étudiant non trouvé');
  }
});

module.exports = router;
