const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;

const classesRoutes = require('./routes/classes');
const studentsRoutes = require('./routes/students');

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use('/classes', classesRoutes); // Routes pour les classes
app.use('/students', studentsRoutes); // Routes pour les étudiants

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
