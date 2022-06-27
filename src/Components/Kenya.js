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
import { green } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import image from "../Components/Image/Kenya.png";
import KenyaFlag from "../Components/Image/Flag_of_Kenya.png";
import KenyaTowns from "../Components/Image/Kenya_towns.jpg";
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

export default function Kenya() {

  //useState to toggle the show more icon
  const [expanded, setExpanded] = React.useState(false);

//Function to hundle  and set the expand icon state to opposite
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <h1>Kenya</h1>

      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
              K
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="About Kenya"
          subheader="Member East African Community"
        />
        <CardMedia
          component="img"
          height="194"
          img
              src={image}
          alt="countryMap"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Kenya is a country in East Africa, about halfway down, near the horn
            of Africa. It has the Indian Ocean to its east and Lake Victoria to
            its west. Kenya borders the Jubaland part of Somalia (east),
            Ethiopia (north), South Sudan (north-west), Uganda (west), and
            Tanzania (south). Kenya is about the size of France, and almost as
            large as Texas (U.S.). The capital city of Kenya is Nairobi, which
            is the 14th largest city in Africa (after Accra, Ghana).[6] Some
            cities on the seaside are Mombasa and Malindi on the Indian Ocean,
            Nyeri, Nanyuki, Naivasha, and Thika in the Kenyan Highlands, and
            Kisumu on Lake Victoria. The first humans may have lived near the
            lakes of Kenya along the Great Rift Valley, which cuts Kenya from
            north to south. Kenya's coast is tropical and gets very hot. Inland,
            it is drier and cooler where the mountains rise up. The highest
            mountain in Kenya is Mt. Kenya, at 5,199 metres (17,057 ft). Mount
            Kilimanjaro crosses over the south border, with Tanzania, but the
            highest part of Kilimanjaro is in Tanzania. Kenya is home to many
            different indigenous peoples with their own cultures, languages, and
            histories. There are at least 44 living languages and 1 extinct
            language that is not spoken any more.[7] English and Swahili are the
            official languages spoken in Kenya. Because of colonialism
            school-going Kenyans are required to learn English, and it is used
            in schools and universities.
          </Typography>
          <img  src={KenyaTowns} alt="KenyaTowns"  />
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
            <img src={KenyaFlag} alt="countryMap" />
            <Typography paragraph>More Information:</Typography>
            <Typography paragraph>
                  Kenya was colonized by the British, who began taking land from
              indigenous peoples to build ranches. They also discriminated
              against Kenyans in their own land.[8] Kenyans who were against
              this formed a group called the Kenya Land and Freedom Army, or Mau
              Mau that fought a war against Britain for independence. The
              British committed war crimes to stop the Mau Mau,[9] but on
              December 12, 1963 they agreed to give Kenya independence.
            </Typography>
            <Typography paragraph>
               For many years after independence, a single party, the Kenya
              African National Union (KANU), ruled the country. General
              elections were held every 5 years. However, all candidates for
              election to office had to belong to the ruling party, KANU. The
              party used the police to harass and torture socialists and
              communists in Kenya, and worked closely with Britain and the
              United States to keep them out of politics
            </Typography>
            <Typography>  Uhuru Kenyatta is currently the president of Kenya with William
              Ruto as his Deputy,[11] despite this, the two leaders have had
              political issues after Kenyatta had a peace agrrement often dubbed
              as 'handshake' with Kenya's opposition leader Raila Odinga after
              the 2017's General Elections[12] on whom should succeed Kenya's
              presidency in 2022 as the president supports Odinga.</Typography>
                <Typography>
              Since the independence of Kenya in 1963, Kenya had usually had a
              one-party government. In 1991, a section of the constitution was
              scrapped, which automatically made it a multi-party state. It is a
              member of the British Commonwealth.[13] The people are, like the
              Congo, divided into many tribes that often fight. However, Kenya's
              government is trying to get the people to work together and has
              encouraged them to run businesses and factories. Kenya is a
              developing country and is rapidly becoming modernized.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
}