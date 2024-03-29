import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';


const BookingModal = ({ openBooking, handleBookingClose, booking, date, setbookingSuccess }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 310,
        bgcolor: 'background.paper',
        border: '2px solid #f9f9f9',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
    };
    const {user} = useAuth()
    const initialInfo = {patientName:user.displayName , email: user.email, phone: ''}
    const { name, time } = booking;
    
    const [bookingInfo, setBookingInfo] = useState(initialInfo)


    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo}
        newInfo[field] = value
        console.log(newInfo)
        setBookingInfo(newInfo)
    }
    const handleBookingSubmit = e =>{
       
        // alert('submitting')

        //collect data
        const appointment = {...bookingInfo, time, serviceName:name, date: date.toLocaleDateString()}
       
        //send server
        fetch('http://localhost:5000/appointments', {
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                setbookingSuccess(true)
                handleBookingClose()
            }
        })
       
        e.preventDefault();
    }

    return (

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>

                    <form onSubmit={handleBookingSubmit}>
                        
                        <TextField
                            
                            sx={{width:'90%', m:1}}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                            name='patientName'
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            
                            sx={{width:'90%', m:1}}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                            email='email'
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            
                            sx={{width:'90%', m:1}}
                            id="outlined-size-small"
                            placeholder="Phone Number"
                            size="small"
                            name='phone'
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            disabled
                            sx={{width:'90%', m:1}}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{width:'90%', m:1}}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />

                        <Button type='Submit' variant = "contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>

    );
};

export default BookingModal;