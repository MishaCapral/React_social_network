/*import logo from './logo.svg';*/
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContiner from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/SettingsProfile/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content borderShadow'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<DialogsContiner />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
          {/* <Profile /> */}
          {/* <Dialogs /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
