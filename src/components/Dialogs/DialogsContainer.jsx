import { updateMessageBodyCreator, sendMessageCreator } from '../../redux/messagesReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) =>{

//   let state = props.store.getState().messagesPage;
//   let newMessageBody = state.newMessageBody;

  // let onSendMessageClick = () =>{
  //   props.store.dispatch(sendMessageCreator());
  //  }

  // let onNewMessageChange = (body) => {
  //   props.store.dispatch(updateMessageBodyCreator(body))
  //  }
  
// return <Dialogs updateMessageBody={onNewMessageChange} sendMessage={onSendMessageClick } newMessageBody={newMessageBody} messagesPage={state} />
// }

// export default DialogsContainer;

let mapStateToProps = (state) => {
  return {
    newMessageBody: state.newMessageBody,
    messagesPage: state.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
return {
  sendMessage: () => {
    dispatch(sendMessageCreator());
   },
   updateMessageBody: (body) => {
    dispatch(updateMessageBodyCreator(body))
   }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;