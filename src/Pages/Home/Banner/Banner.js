import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography, Container } from '@mui/material';

const bannerBg ={
    background: `url(${bg})`,
    
}

const verticalCenter =  {
    display:'flex',
    height: 400,
    alignItems:'center',
}

const Banner = () => {
    return (
        <div>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid style={{...verticalCenter ,textAlign:'left'}} item xs={12} md={6}>
                       <Box>
                       <Typography variant='h3'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{my:3 ,fontSize:13, color:'gray', fontWeight:300}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus eius fugiat repellat qui iure cum tempore asperiores sit consequuntur alias, quis laborum quia?
                        </Typography>
                        <Button variant="contained" style={{backgroundColor:'#5CE7ED'}}>Get Appointment</Button>
                       </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{width:350}} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;