import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <div>
    <CardContent>
      <Typography variant="h5" component="div">
        BAB Camp workers registration Form
      </Typography>
      <Typography sx={{ mb: "1.5%", mt: "5%" }} color="text.secondary">
        Your response has been recorded
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Go Home</Button>
    </CardActions>
    </div>
);


export const UBSubmitResponse: React.FC = () => {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 600, width: "100%", border:"1px solid"}}>
      <Card variant="outlined">{card}</Card>
    </Box>);
};

export default UBSubmitResponse;
