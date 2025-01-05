import { ClasseData } from "../ClasseData/ClasseData";
import { getClassData } from "../../../Controlleur/get_class.js";
import { useEffect, useState } from "react";


export function ClassesList (props) {

    const [dataClass, setDataClass] = useState()
    
    // useEffect pour utiliser getClassData car asyncrone (attend réponse) pour mettre réponse dans dataClass

    useEffect(() => {
        getClassData().then((dataClass) => {
            setDataClass(dataClass)
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });    
    },[])

    if (!dataClass){
        return (
            <div className="listStyle">
                chargement...
            </div>
        )
    }
    
    return (
        <div className="listStyle">
            {dataClass.map((elmClasse) => {
                // return <ClasseData setPopupVisible={props.setPopupVisible} popupVisible={props.popupVisible} data={elmClasse}/>
                return <ClasseData togglePopup={props.togglePopup} setPopupId={props.setPopupId} data={elmClasse} setPopupData={props.setPopupData}/>
            })}
        </div>
    )
}