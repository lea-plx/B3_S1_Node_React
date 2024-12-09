import "./ClasseData.css"
import { FiEdit2 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";


export function ClasseData(props) {
    const togglePopupClass = (e) => {
        if (props.popupVisible === false) {
            props.setPopupVisible(e.target.id);
            console.log(props.popupVisible)
        }else{
            props.setPopupVisible(false);
        }
    };

    // True/False + ID + Data 


    return (
        <div className="styleMainContent">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <div className="styleClassInfo">
                <h1 className="classeTitle">{props.data.name}</h1>
                <p className="classeNbrStudent">{props.data.students.length} {props.data.students.length > 1 ? "élèves" : "élève"}</p>
            </div>
            <div className="styleButtons">
                <button id="addStudent" type="button" class="btn btn-outline-primary btn-sm" onClick={togglePopupClass}>Ajouter des élèves</button>
                <button id="infoClasse" type="button" class="btn btn-light btn-sm" onClick={togglePopupClass}>Détails</button>
                <FiEdit2 id="editClasse" className="reactIcon" onClick={togglePopupClass}/>
                <FiTrash2 id="deletClasse" className="reactIcon" onClick={togglePopupClass}/>
            </div>
        </div>
    )
}