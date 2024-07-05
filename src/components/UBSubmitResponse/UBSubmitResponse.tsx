import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export const UBSubmitResponse: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#f5f5f5"
      >
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              BAB Camp Workers Registration Form
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Your response has been recorded.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={handleReset}>
              Submit another response
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            BAB Camp Workers Registration Form
          </Typography>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default UBSubmitResponse;
