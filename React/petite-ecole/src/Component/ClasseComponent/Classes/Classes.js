import { ClassesHeader } from "../ClassesHeader/ClassesHeader";
import { ClassesList } from "../ClassesList/ClassesList";
import "./Classes.css"
import { useEffect, useState } from "react";
import { PopUp } from "../../PopUp/PopUp";

export function Classes () {

    const [popupVisible, setPopupVisible] = useState(false);
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
            <ClassesHeader setPopupVisible={setPopupVisible} popupVisible={popupVisible}/>
            <ClassesList setPopupVisible={setPopupVisible} popupVisible={popupVisible}/>
            <div hidden={popupVisible[0] === "false"}>
                <PopUp closePopUp = {togglePopup} popupVisible={popupVisible}/>
            </div>
        </div>
    )
}