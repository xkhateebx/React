import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setCpassword] = useState("");  
    const [ferror , setFirstnameError] = useState("")
    const [lerror , setLastnameError] = useState("")
    const [emailerror , setEmailError] = useState("")
    const [passworderror , setPasswordError] = useState("")




    
    const handleFirst = (e) => {
        e.preventDefault();
        const newUser = { firstname,ferror };
    setFirstname(e.target.value);
    if(e.target.value.length < 3) {
        setFirstnameError("That field must be at least 2 characters.");
    }else {
        setFirstnameError("")
    }
        
    };

    const handleLast = (e) => {
        e.preventDefault();
        const lasterror = {lastname , lerror};
        setLastname(e.target.value);
        if(e.target.value.length < 3) {
            setLastnameError("That field must be at least 2 characters.");
        }else {
            setLastnameError("")
        } 
    }
    const handleEmail = (e) => {
        e.preventDefault();
        const emaierror = {email , emailerror};
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("That field must be at least 5 characters.");
        }else{
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        e.preventDefault();
        const passerror = {password , passworderror};
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("The passwords must match and be at least 8 characters.");
        }else{
            setPasswordError("")
        }
    }
    
    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirst } />
{
                    ferror ?
                    <p style={{color:'red'}}>{ ferror }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLast } />
{
                    lerror ?
                    <p style={{color:'red'}}>{ lerror }</p> :
                    ''
                }

            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
                {
                    emailerror ?
                    <p style={{color:'red'}}>{ emailerror }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passworderror ?
                    <p style={{color:'red'}}>{ passworderror }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passworderror ?
                    <p style={{color:'red'}}>{ passworderror }</p> :
                    ''
                }            </div>
        </form>


    );
};
    
export default UserForm;