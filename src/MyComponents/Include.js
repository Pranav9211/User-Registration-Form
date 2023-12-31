import React, { useState } from 'react'


export const Include = ({include}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!name || !email || !password || !confirmpassword){
            alert('Please fill all fields');
        }
        else{
        include(name, email, password, confirmpassword)
        setName("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
        }
    }
    return (
        <>
            <div className="container my-3">
                <h3>Register Yourself</h3>
                <form onSubmit={submit}>
                    <div className="form-floating mb-3">
                        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="basic-addon1" placeholder="Username" />
                        <label htmlFor="floatingInput">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                        <p>Password must contain at least one uppercase letter, one lowercase letter, and one number</p>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" value={confirmpassword} onChange={(e)=>{setConfirmpassword(e.target.value)}} className="form-control" id="floatingconfirmPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">Submit</button>
                </form>
            </div>
        </>
    )
}