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
import { blueGrey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tanzania_image from "../Components/Image/Tanzania.png";
import Tanzania_image2 from "../Components/Image/Tanzania_.png";
import Tanzania_image3 from "../Components/Image/Flag_of_Tanzania.png";

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

export default function Tanzania() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <h1>Tanzania</h1>

      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
              T
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="About Tanzania"
          subheader="Member East African Community"
        />
        <CardMedia
          component="img"
          height="194"
          img
          src={Tanzania_image}
          alt="countryMap"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Tanzania is a country in East Africa. The official languages are
            Kiswahili and English. It is next to Africa's biggest lake, Lake
            Victoria. In 2017, there were about 54,000,000 people living in
            Tanzania.[9] They are divided into 120 tribes; none have more than
            10% of the population. Tanzania is a multicultural society. There
            are many languages & religions in Tanzania; the main ones being
            Christianity and Arabic.
          </Typography>
          <img src={Tanzania_image2} alt="countryMap" />
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
            <img src={Tanzania_image3} alt="countryMap" />
            <Typography paragraph>More Information:</Typography>

            <Typography paragraph>
              The president of the United Republic of Tanzania is Samia Suluhu
              Hassan. Tanzania is a member of the United Nations, UNIDO, the
              World Bank, the International Monetary Fund, the Commonwealth of
              Nations, the Non-Aligned Movement, SADC, PTA, and the ADB. It is
              also signatory to the Lome Convention. For many years after
              independence, a single party, the Kenya African National Union
              (KANU), ruled the country. General elections were held every 5
              years. However, all candidates for election to office had to
              belong to the ruling party, KANU. The party used the police to
              harass and torture socialists and communists in Kenya, and worked
              closely with Britain and the United States to keep them out of
              politics
            </Typography>
            <Typography paragraph>
              Mainland Tanzania (formerly Tanganyika) received independence in
              December 1961, while Zanzibar gained her independence in January
              1964, through a revolution. The two countries joined together to
              form the United Republic of Tanzania in April 1964. Until July
              1992, Tanzania was a one-party state. Following a Presidential
              Commission, the country has started a multi-party political
              system. It has held successful general elections in 1995 and 2000.
              "
            </Typography>
            <Typography>
              Tanzania is home to the Serengeti. Many animals such as lions and
              cheetahs live there.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
}
