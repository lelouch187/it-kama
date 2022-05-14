import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let Dialogs = [{id: '1', name:'Dimych'},{id: '2', name:'Andrey'}, {id: '3', name:'Sasha'}, {id: '4', name:'Viktor'}, {id: '5', name:'Valera'},];
    let Messages = [{id: '1', message:'Hi'},{id: '2', message:'How is you it-kamasutra?'}, {id: '3', message:'Yo'}, {id: '4', message:'Yo'}, {id: '5', message:'Yo'},];

    let DialogsItem = Dialogs
        .map(d => <DialogItem id={d.id} name={d.name}/>);
    let MessagesItem = Messages
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