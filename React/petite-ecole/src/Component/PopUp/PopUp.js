import { AddStudent } from "./AddStudent";
import { CreaClasse } from "./CreaClasse";
import { InfoClass } from "./InfoClasse";
import "./PopUp.css"



export function PopUp (props) {

    return (
        <div className="overlay">
            <div className="popupContent">
                <div hidden={props.popupVisible !== "createClasse"}>
                    <CreaClasse closePopUp={props.closePopUp}/>
                </div>
                <div hidden={props.popupVisible !== "addStudent"}>
                    <AddStudent closePopUp={props.closePopUp}/>
                </div>
                <div hidden={props.popupVisible !== "infoClasse"}>
                    <InfoClass closePopUp={props.closePopUp}/>
                </div>
            </div>
        </div>

    )
}