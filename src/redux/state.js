const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello,world!', mileage: 1000, date: 2020 },
        { id: 2, message: 'Change oil in gear', mileage: 15000, date: 2021 },
        { id: 3, message: 'Install new car radio Blapunkt', mileage: 16500, date: 2022 },
      ],
      newPostText: '',
    },
    messagesPage: {
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
    },

  },
  getState() {
    return this._state
  },
  addPost() {
    let newPost = {
      id: this._state.profilePage.posts.id + 1,
      message: this._state.profilePage.newPostText,
      mileage: 'Unknown',
      date: 'Unknown',
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostChange(changeText) {
    this._state.profilePage.newPostText = changeText;
    this._callSubscriber(this._state);
  },
  _callSubscriber() {
    console.log('subscribe (observer) is empty')
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  //  --  Dispatch  --
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage.posts.id + 1,
        message: this._state.profilePage.newPostText,
        mileage: 'Unknown',
        date: 'Unknown',
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_CHANGE) {
      this._state.profilePage.newPostText = action.changeText;
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = '';
      this._state.messagesPage.messages.push(
        { id: this._state.messagesPage.messages.id + 1, message: body }
      )

      this._callSubscriber(this._state);
    }
  }

};

//  --  Action Creator  --
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_CHANGE, changeText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default store;