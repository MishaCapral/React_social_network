let rerenderEntireTree = () => {

}

/*data*/
let state = {
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

}

export let addPost = () => {
  let newPost = {
    id: state.profilePage.posts.id + 1,
    message: state.profilePage.newPostText,
    mileage: 'Unknown',
    date: 'Unknown',
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostChange = (changeText) => {
  state.profilePage.newPostText = changeText;
  rerenderEntireTree(state);
}

export let subscribe = (observer) => {
  rerenderEntireTree = observer;
}
export default state;