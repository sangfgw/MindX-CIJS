import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const SectionCard = () => {
  return (
    <Card sx={{ width: 200 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Information about the integration with UBS
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default SectionCard;
