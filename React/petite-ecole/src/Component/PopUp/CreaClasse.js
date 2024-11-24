export function CreaClasse (props) {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
            <div className="popupContentCreaClasse">
                    <h4>Créer une nouvelle classe</h4>
                    <form onSubmit={handleSubmit}>
                        <label>Nom de la classe</label>
                        <input type="text" placeholder="Nom" />
                        <button type="submit">Créer</button>
                    </form>
                    <button onClick={props.closePopUp}>Fermer</button>
            </div>

    )
}