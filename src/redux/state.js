// let rerenderEntireTree = () => {
// }

// /*data*/
// let state = {
//   profilePage: {
//     posts: [
//       { id: 1, message: 'Hello,world!', mileage: 1000, date: 2020 },
//       { id: 2, message: 'Change oil in gear', mileage: 15000, date: 2021 },
//       { id: 3, message: 'Install new car radio Blapunkt', mileage: 16500, date: 2022 },
//     ],
//     newPostText: '',
//   },
//   messagesPage: {
//     dialogs: [
//       { id: 1, name: 'Dima' },
//       { id: 2, name: 'Masha' },
//       { id: 3, name: 'Vanya' },
//       { id: 4, name: 'Victor' },
//       { id: 5, name: 'Carl' },
//     ],
//     messages: [
//       { id: 1, message: 'Hello' },
//       { id: 2, message: 'How are you?' },
//       { id: 3, message: 'Fine' },
//       { id: 4, message: 'Nice car' },
//       { id: 5, message: 'Yo!!!' },
//     ],
//   },

// }

// export let addPost = () => {
//   let newPost = {
//     id: state.profilePage.posts.id + 1,
//     message: state.profilePage.newPostText,
//     mileage: 'Unknown',
//     date: 'Unknown',
//   }
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state);
// };

// export let updateNewPostChange = (changeText) => {
//   state.profilePage.newPostText = changeText;
//   rerenderEntireTree(state);
// }

// export let subscribe = (observer) => {
//   rerenderEntireTree = observer;
// }
// export default state;



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
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: this._state.profilePage.posts.id + 1,
        message: this._state.profilePage.newPostText,
        mileage: 'Unknown',
        date: 'Unknown',
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-POST-CHANGE') {
      this._state.profilePage.newPostText = action.changeText;
      this._callSubscriber(this._state);
    }
  }

};
export default store;