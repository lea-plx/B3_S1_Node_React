import { FiX } from "react-icons/fi";
import { getStudentsData } from "../../Controlleur/get_students";
import { useEffect, useState } from "react";
import { putClass } from "../../Controlleur/put_class";


export function AddStudent (props) {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const [dataStudents, setDataStudents] = useState([])
       
    // Use effect pour utiliser getStudentsData car asyncrone (attend réponse) pour mettre la réponse dans une variable dataStudents

    useEffect(() => {
        getStudentsData().then((dataStudents) => {
            setDataStudents(dataStudents)
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    },[])


    function activePutClass() {
        putClass(props.data.name)
    }

    return (
            <div className="popupContentComponent">
                <div className="popUpHeader">
                    <h4>Ajouter des élèves</h4>
                    <FiX onClick={props.closePopUp} className="reactIcon"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="popUpInputName">
                        <label>Ajouter un élève à {props.data.name}</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            {dataStudents.map((student) => {
                                return <option>{student.firstName}</option>
                            })}
                        </select>
                    </div>
                    <div className="popUpButton" >
                        <button onClick={activePutClass} type="submit" class="btn btn-primary btn-sm">Ajouter</button>
                        <button onClick={props.closePopUp} class="btn btn-light btn-sm">Fermer</button>
                    </div>
                </form>
            </div>

    )
}