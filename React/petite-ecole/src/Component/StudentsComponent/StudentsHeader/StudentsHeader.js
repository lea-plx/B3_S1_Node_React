// import "./ClassesHeader.css"

export function StudentsHeader (props) {

    const popup = (e) => {
        props.togglePopup()
        props.setPopupId(e.target.id)
    }

    return (
        <div className="headerContent">
            <p className="headerTitle">Mes élèves</p>
            <button id="createClasse" type="button" class="btn btn-primary btn-sm" onClick={popup}>Ajouter un élève</button>
        </div>
    )
}