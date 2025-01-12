import { CreaStudent } from "./CreaStudent";
import { InfoStudent } from "./InfoStudents";
import "./PopUp.css";

export function PopupStudent(props) {
  const id = props.popupStudentId;
  const popupData = props.popupStudentData;
  

  return (
    <div className="overlay">
      <div className="popupContent">
        <div hidden={id !== "createStudent"}>
          <CreaStudent
            data={popupData}
            closePopUp={props.closePopUp}
            reloadDataStudent={props.reloadDataStudent}
          />
        </div>
        <div hidden={id !== "infoStudent"}>
          <InfoStudent
            data={popupData}
            closePopUp={props.closePopUp}
            reloadDataStudent={props.reloadDataStudent}
          />
        </div>
        {/* <div hidden={id !== "editStudent"}>
          <EditClasse
            data={popupData}
            closePopUp={props.closePopUp}
            reloadDataStudent={props.reloadDataStudent}
            id={props.classIdx}
          />
        </div> */}
      </div>
    </div>
  );
}
