import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) =>{
  let state = props.messagesPage;
  
  let dialogElements = state.dialogs.map( dialog => ( <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} /> ))
  let messagesElements = state.messages.map( message => ( <Message key={message.id} message={message.message} />))

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () =>{
    props.sendMessage()
    //props.store.dispatch(sendMessageCreator());
   }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateMessageBody(body)
    //props.store.dispatch(updateMessageBodyCreator(body))
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