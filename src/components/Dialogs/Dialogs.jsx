import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";



const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }


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
            <div className={s.addPost}>
                <div>
                    <textarea ref={newMessageElement} ></textarea>
                </div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>

    )
}

export default Dialogs;