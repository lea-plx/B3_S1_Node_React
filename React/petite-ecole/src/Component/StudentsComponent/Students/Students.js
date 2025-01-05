import { useState } from "react";
import { PopupStudent } from "../PopUp/PopupStudents";
import { StudentsHeader } from "../StudentsHeader/StudentsHeader";
import { StudentsList } from "../StudentsList/StudentsList";

export function Students () {

    const [popupVisible, setPopupVisible] = useState(false);
    const [popupId, setPopupId] = useState();
    const [popupData, setPopupData] = useState([]);

    const togglePopup = () => {
        if (popupVisible === false) {
            setPopupVisible(true);
        }else{
            setPopupVisible(false);
        }
    };

    return (
        <div className="styleClasses">
            <StudentsHeader togglePopup={togglePopup} setPopupId={setPopupId}/>
            <StudentsList togglePopup={togglePopup} setPopupId={setPopupId} setPopupData={setPopupData}/>
            <div hidden={popupVisible === false}>
                <PopupStudent closePopUp = {togglePopup} popupId={popupId} popupData={popupData}/>
            </div>
        </div>
    )
}