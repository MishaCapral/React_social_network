/*import logo from './logo.svg';*/
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContiner from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/SettingsProfile/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfleContainer';
import HeaderContainer from './components/Header/HeaderContainer';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content borderShadow'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            {/* Костыль */}
            <Route path='/profile/' element={<ProfileContainer />} />

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
