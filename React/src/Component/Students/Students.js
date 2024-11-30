import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Students.css';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  }, []);

  const addStudent = (newStudent) => {
    axios.post('http://localhost:3001/api/students', newStudent)
      .then(response => {
        setStudents([...students, response.data]);
      })
      .catch(error => {
        console.error('There was an error adding the student!', error);
      });
  };

  const updateStudent = (updatedStudent) => {
    axios.put(`http://localhost:3001/api/students/${updatedStudent.id}`, updatedStudent)
      .then(response => {
        setStudents(students.map(s => s.id === updatedStudent.id ? response.data : s));
      })
      .catch(error => {
        console.error('There was an error updating the student!', error);
      });
  };

  const deleteStudent = (studentId) => {
    axios.delete(`http://localhost:3001/api/students/${studentId}`)
      .then(() => {
        setStudents(students.filter(s => s.id !== studentId));
      })
      .catch(error => {
        console.error('There was an error deleting the student!', error);
      });
  };

  return (
    <div className="students">
      <h1>Mes étudiants</h1>
      {students.map(student => (
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>Classe ID: {student.classId}</p>
          <button onClick={() => deleteStudent(student.id)}>Supprimer</button>
        </div>
      ))}
      <button onClick={() => addStudent({ name: 'Nouvel étudiant', classId: 1 })}>
        Ajouter un étudiant
      </button>
    </div>
  );
};

export default Students;
