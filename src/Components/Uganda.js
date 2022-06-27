import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { deepOrange} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Uganda_image from "../Components/Image/Languages_of_Uganda.png";
import Uganda_image2 from "../Components/Image/Uganda_.png";
import Uganda_image3 from "../Components/Image/Flag_of_Uganda.png";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

export default function Uganda() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <h1>Uganda</h1>

      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: deepOrange[500] }} aria-label="recipe">
              U
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="About Uganda"
          subheader="Member East African Community"
        />
        <CardMedia
          component="img"
          height="194"
          img
          src={Uganda_image2}
          alt="countryMap"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            The Republic of Uganda is a landlocked country in east Africa. Its
            capital and biggest city is Kampala. The currency is the Ugandan
            Shilling. The official languages of Uganda are English and Swahili.
            The most common religion is Christianity. The President of Uganda is
            Yoweri Kaguta Museveni. The country is to the East of Africa. The
            population of Uganda is 32 million people. The area of Uganda is
            about 236,040 k
          </Typography>
          <img src={Uganda_image} alt="countryMap" />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <img src={Uganda_image3} alt="countryMap" />
            <Typography paragraph>More Information:</Typography>
            <Typography paragraph>
              The literacy rate of Uganda is 68%, which mean people in Uganda
              who are at least 15 years old know how to read and write.
            </Typography>
            <Typography paragraph>
              Uganda is among countries thought to be very corrupt by
              Transparency International. It is rated at 2.4 on a scale from 0
              (the most corrupt) to 10 (the most clean).[4] Uganda is one of the
              poorest nations in the world. 37.7 percent of the people live on
              less than $1.25 a day
            </Typography>
            <Typography>Uganda produces coffee and copper.</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
}
