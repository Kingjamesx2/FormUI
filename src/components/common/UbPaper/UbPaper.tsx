import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

interface IUbPaperProps {    
}

const ContainerPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

export const UbPaper: React.FC<IUbPaperProps> = () => {
    return (
<Stack direction="row" spacing={2}>
      <Paper square={false}>rounded corners</Paper>
      <Paper square>square corners</Paper>
    </Stack>
    );
}
export default UbPaper;