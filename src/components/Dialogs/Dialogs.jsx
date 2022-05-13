import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Dimych'/>
                <DialogItem id='2' name='Andrey'/>
                <DialogItem id='3' name='Sasha'/>
                <DialogItem id='4' name='Viktor'/>
                <DialogItem id='5' name='Valera'/>
            </div>
            <div className={s.messages}>
                <Message text='Hi'/>
                <Message text='How is your it-kamasutra?'/>
                <Message text='Yo'/>
            </div>
        </div>

    )
}

export default Dialogs;