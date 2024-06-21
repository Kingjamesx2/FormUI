import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


export const ListItems: React.FC = () => {
  return (
    <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <InsertDriveFileIcon />
      </ListItemIcon>
      <ListItemText primary="Form" />
    </ListItemButton>
  </React.Fragment>
  );
}

export default ListItems;