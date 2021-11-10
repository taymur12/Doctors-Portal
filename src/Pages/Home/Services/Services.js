import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';


const services = [
    {img:'https://i.ibb.co/tLfTzsS/fluoride.png', name:'Flouoride Treatment', description:'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.'},
    {img:'https://i.ibb.co/JjJbBSx/cavity.png', name:'Cavity Filling', description:'A cavity filling brings back the functionality and appearance of the tooth. Basically, a passage is sort of a filling except for the within of the tooth, deep within the roots, where the nerve and blood supply is. A “regular” filling is to deal with decay on the highest a part of the tooth.'},
    {img:'https://i.ibb.co/zHw3kvs/whitening.png', name:'Teath Whitening', description:'Tooth whitening or tooth bleaching is the process of lightening the color of human teeth. Whitening is often desirable when teeth become yellowed over time for a number of reasons, and can be achieved by changing the intrinsic or extrinsic color of the tooth enamel.'}
]


const Services = () => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography sx={{fontWeight:500, m:2, color:'success.main', textAlign:'center'}}  gutterBottom variant="h6" component="div">
                       Our Services
                    </Typography>
            <Typography sx={{fontWeight:600, m:3, textAlign:'center' }}  gutterBottom variant="h5" component="div">
                       Service We Provide
                    </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
          services.map(service =>  <Service key={service.name} service={service}></Service>)
          }
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;