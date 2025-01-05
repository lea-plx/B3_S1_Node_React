import { ClasseData } from "../ClasseData/ClasseData";



export function ClassesList (props) {

    const dataClass = props.dataClass

    if (!dataClass){
        return (
            <div className="listStyle">
                chargement...
            </div>
        )
    }
    
    return (
        <div className="listStyle">
            {dataClass.map((elmClasse, idx) => {
                // return <ClasseData setPopupVisible={props.setPopupVisible} popupVisible={props.popupVisible} data={elmClasse}/>
                return <ClasseData togglePopup={props.togglePopup} setPopupId={props.setPopupId} setClassIdx={props.setClassIdx} data={elmClasse} setPopupData={props.setPopupData} idx={idx} reloadDataClass = {props.reloadDataClass}/>
            })}
        </div>
    )
}