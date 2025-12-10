import React from "react";
import './signup.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () =>{
     const navigate = useNavigate();

    const [name, setName] = useState("");
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      function handleSubmit() {
         
          let users = JSON.parse(localStorage.getItem("users")) || [];
        const Data = {
          name,
          fname,
          email,
          password,
        }

  users.push(Data);
localStorage.setItem("users", JSON.stringify(users));

alert("Signup Successfully");
navigate("/home");

setName("");
setFname("");
setEmail("");
setPassword("");

  }


    return(
        <>
        <div>
        <div>
            <input type="text"placeholder="Enter your Name" value={name}  onChange={(e)=> setName(e.target.value) } />
        </div>

        <div>
            <input type="text"placeholder="Enter your FName"  value={fname} onChange={(e) => setFname(e.target.value)}/>
        </div>



        <div>
            <input type="text"placeholder="Enter your Email"   value={email} onChange={(e) => setEmail(e.target.value)}   />
        </div>
             <div>
            <input type="text"placeholder="Enter your Password"   value={password} onChange={(e) => setPassword(e.target.value)}   />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
        
    )
}
export default Signup;