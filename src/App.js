import { useEffect } from 'react';
import {BrowserRouter , Routes , Route  , Navigate} from 'react-router-dom'
import Chat from './Pages/Chat';
import Login from "./Pages/Login";
import ThemePicker from './Theme/themePicker';


function App() {
  const loginStatus = localStorage.getItem("loginStatus");

  

  return (
    <div>
      <BrowserRouter>
      <ThemePicker />
      <Routes>
        {console.log(loginStatus)}
        <Route path='/' element={loginStatus ? <Navigate to={"/dashboard"}/> : <Navigate to={"/login"}/> }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Chat/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
