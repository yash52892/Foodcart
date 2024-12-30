import './App.css';
import Auth from './Auth/Auth';
import Admin from './Admin/Admin';
import Add from './Add/Add';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  const tok = localStorage.getItem("Token");
  return (
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/admin" element={tok ? (<Admin/>): (<Navigate to="/login" />)}/>
      <Route path="/admin/addcatagories" element={tok ? (<Add/>): (<Navigate to="/login" />)}/>
    </Routes>
  );
}

export default App;
