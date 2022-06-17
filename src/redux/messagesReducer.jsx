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
    return{
      ...state,
      newMessageBody: action.body
    };

  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    return {
      ...state,
      newMessageBody: '',
      messages: [...state.messages, { id: state.messages.id + 1, message: body }]
}
}
return state
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default messagesReducer;