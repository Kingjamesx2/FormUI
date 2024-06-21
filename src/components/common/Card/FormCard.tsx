import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


interface FormCardProps {
      formPreview: string;
      title: string;
      contentHeight?: string | number; // Add optional prop for content height

}

export const FormCard: React.FC<FormCardProps> = ({formPreview, title}) => {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={formPreview}
            alt="form preview"
          />
          <CardContent sx={{ height: 80 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontSize: '14px',
                whiteSpace: 'wrap',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default FormCard;