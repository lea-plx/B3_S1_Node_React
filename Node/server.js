const express = require('express');
const cors = require('cors');
const port = 3001;

const classesRoutes = require('./routes/classes');
const studentsRoutes = require('./routes/students');
const resetRoutes = require('./routes/reset');

const app = express();

// Middleware
app.use(express.json()); // Parseur JSON intégré d'Express
app.use(cors()); // Middleware CORS pour permettre les requêtes cross-origin

// Routes
app.use('/api/classes', classesRoutes); // Routes pour les classes
app.use('/api/students', studentsRoutes); // Routes pour les étudiants
app.use('/api/reset', resetRoutes); // Route pour réinitialiser les données

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
