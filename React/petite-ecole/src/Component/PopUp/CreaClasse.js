import { FiX } from "react-icons/fi";
import { postClassData } from "../../Controlleur/post_class";

export function CreaClasse (props) {
    const handleSubmit = (event) => {
        event.preventDefault();
    }


    const post = e => {
        const inputValue = document.getElementById("myInput").value;
        postClassData({"name" : inputValue, "students" : []})
        props.closePopUp()
        }

    return (
            <div className="popupContentComponent">
                <div className="popUpHeader">
                    <h4>Créer une nouvelle classe</h4>
                    <FiX onClick={props.closePopUp} className="reactIcon"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="popUpInputName">
                        <label>Nom de la classe</label>
                        <input id="myInput" class="form-control" type="text" placeholder="Nom" />
                    </div>
                    <div className="popUpButton" >
                        <button onClick={post} type="submit" class="btn btn-primary btn-sm">Créer</button>
                        <button onClick={props.closePopUp} class="btn btn-light btn-sm">Fermer</button>
                    </div>
                </form>
            </div>

    )
}