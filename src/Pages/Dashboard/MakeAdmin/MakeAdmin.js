import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';



const MakeAdmin = () => {
    const [email,  setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const {token} = useAuth()
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setSuccess(true)
                console.log(data)
            }
            
        })
        e.preventDefault()
    }
    return (
        <div >
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit} >
                <TextField sx={{width:'25%'}} label="Email"type="email" variant="standard" onBlur={handleOnBlur}></TextField>
                <Button type="submit" variant="contained">Make Admin</Button>
                </form>
                {success &&  <Alert severity="success">Made admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;