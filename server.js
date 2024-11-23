const express = require('express');
const bodyParser = require('body-parser');

const classesRoutes = require('./routes/classes');
const studentsRoutes = require('./routes/students');

const app = express();
app.use(bodyParser.json());

app.use('/classes', classesRoutes); // Routes pour les classes
app.use('/students', studentsRoutes); // Routes pour les étudiants

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
