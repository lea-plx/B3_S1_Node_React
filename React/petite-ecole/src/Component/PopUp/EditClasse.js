import { FiX } from "react-icons/fi";
import "./EditClasse.css";
import { putClass } from "../../Controlleur/put_class";
import React, { useRef, useState } from "react";


export function EditClasse(props) {
  const dataClass = props.data;
  const classStudent = dataClass.students;

  // Pour mettre une référence à mon input
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (!classStudent) {
    return (
      <div className="popupContentComponent">
        <div className="popUpHeader">
          <p>Pas de classe</p>
        </div>;
      </div>
    );
  }

  function delStudent(idx) {
    console.log("delete student", idx);
    const updatedStudents = [...classStudent];
    updatedStudents.splice(idx, 1);
    putClass(props.id, dataClass.name, updatedStudents)
      .then(() => {
        props.reloadDataClass();
        props.closePopUp();
      })
      .catch((err) => {
        console.error("Erreur lors de la mise à jour de la classe :", err);
      });
  }


  const editName = (e) => {
    const nameValue = document.getElementById("inputName").value;
    const updatedStudents = [...classStudent];
    putClass(props.id, nameValue, updatedStudents)
      .then(() => {
        props.reloadDataClass();
        props.closePopUp();
        inputRef.current.value = "";
      })
      .catch((err) => {
        console.error("Erreur lors de la mise à jour de la classe :", err);
      });
  };

  return (
    <div className="popupContentComponent">
      <div className="popUpHeader">
        <h4>Modification</h4>
        <FiX onClick={props.closePopUp} className="reactIcon" />
      </div>
      <hr class="hr" />
      <form onSubmit={handleSubmit}></form>
      <label>Nom de la classe :</label>
      <input ref={inputRef} placeholder={dataClass.name} id="inputName" type="text" class="form-control" />
      <div className="save_edit">
        <button
          onClick={editName}
          class="btn btn-primary btn-sm"
          type="submit"
        >
          {" "}
          Enregistrer
        </button>
      </div>
      <hr></hr>
      <p>Liste des élèves :</p>
      <ul class="list-group">
        {classStudent.map((student, idx) => {
          return (
            <li class="list-group-item">
              {student}{" "}
              <FiX
                id="deleteStudent"
                className="reactIcon"
                onClick={(e) => delStudent(idx)}
              />
            </li>
          );
        })}
        <li hidden={classStudent[0] !== undefined} class="list-group-item">
          Pas d'élèves dans cette classe
        </li>
      </ul>
      <div className="popUpButton">
        <button onClick={props.closePopUp} class="btn btn-light btn-sm">
          Fermer
        </button>
      </div>
    </div>
  );
}
