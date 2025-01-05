import { AddStudent } from "./AddStudent";
import { CreaClasse } from "./CreaClasse";
import { EditClasse } from "./EditClasse";
import { InfoClass } from "./InfoClasse";
import "./PopUp.css"



export function PopUp (props) {
    const id = props.popupId
    const data = props.popupData

    // console.log(id, data)
    return (
        <div className="overlay">
            <div className="popupContent">
                <div hidden={id !== "createClasse"}>
                    <CreaClasse data={data} closePopUp={props.closePopUp} reloadDataClass={props.reloadDataClass}/>
                </div>
                <div hidden={id !== "addStudent"}>
                    <AddStudent data={data} closePopUp={props.closePopUp} classIdx={props.classIdx} reloadDataClass={props.reloadDataClass}/>
                </div>
                <div hidden={id !== "infoClasse"}>
                    <InfoClass data={data} closePopUp={props.closePopUp}/>
                </div>
                <div hidden={id !== "editClasse"}>
                    <EditClasse data={data} closePopUp={props.closePopUp}/>
                </div>
            </div>
        </div>

    )
}