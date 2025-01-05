import { FiEdit2 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";


export function StudentData(props) {
   

    const popup = (e) => {
        props.togglePopup()
        props.setPopupId(e.target.id)
        props.setPopupData(props.data)
    }

    function activeDelete() {
        // deleteClass(props.data.name)
    }


    return (
        <div className="styleMainContent">
            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> */}
            <div className="styleClassInfo">
                <h1 className="classeTitle">{props.data.firstName} {props.data.lastName}</h1>
                <p className="classeNbrStudent">{props.data.mail}</p>
            </div>
            <div className="styleButtons">
                <button id="infoClasse" type="button" class="btn btn-light btn-sm" onClick={popup}>Détails</button>
                <FiEdit2 id="editClasse" className="reactIcon" onClick={popup}/>
                <FiTrash2 id="deletClasse" className="reactIcon" onClick={activeDelete}/>
            </div>
        </div>
    )
}