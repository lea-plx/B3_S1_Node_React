import { FiX } from "react-icons/fi";
import "./EditClasse.css";
import { putClass } from "../../Controlleur/put_class";


export function EditClasse (props) {
    
    const dataClass = props.data


    if (!dataClass.students){
        return (
            <div className="popupContentComponent">
                Pas de classe
            </div>
        )
    }

    const classStudent = dataClass.students;
    function delStudent (idx) {
        classStudent.splice(idx, 1)
        console.log(classStudent)
        // putClass(props.id, dataClass.name, classStudent)
    }

    return (
            <div className="popupContentComponent">
                <div className="popUpHeader">
                    <h4>{dataClass.name}</h4>
                    <FiX onClick={props.closePopUp} className="reactIcon"/>
                </div>
                <p>Liste des élèves :</p>
                <ul class="list-group">
                    {dataClass.students.map((student, idx) => {
                        return <li class="list-group-item">{student} <FiX id="deleteStudent" className="reactIcon" onClick={delStudent(idx)}/></li> 
                    })}
                    <li hidden={dataClass.students[0] !== undefined} class="list-group-item">Pas d'élèves dans cette classe</li>                   
                </ul>
                <div className="popUpButton" >
                    <button onClick={props.closePopUp} class="btn btn-light btn-sm">Fermer</button>
                </div>
            </div>

    )
}

