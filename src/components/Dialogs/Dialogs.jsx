import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateMessageBodyCreator, sendMessageCreator } from '../../redux/state'

const Dialogs = (props) =>{
  let state = props.store.getState().messagesPage;

  let dialogElements = props.dialogs.map( dialog => ( <DialogItem name={dialog.name} id={dialog.id} /> ))
  let messagesElements = props.messages.map( message => ( <Message message={message.message} />))
  let newMessageBody = state.newMessageBody;

  
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateMessageBodyCreator(body))
   }
  let onSendMessageClick = () =>{
    props.store.dispatch(sendMessageCreator());
   }

return(
  <div className={style.dialogs}>
   <div className={style.dialogItems}>
      {dialogElements}
    </div>
    <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea autoFocus placeholder='Enter message...' className={style.inputText} onChange={onNewMessageChange} value={newMessageBody}></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
    </div>
  </div>
)
}

export default Dialogs;