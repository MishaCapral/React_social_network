const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Masha' },
    { id: 3, name: 'Vanya' },
    { id: 4, name: 'Victor' },
    { id: 5, name: 'Carl' },
  ],
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Fine' },
    { id: 4, message: 'Nice car' },
    { id: 5, message: 'Yo!!!' },
  ],
  newMessageBody: '',
};

const messagesReducer = (state = initialState, action) => {
  

  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    state.newMessageBody = '';
    state.messages.push(
      { id: state.messages.id + 1, message: body }
    )
  
}
return state
}

export default messagesReducer;