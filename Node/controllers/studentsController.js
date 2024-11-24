const fs = require('fs');
const dataPath = './data/database.json'; // Chemin vers le fichier JSON

// Lire les étudiants
const getStudents = (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataPath));
    res.json(data.students);
};

// Ajouter un étudiant
const addStudent = (req, res) => {
    const { prenom, nom, classe, email } = req.body;
    const data = JSON.parse(fs.readFileSync(dataPath));
    const newStudent = { id: Date.now(), prenom, nom, classe, email };
    data.students.push(newStudent);
    fs.writeFileSync(dataPath, JSON.stringify(data));
    res.status(201).json(newStudent);
};

// Modifier un étudiant
const updateStudent = (req, res) => {
    const { id } = req.params;
    const { prenom, nom, classe, email } = req.body;
    const data = JSON.parse(fs.readFileSync(dataPath));
    const studentIndex = data.students.findIndex(stu => stu.id == id);
    if (studentIndex === -1) return res.status(404).send('Étudiant introuvable');
    data.students[studentIndex] = { ...data.students[studentIndex], prenom, nom, classe, email };
    fs.writeFileSync(dataPath, JSON.stringify(data));
    res.json(data.students[studentIndex]);
};

// Supprimer un étudiant
const deleteStudent = (req, res) => {
    const { id } = req.params;
    const data = JSON.parse(fs.readFileSync(dataPath));
    data.students = data.students.filter(stu => stu.id != id);
    fs.writeFileSync(dataPath, JSON.stringify(data));
    res.status(204).send();
};

module.exports = { getStudents, addStudent, updateStudent, deleteStudent };
