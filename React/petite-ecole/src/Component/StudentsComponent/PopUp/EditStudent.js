import { FiX } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { putStudentData } from "../../../Controlleur/put_student";

export function EditStudent(props) {
  const dataStudent = props.data;

  const [formValues, setFormValues] = useState({
    lastName: dataStudent.lastName,
    firstName: dataStudent.firstName,
    age: dataStudent.age,
    mail: dataStudent.mail,
  });

  useEffect(() => {
    if (dataStudent) {
      setFormValues({
        lastName: dataStudent.lastName || "",
        firstName: dataStudent.firstName || "",
        age: dataStudent.age || "",
        mail: dataStudent.mail || "",
      });
    }
  }, [dataStudent]);

  const [isDisable, setIsDisable] = useState(true);

  const handleInputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setFormValues((oldValues) => ({
      ...oldValues, // permet de récupérer correctement toutes les anciennes valeurs
      [id]: value, // met à jour la valeur qu'on veut
    }));
    validateForm();
  };

  const validateForm = () => {
    const { lastName, firstName, age, mail } = formValues;
    setIsDisable(
      !lastName.trim() ||
        !firstName.trim() ||
        !age.toString().trim() ||
        !mail.trim()
    );
  };

  const edit = () => {
    const { lastName, firstName, age, mail } = formValues;

    putStudentData(props.id, {
      lastName,
      firstName,
      age: parseInt(age, 10),
      mail,
    }).then(() => {
      props.reloadDataStudent();
      props.closePopUp();
      setIsDisable(true)
    });
  };

  return (
    <div className="popupContentComponent">
      <div className="popUpHeader">
        <h4>Modifier un élève</h4>
        <FiX onClick={props.closePopUp} className="reactIcon" />
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="popUpInputName">
          <input
            id="lastName"
            className="form-control"
            type="text"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
          <input
            id="firstName"
            className="form-control"
            type="text"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
          <input
            id="age"
            className="form-control"
            type="number"
            value={formValues.age}
            onChange={handleInputChange}
          />
          <input
            id="mail"
            className="form-control"
            type="email"
            value={formValues.mail}
            onChange={handleInputChange}
          />
        </div>
        <div className="popUpButton">
          <button
            disabled={isDisable}
            onClick={edit}
            type="submit"
            className="btn btn-primary btn-sm"
          >
            Modifier
          </button>
          <button onClick={props.closePopUp} className="btn btn-light btn-sm">
            Fermer
          </button>
        </div>
      </form>
    </div>
  );
}
