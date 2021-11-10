import { Alert, Container, Grid, Typography} from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {id:1, name:'Teeth Orthodontics', time:'8:00 AM-9:00 AM', available:'10 SPACES AVAILABLE'},
    {id:2, name:'cosmetic Dentistry', time:'10:05 AM-11:30 AM', available:'10 SPACES AVAILABLE'},
    {id:3, name:'Teeth Cleaning', time:'5:00 PM-6:30 PM', available:'10 SPACES AVAILABLE'},
    {id:4, name:'Cavity Protection', time:'7:00 AM-8:30 AM', available:'10 SPACES AVAILABLE'},
    {id:5, name:'Teeth Orthodontics', time:'9:00 PM-11:00 PM', available:'10 SPACES AVAILABLE'},
    {id:6, name:'Teeth Orthodontics', time:'5:00 AM-9:00 AM', available:'10 SPACES AVAILABLE'}
]


const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setbookingSuccess] = useState(false)
    return (
        <Container sx={{ textAlign: 'center', margin: '20px 0' }}>
            <Typography sx={{color:'info.main', fontWeight:500 ,padding:'60px 0'}} >Available Appointment on {date.toDateString()}</Typography>
            {bookingSuccess &&  <Alert severity="success"> Booking Successfull!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking=> <Booking
                    key={booking.id} booking={booking}
                    date={date}
                    setbookingSuccess={setbookingSuccess}
                    >

                    </Booking>)
                }
                </Grid>

        </Container>
    );
};

export default AvailableAppointment;