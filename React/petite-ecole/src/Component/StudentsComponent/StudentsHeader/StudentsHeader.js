// import "./ClassesHeader.css"

export function StudentsHeader (props) {

    const goPopup = (e) => {
        props.togglePopupStudent()
        props.setPopupStudentId(e.target.id)
    }

    return (
        <div className="headerContent">
            <p className="headerTitle">Mes élèves</p>
            <button id="createStudent" type="button" class="btn btn-primary btn-sm" onClick={goPopup}>Ajouter un élève</button>
        </div>
    )
}