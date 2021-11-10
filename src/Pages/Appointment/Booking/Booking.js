import { Grid, Paper, Typography, Button} from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setbookingSuccess }) => {
    const { name, time, available } = booking

    const [openBooking, setBookingOpen] = React.useState(false);
    const handleOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        
           <>
            <Grid item xs={12} sm={6} md={4}>
               <Paper elevation={3} sx={{py:5}} >
                    <Typography sx={{color:'info.main', fontWeight:500}} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display='block' gutterBottom component="div">
                        {available}
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">Book Appointment</Button>
               </Paper>
            </Grid>
            <BookingModal 
            date={date}
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            setbookingSuccess={setbookingSuccess}
            > </BookingModal>
        
           </>
    );
};

export default Booking;