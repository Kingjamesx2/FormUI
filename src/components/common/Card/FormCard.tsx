import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface FormCardProps {
  formPreview: string;
  title: string;
  contentHeight?: string | number; // Add optional prop for content height
}

export const FormCard: React.FC<FormCardProps> = ({ formPreview, title }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          image={formPreview}
          alt={title}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <CardContent sx={{ height: 80, bgcolor: "#FFD954", pt: "1%" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontSize: "14px",
              pt: "5%",
              whiteSpace: "wrap",
              textOverflow: "ellipsis",
              textAlign: "center",
              fontWeight: "bold", // or use 700 for numeric weight
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormCard;
