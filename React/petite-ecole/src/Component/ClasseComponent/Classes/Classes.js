import { ClassesHeader } from "../ClassesHeader/ClassesHeader";
import { ClassesList } from "../ClassesList/ClassesList";
import "./Classes.css"
import { useState } from "react";
import { PopUp } from "../../PopUp/PopUp";

export function Classes () {

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
            {console.log(popupVisible)}
            {/* <ClassesList setPopupVisible={setPopupVisible} popupVisible={popupVisible}/> */}
            {/* <ClassesHeader setPopupVisible={setPopupVisible} popupVisible={popupVisible}/> */}
            <ClassesHeader togglePopup={togglePopup} setPopupId={setPopupId}/>
            <ClassesList togglePopup={togglePopup} setPopupId={setPopupId} setPopupData={setPopupData}/>
            <div hidden={popupVisible === false}>
                {/* <PopUp closePopUp = {togglePopup} popupVisible={popupVisible}/> */}
                <PopUp closePopUp = {togglePopup} popupId={popupId} popupData={popupData}/>
            </div>
        </div>
    )
}