import { FiX } from "react-icons/fi";

let data = [
    {
        "name" : "Léa"
    },
    {
        "name" : "Ethan"
    },
    {
        "name" : "Tessa"
    }
]


export function AddStudent (props) {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
            <div className="popupContentComponent">
                <div className="popUpHeader">
                    <h4>Ajouter des élèves</h4>
                    <FiX onClick={props.closePopUp} className="reactIcon"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="popUpInputName">
                        <label>Ajouter un élève à votre classe</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            {data.map((dataName) => {
                                return <option>{dataName.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="popUpButton" >
                        <button type="submit" class="btn btn-primary btn-sm">Ajouter</button>
                        <button onClick={props.closePopUp} class="btn btn-light btn-sm">Fermer</button>
                    </div>
                </form>
            </div>

    )
}