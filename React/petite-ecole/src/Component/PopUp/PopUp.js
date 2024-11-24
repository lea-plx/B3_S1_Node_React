import { CreaClasse } from "./CreaClasse";
import "./PopUp.css"

export function PopUp (props) {

    return (
        <div className="overlay">
            <div className="popupContent">
                <div hidden={props.popupVisible !== "createClasses"}>
                <CreaClasse closePopUp={props.closePopUp}/>
                </div>
                
            </div>
        </div>

    )
}