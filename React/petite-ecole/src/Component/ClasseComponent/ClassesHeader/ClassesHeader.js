import "./ClassesHeader.css"

export function ClassesHeader (props) {
    // const togglePopupCreateClasses = (e) => {
    //     if (props.popupVisible === false) {
    //         props.setPopupVisible(e.target.id);
    //         console.log(props.popupVisible)
    //     }else{
    //         props.setPopupVisible(false);
    //     }
    // };

    const popup = (e) => {
        props.togglePopup()
        props.setPopupId(e.target.id)
    }

    return (
        <div className="headerContent">
            <p className="headerTitle">Mes classes</p>
            <button id="createClasse" type="button" class="btn btn-primary btn-sm" onClick={popup}>Créer un classe</button>
        </div>
    )
}