import { useState, useEffect } from "react";
import { PopupStudent } from "../PopUp/PopupStudents";
import { StudentsHeader } from "../StudentsHeader/StudentsHeader";
import { StudentsList } from "../StudentsList/StudentsList";
import { getStudentsData } from "../../../Controlleur/get_students";

export function Students() {
  const [popupStudentVisible, setPopupStudentVisible] = useState(false);
  const [popupStudentId, setPopupStudentId] = useState();
  const [popupStudentData, setPopupStudentData] = useState([]);
  const [studentIdx, setStudentIdx] = useState([]);

  const togglePopupStudent = () => {
    if (popupStudentVisible === false) {
      setPopupStudentVisible(true);
    } else {
      setPopupStudentVisible(false);
    }
  };

  const [dataStudent, setDataStudent] = useState();

  function reloadDataStudent() {
    getStudentsData()
      .then((response) => {
        setDataStudent(response);
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  }

  useEffect(() => {
    reloadDataStudent();
  }, []);

  return (
    <div className="styleClasses">
      <StudentsHeader togglePopupStudent={togglePopupStudent} setPopupStudentId={setPopupStudentId} />
      <StudentsList
        togglePopupStudent={togglePopupStudent}
        setPopupStudentId={setPopupStudentId}
        setPopupStudentData={setPopupStudentData}
        setStudentIdx={setStudentIdx}
        dataStudent={dataStudent}
        reloadDataStudent={reloadDataStudent}
      />
      <div hidden={popupStudentVisible === false}>
        <PopupStudent
          closePopUp={togglePopupStudent}
          popupStudentId={popupStudentId}
          popupStudentData={popupStudentData}
          studentIdx={studentIdx}
          reloadDataStudent={reloadDataStudent}
        />
      </div>
    </div>
  );
}
