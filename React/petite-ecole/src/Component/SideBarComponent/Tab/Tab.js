import "./Tab.css";

export function Tab (props) {
    return (
        <div className={props.active ? "tab active-tab" : "tab"} onClick={(e) => props.setNav(props.index)} >
            <p>{props.tab}</p>
        </div>
    )
}