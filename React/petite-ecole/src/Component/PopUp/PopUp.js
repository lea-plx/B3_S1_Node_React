import { AddStudent } from "./AddStudent";
import { CreaClasse } from "./CreaClasse";
import { EditClasse } from "./EditClasse";
import { InfoClass } from "./InfoClasse";
import "./PopUp.css"



export function PopUp (props) {
    const id = props.popupId
    const popupData = props.popupData

    // console.log(id, data)
    return (
        <div className="overlay">
            <div className="popupContent">
                <div hidden={id !== "createClasse"}>
                    <CreaClasse data={popupData} closePopUp={props.closePopUp} reloadDataClass={props.reloadDataClass}/>
                </div>
                <div hidden={id !== "addStudent"}>
                    <AddStudent data={popupData} closePopUp={props.closePopUp} classIdx={props.classIdx} reloadDataClass={props.reloadDataClass}/>
                </div>
                <div hidden={id !== "infoClasse"}>
                    <InfoClass data={popupData} closePopUp={props.closePopUp} reloadDataClass={props.reloadDataClass}/>
                </div>
                <div hidden={id !== "editClasse"}>
                    <EditClasse data={popupData} closePopUp={props.closePopUp} reloadDataClass={props.reloadDataClass} id={props.classIdx}/>
                </div>
            </div>
        </div>

    )
}