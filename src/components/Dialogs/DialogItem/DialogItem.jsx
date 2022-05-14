import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const chekLink = () => select => select.isActive ? s.active: s.dialog;

const DialogItem = (props) => {
    return (

        <div>
            <NavLink className={chekLink()} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>


    )
}

export default DialogItem;