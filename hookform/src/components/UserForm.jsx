import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setCpassword] = useState("");  

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password ,cpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setCpassword(e.target.value) } />
            </div>


            <div>
                <h2>Your Form Data</h2>
            </div>
            <div>
                <p>First Name : {firstname} </p>
                <p>Last Name : {lastname} </p>
                <p>Email : {email} </p>
                <p>Password : {password} </p>
                <p>Confirm Password : {cpassword} </p>


            </div>
        </form>


    );
};
    
export default UserForm;