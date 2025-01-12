import { FiX } from "react-icons/fi";
import React, { useRef } from "react";
import { postStudentData } from "../../../Controlleur/post_student";
import { useState } from "react";

export function CreaStudent(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const lastNameRef = useRef(null);
  const firstNameRef = useRef(null);
  const ageRef = useRef(null);
  const mailRef = useRef(null);

  const [isDisable, setIsDisable] = useState(true);

  const validateForm = () => {
    const lastName = lastNameRef.current.value.trim();
    // trim : supprimer les espaces blancs --> Si que espace == vide
    const firstName = firstNameRef.current.value.trim();
    const age = ageRef.current.value.trim();
    const mail = mailRef.current.value.trim();
    setIsDisable(!lastName || !firstName || !age || !mail);
  };

  const post = (e) => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const age = parseInt(ageRef.current.value);
    const mail = mailRef.current.value;

    postStudentData({
      firstName: firstName,
      lastName: lastName,
      age: age,
      mail: mail,
    }).then(() => {
      props.reloadDataStudent();
      props.closePopUp();
      lastNameRef.current.value = "";
      firstNameRef.current.value = "";
      ageRef.current.value = "";
      mailRef.current.value = "";
      setIsDisable(true)
    });
  };

  return (
    <div className="popupContentComponent">
      <div className="popUpHeader">
        <h4>Ajouter un nouvel élève</h4>
        <FiX onClick={props.closePopUp} className="reactIcon" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="popUpInputName">
          {/* <label>Nom</label> */}
          <input
            id="lastName"
            class="form-control"
            type="text"
            placeholder="Nom"
            ref={lastNameRef}
            onChange={validateForm}
          />
          {/* <label>Prénom</label> */}
          <input
            id="firstName"
            class="form-control"
            type="text"
            placeholder="Prénom"
            ref={firstNameRef}
            onChange={validateForm}
          />
          {/* <label>Âge</label> */}
          <input
            id="age"
            class="form-control"
            type="number"
            placeholder="Âge"
            ref={ageRef}
            onChange={validateForm}
          />
          {/* <label>Mail</label> */}
          <input
            id="mail"
            class="form-control"
            type="email"
            placeholder="Mail"
            ref={mailRef}
            onChange={validateForm}
          />
        </div>
        <div className="popUpButton">
          <button
            disabled={isDisable}
            onClick={post}
            type="submit"
            class="btn btn-primary btn-sm"
          >
            Créer
          </button>
          <button onClick={props.closePopUp} class="btn btn-light btn-sm">
            Fermer
          </button>
        </div>
      </form>
    </div>
  );
}
