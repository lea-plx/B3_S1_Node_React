import { FiX } from "react-icons/fi";

export function InfoStudent(props) {
  const dataStudent = props.data;

  if (!dataStudent) {
    return <div className="popupContentComponent">Pas d'élève</div>;
  }

  return (
    <div className="popupContentComponent">
      <div className="popUpHeader">
        <h4>
          {dataStudent.firstName} {dataStudent.lastName}
        </h4>
        <FiX onClick={props.closePopUp} className="reactIcon" />
      </div>
      <p>Informations :</p>
      <ul class="list-group">
        <li class="list-group-item">
          <u>Âge :</u> {dataStudent.age} ans
        </li>
        <li class="list-group-item">
          <u>Mail :</u> {dataStudent.mail}
        </li>
      </ul>
      <div className="popUpButton">
        <button onClick={props.closePopUp} class="btn btn-light btn-sm">
          Fermer
        </button>
      </div>
    </div>
  );
}
