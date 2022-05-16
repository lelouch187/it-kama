import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {



    let DialogsItem = props.state.dialogs
        .map(d => <DialogItem id={d.id} name={d.name}/>);
    let MessagesItem = props.state.messages
        .map(m =><Message text={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsItem}
            </div>
            <div className={s.messages}>
                {MessagesItem}
            </div>
        </div>

    )
}

export default Dialogs;