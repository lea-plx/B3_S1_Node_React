import { useEffect, useState } from "react";
import { StudentData } from "../StudentData/StudentData";
import { getStudentsData } from "../../../Controlleur/get_students";


export function StudentsList (props) {

    const [dataStudents, setDataStudents] = useState()
    
    useEffect(() => {
        getStudentsData().then((dataClass) => {
            setDataStudents(dataClass)
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });    
    },[])

    if (!dataStudents){
        return (
            <div className="listStyle">
                chargement...
            </div>
        )
    }
    
    return (
        <div className="listStyle">
            {dataStudents.map((elmStudent) => {
                return <StudentData togglePopup={props.togglePopup} setPopupId={props.setPopupId} data={elmStudent} setPopupData={props.setPopupData}/>
            })}
        </div>
    )
}