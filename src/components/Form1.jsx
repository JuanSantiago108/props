
import React, { useState } from 'react'
import Display from './Display'

const Form1 = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail ] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    
    
    return(
        <div>

            <h1>Form</h1>

            <form>

                <p>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
                </p>
                <p>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={(e)=>setLastName(e.target.value)} value={lastName} />
                </p>
                <p>
                    <label>Email</label>
                    <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                </p>
                <p>
                    <label>Password</label>
                    <input type="text" name="password" value={password} onChange={handlePassword} />
                </p>
                <p>
                    <label>Confirm Password</label>
                    <input type="text" name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} />
                </p>
                <p>
                    <button type='submit'>Submit</button>
                </p>
            </form>

            <h1>Your Form Data</h1>

            <Display firstName={firstName} lastName={lastName} 
            email={email} password={password} confirmPassword={confirmPassword}  />

        </div>
    )
    
}
    
    export default Form1