import './App.css';
import Auth from './Auth/Auth';
import Admin from './Admin/Admin';
import Add from './Add/Add';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/admin/addcatagories" element={<Add/>}/>
    </Routes>
  );
}

export default App;
