import "./ClasseData.css"
import { FiMoreVertical } from "react-icons/fi";

export function ClasseData(props) {
    const togglePopupAddStudent = (e) => {
        if (props.popupVisible === false) {
            props.setPopupVisible(e.target.id);
            console.log(props.popupVisible)
        }else{
            props.setPopupVisible(false);
        }
    };
    return (
        <div className="styleMainContent">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <div className="styleClassInfo">
                <h1 className="classeTitle">{props.classeName}</h1>
                <p className="classeNbrStudent">{props.nbrStudent} {props.nbrStudent > 1 ? "élèves" : "élève"}</p>
            </div>
            <div className="styleButtons">
                <button id="addStudent" type="button" class="btn btn-outline-primary btn-sm" onClick={togglePopupAddStudent}>Ajouter des élèves</button>
                <button id="infoClasse" type="button" class="btn btn-light btn-sm" onClick={togglePopupAddStudent}>Détails</button>
                <FiMoreVertical className="reactIcon"/>
            </div>
        </div>
    )
}