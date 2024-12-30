import './Admin.css';
import { useNavigate } from "react-router-dom";

const Admin = () => {
    let name = localStorage.getItem("Name");
    const nav = useNavigate();
    return (
        <>
            <header className="container">Admin: {name}</header>
            <button onClick={() => nav("/admin/addcatagories")}>Add catagories</button>
        </>
    )
}

export default Admin;
