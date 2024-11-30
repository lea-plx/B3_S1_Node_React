const express = require('express');
const router = express.Router();
const data = require('../data'); // Charger les données

// Récupérer toutes les classes
router.get('/', (req, res) => {
  res.json(data.classes);
});

// Ajouter une classe
router.post('/', (req, res) => {
  const newClass = req.body;
  newClass.id = data.classes.length ? Math.max(...data.classes.map(c => c.id)) + 1 : 1; // Assigner un nouvel ID
  data.classes.push(newClass);
  res.status(201).json(newClass);
});

// Modifier une classe
router.put('/:id', (req, res) => {
  const classId = parseInt(req.params.id, 10);
  const classToUpdate = data.classes.find(c => c.id === classId);

  if (classToUpdate) {
    Object.assign(classToUpdate, req.body);
    res.json(classToUpdate);
  } else {
    res.status(404).send('Classe non trouvée');
  }
});

// Supprimer une classe
router.delete('/:id', (req, res) => {
  const classId = parseInt(req.params.id, 10);
  const index = data.classes.findIndex(c => c.id === classId);

  if (index !== -1) {
    data.classes.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send('Classe non trouvée');
  }
});

module.exports = router;
