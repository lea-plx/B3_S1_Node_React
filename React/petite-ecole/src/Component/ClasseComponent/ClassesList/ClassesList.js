import { ClasseData } from "../ClasseData/ClasseData";
import { getClassData } from "../../../Controlleur/controller_class.js";
import { useEffect, useState } from "react";


export function ClassesList (props) {

    const [dataClass, setDataClass] = useState()
    
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
                return <ClasseData setPopupVisible={props.setPopupVisible} popupVisible={props.popupVisible} data={elmClasse}/>
            })}
        </div>
    )
}