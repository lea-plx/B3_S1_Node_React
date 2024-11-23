const fs = require('fs');
const dataPath = './data/database.json'; // Chemin du fichier JSON

// Lire les classes
const getClasses = (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataPath));
    res.json(data.classes);
};

// Ajouter une classe
const addClass = (req, res) => {
    const { name } = req.body;
    const data = JSON.parse(fs.readFileSync(dataPath));
    const newClass = { id: Date.now(), name };
    data.classes.push(newClass);
    fs.writeFileSync(dataPath, JSON.stringify(data));
    res.status(201).json(newClass);
};

// Modifier une classe
const updateClass = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const data = JSON.parse(fs.readFileSync(dataPath));
    const classIndex = data.classes.findIndex(cls => cls.id == id);
    if (classIndex === -1) return res.status(404).send('Classe introuvable');
    data.classes[classIndex].name = name;
    fs.writeFileSync(dataPath, JSON.stringify(data));
    res.json(data.classes[classIndex]);
};

// Supprimer une classe
const deleteClass = (req, res) => {
    const { id } = req.params;
    const data = JSON.parse(fs.readFileSync(dataPath));
    data.classes = data.classes.filter(cls => cls.id != id);
    fs.writeFileSync(dataPath, JSON.stringify(data));
    res.status(204).send();
};

module.exports = { getClasses, addClass, updateClass, deleteClass };
