import { ClasseData } from "../ClasseData/ClasseData";

let data = [
    {
        "label" : "B3 - DATA IA",
        "students" : [1,2,3,4,4]
    },
    {
        "label" : "B3 - Cyber",
        "students" : [1]
    }
]



export function ClassesList (props) {
    return (
        <div>
            {data.map((elmClasse) => {
                return <ClasseData setPopupVisible={props.setPopupVisible} popupVisible={props.popupVisible} classeName={elmClasse.label} nbrStudent={elmClasse.students.length}/>
            })}
        </div>
    )
}