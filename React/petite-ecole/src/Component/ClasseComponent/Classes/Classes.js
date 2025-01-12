import { ClassesHeader } from "../ClassesHeader/ClassesHeader";
import { ClassesList } from "../ClassesList/ClassesList";
import "./Classes.css"
import { PopUp } from "../../PopUp/PopUp";
import { getClassData } from "../../../Controlleur/get_class.js";
import { useEffect, useState } from "react";

export function Classes () {

    const [popupVisible, setPopupVisible] = useState(false);
    const [popupId, setPopupId] = useState();
    const [popupData, setPopupData] = useState([]);
    const [classIdx, setClassIdx] = useState([]);

    const togglePopup = () => {
        if (popupVisible === false) {
            setPopupVisible(true);
        }else{
            setPopupVisible(false);
        }
    };

    const [dataClass, setDataClass] = useState()
    
    // useEffect pour utiliser getClassData car asyncrone (attend réponse) pour mettre réponse dans dataClass

    function reloadDataClass () {
        getClassData().then((response) => {
            setDataClass(response)
        }).catch((error) => {
            console.error("Error :", error);
        });    
    }

    useEffect(() => {
        reloadDataClass()
    },[])

    return (
        <div className="styleClasses">
            {/* <ClassesList setPopupVisible={setPopupVisible} popupVisible={popupVisible}/> */}
            {/* <ClassesHeader setPopupVisible={setPopupVisible} popupVisible={popupVisible}/> */}
            <ClassesHeader togglePopup={togglePopup} setPopupId={setPopupId}/>
            <ClassesList togglePopup={togglePopup} setPopupId={setPopupId} setPopupData={setPopupData} setClassIdx={setClassIdx} dataClass = {dataClass} reloadDataClass = {reloadDataClass}/>
            <div hidden={popupVisible === false}>
                {/* <PopUp closePopUp = {togglePopup} popupVisible={popupVisible}/> */}
                <PopUp closePopUp = {togglePopup} popupId={popupId} popupData={popupData} classIdx={classIdx} reloadDataClass = {reloadDataClass}/>
            </div>
        </div>
    )
}