import { useState, useRef } from "react";
import {useNavigate} from "react-router-dom";

const Login = () =>{

    const nav=useNavigate();
    const email = useRef();
    const password = useRef();

    const handleForgot = () =>{
        console.log("forgot")
    }
   

    const handleSubmit = (event) => {
        event.preventDefault();
        const obj = {
            email: email.current.value,
            password: password.current.value,
        };
        console.log(obj)
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA1SHrUNAKICcPfRPDf8RigOErGQywebfk",
            {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            }
        ).then((res) => {
            res.json().then((data) => { console.log(data) });
        })
        nav("/admin/addcatagories");
    }
    const handleSwitch = () =>{
        nav("/signup");
    }

    return(
        <>
        <div className="Signup">
        <form onSubmit={handleSubmit} className="form">
                        <h3>Login for Foodiii..</h3>
                        <div className="row">
                            <div className="col-25">
                                <label>Email id</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="Email id" ref={email} placeholder="Enter Email id.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Password</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="lname" name="Password" ref={password} placeholder="Password.." />
                            </div>
                        </div>
                        <br />
                        <div>
                            <input type="submit" value="Login"/>
                        </div>
                        </form>
                        </div>
                        <div>
                        <h5>Forgot password? click <button className="button1" onClick={handleForgot}>here</button> to reset/Dont have an account? click <button className="button1" onClick={handleSwitch}>here</button>to Signup</h5>
                    </div>
                    </>
    );
}

export default Login;