import "./ClassesHeader.css"

export function ClassesHeader (props) {
    const togglePopupCreateClasses = (e) => {
        if (props.popupVisible === false) {
            props.setPopupVisible(e.target.id);
            console.log(props.popupVisible)
        }else{
            props.setPopupVisible(false);
        }
    };
    return (
        <div className="headerContent">
            <p className="headerTitle">Mes classes</p>
            <button id="createClasse" type="button" class="btn btn-primary btn-sm" onClick={togglePopupCreateClasses}>Créer un classe</button>
        </div>
    )
}