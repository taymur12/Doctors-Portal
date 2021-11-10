import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png'

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ felxGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: -110 }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ mb: 5 }} variant="h6" style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography sx={{ my: 3 }} variant="h4" style={{ color: 'white' }} >
                            Make an Appointment Today
                        </Typography>
                        <Typography sx={{ my: 3 }} variant="h6" style={{ color: 'white', fontSize: 14, fontWeight: 300 }} >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a, facere molestiae quis distinctio nisi odit nemo. Ab, commodi incidunt!
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;