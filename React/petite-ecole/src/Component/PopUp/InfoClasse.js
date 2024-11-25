import { FiX } from "react-icons/fi";

let data = {
        "classeName" : "B3 - Data IA",
        "students" : [
            {
                "name" : "Ethan"
            },
            {
                "name" : "Léa"
            }
        ]
    }


export function InfoClass (props) {
    

    return (
            <div className="popupContentComponent">
                <div className="popUpHeader">
                    <h4>{data.classeName}</h4>
                    <FiX onClick={props.closePopUp} className="reactIcon"/>
                </div>
                <p>Liste des élèves :</p>
                <ul class="list-group">
                    {data.students.map((dataName) => {
                        return <li class="list-group-item">{dataName.name}</li>
                    })}                   
                </ul>
                <div className="popUpButton" >
                    <button onClick={props.closePopUp} class="btn btn-light btn-sm">Fermer</button>
                </div>
            </div>

    )
}

