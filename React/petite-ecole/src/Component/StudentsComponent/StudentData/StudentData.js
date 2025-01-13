import { FiEdit2 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { deleteStudent } from "../../../Controlleur/delete_student";
import "./StudentData.css"

export function StudentData(props) {
  const dataStudent = props.data;

  const goPopup = (e) => {
    e.stopPropagation()
    console.log(e)
    console.log(e.target)
    console.log(e.target.id)
    props.setPopupStudentId(e.target.id);
    props.setPopupStudentData(dataStudent);
    props.setStudentIdx(props.idx);
    props.togglePopupStudent();
  };

  function activeDelete() {
    deleteStudent(props.idx).then(() => {
        props.reloadDataStudent()
    })
  }

  return (
    <div className="styleMainContent">
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> */}
      <div className="styleClassInfo">
        <h1 className="classeTitle">
          {dataStudent.firstName} {dataStudent.lastName}
        </h1>
        <p className="classeNbrStudent">{dataStudent.mail}</p>
      </div>
      <div className="styleButtons">
        <button
          id="infoStudent"
          type="button"
          class="btn btn-light btn-sm"
          onClick={goPopup}
        >
          Détails
        </button>
        <div id="editStudent">
        <FiEdit2 id="editStudent" className="reactIcon" onClick={goPopup} />
        </div>
        <FiTrash2
          id="deletStudent"
          className="reactIcon"
          onClick={activeDelete}
        />
      </div>
    </div>
  );
}
