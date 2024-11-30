import "./Tab.css";

export function Tab (props) {
    return (
        <div className={props.active ? "tab active-tab" : "tab"} onClick={(e) => props.setActiveTab(props.index)} >
            <p>{props.tab}</p>
        </div>
    )
}