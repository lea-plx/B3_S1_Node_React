const express = require('express');
const { getClasses, addClass, updateClass, deleteClass } = require('../controllers/classesController');
const router = express.Router();
const data = require('./data.json');

router.get('/', getClasses); // Lire les classes
router.post('/', addClass); // Créer une classe
router.put('/:id', updateClass); // Modifier une classe
router.delete('/:id', deleteClass); // Supprimer une classe

// Route pour récupérer toutes les classes avec leurs étudiants
router.get('/', (req, res) => {
    res.json(data.classes); // Récupère et renvoie toutes les classes avec leurs étudiants
  });

  router.get('/:id', (req, res) => {
    const classId = parseInt(req.params.id);
    const classFound = data.classes.find(c => c.id === classId);
  
    if (classFound) {
      res.json(classFound);
    } else {
      res.status(404).send("Classe non trouvé");
    }
  });

module.exports = router;
