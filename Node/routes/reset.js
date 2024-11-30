const express = require('express');
const router = express.Router();
const data = require('../data'); // Charger les données

// Réinitialiser les données
router.post('/', (req, res) => {
  data.classes = [
    { id: 1, name: 'B3 - DATA IA', students: 5 },
    { id: 2, name: 'B3 - Cyber', students: 3 },
  ];

  data.students = [
    { id: 1, name: 'John Doe', classId: 1 },
    { id: 2, name: 'Jane Doe', classId: 2 },
  ];

  res.sendStatus(204);
});

module.exports = router;
