import { ListTab } from "../ListTab/ListTab";
import "./SideBar.css"

export function SideBar (props) {
    return (
        <div className="StyleSideBar">
            <ListTab nav={props.nav} setNav={props.setNav}/> 
        </div>
    )
}