import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectAutoWidthProps {
}

export const SelectAutoWidth: React.FC = () => {
  // Declare a state variable 'category' and a setter function 'setCategory' initialized to an empty string.
  const [category, setCategory] = React.useState('');

  // Define a handler function for changes in the select input which 
  //update the state variable 'category' with the new value from the select input.
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      {/* FormControl provides structure for the input and label components */}
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"  // Associate the label with the select input
          id="demo-simple-select-autowidth"  // ID for the select input
          value={category}  // Current value of the select input, bound to state
          onChange={handleChange}  // Event handler for when the value changes
          autoWidth  // Automatically adjust the width of the select input based on the selected content
          label="Category" 
        >
          {/* MenuItem components represent the options in the dropdown menu */}
          <MenuItem value="">
            <em>None</em>  
          </MenuItem>
          <MenuItem value={10}>VP Office</MenuItem>  
          <MenuItem value={21}>ICT</MenuItem>  
          <MenuItem value={22}>FST</MenuItem>  
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectAutoWidth;
