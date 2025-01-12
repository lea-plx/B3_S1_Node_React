import "./ClasseData.css"
import { FiEdit2 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { deleteClass } from "../../../Controlleur/delete_class";


// const togglePopupClass = (e) => {
    //     if (props.popupVisible === false) {
    //         props.setPopupVisible(e.target.id);
    //         console.log(props.popupVisible)
    //     }else{
    //         props.setPopupVisible(false);
    //     }
    // };

    // True/False + ID + Data 


export function ClasseData(props) {
    

    const dataClass = props.data


    const goPopup = (e) => {
        props.togglePopup()
        props.setPopupId(e.target.id)
        props.setPopupData(dataClass)
        props.setClassIdx(props.idx)
    }
    
    function activeDelete() {
        deleteClass(props.idx).then(() => {
            props.reloadDataClass()
        })
    }

    return (
        <div className="styleMainContent">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <div className="styleClassInfo">
                <h1 className="classeTitle">{dataClass.name}</h1>
                <p className="classeNbrStudent">{dataClass.students.length} {props.data.students.length > 1 ? "élèves" : "élève"}</p>
            </div>
            <div className="styleButtons">
                <button id="addStudent" type="button" class="btn btn-outline-primary btn-sm" onClick={goPopup}>Ajouter des élèves</button>
                <button id="infoClasse" type="button" class="btn btn-light btn-sm" onClick={goPopup}>Détails</button>
                <FiEdit2 id="editClasse" type="button" className="reactIcon" onClick={goPopup}/>
                <FiTrash2 id="deletClasse" className="reactIcon" onClick={activeDelete}/>
            </div>
        </div>
    )
}