const express = require('express');
const { getClasses, addClass, updateClass, deleteClass } = require('../controllers/classesController');
const router = express.Router();

router.get('/', getClasses); // Lire les classes
router.post('/', addClass); // Créer une classe
router.put('/:id', updateClass); // Modifier une classe
router.delete('/:id', deleteClass); // Supprimer une classe

module.exports = router;
