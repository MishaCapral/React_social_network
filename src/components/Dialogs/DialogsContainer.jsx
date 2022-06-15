import { updateMessageBodyCreator, sendMessageCreator } from '../../redux/store'
import Dialogs from './Dialogs';

const DialogsContainer = (props) =>{

  let state = props.store.getState().messagesPage;
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () =>{
    props.store.dispatch(sendMessageCreator());
   }

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateMessageBodyCreator(body))
   }
  

return <Dialogs updateMessageBody={onNewMessageChange} sendMessage={onSendMessageClick } newMessageBody={newMessageBody} messagesPage={state} />
}

export default DialogsContainer;