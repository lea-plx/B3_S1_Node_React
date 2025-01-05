import { FiX } from "react-icons/fi";
import { getStudentsData } from "../../Controlleur/get_students";
import { useEffect, useState } from "react";
import { putClass } from "../../Controlleur/put_class";

export function AddStudent(props) {
  const classStudent = props.data.students;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [dataStudents, setDataStudents] = useState([]);

  useEffect(() => {
    getStudentsData()
      .then((dataStudents) => {
        setDataStudents(dataStudents);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const activePutClass = (e) => {
    const selectValue = document.getElementById("exampleFormControlSelect1").value;
    classStudent.push(selectValue);
    putClass(props.classIdx, props.data.name, classStudent);
    props.closePopUp();
  };

  if (!classStudent) {
    return <div className="popUpInputName">chargement...</div>;
  }


  const noMoreStudentsToAdd = dataStudents.length === classStudent.length;


  return (
    <div className="popupContentComponent">
      <div className="popUpHeader">
        <h4>Ajouter des élèves</h4>
        <FiX onClick={props.closePopUp} className="reactIcon" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="popUpInputName">
          <label>Ajouter un élève à {props.data.name}</label>
          <select class="form-control" id="exampleFormControlSelect1" disabled={noMoreStudentsToAdd}>
            {noMoreStudentsToAdd
              ? <option>Pas d'autres étudiants à ajouter</option>
              : dataStudents.map((student) => {
                  if (!classStudent.includes(student.firstName)) {
                    return <option>{student.firstName}</option>;
                  } 
                })}
          </select>
        </div>
        <div className="popUpButton">
          <button onClick={activePutClass} type="submit" class="btn btn-primary btn-sm" disabled={noMoreStudentsToAdd} > Ajouter </button>
          <button onClick={props.closePopUp} class="btn btn-light btn-sm"> Fermer </button>
        </div>
      </form>
    </div>
  );
}
