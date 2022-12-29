import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemListConteiner({greeting}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={greeting}
        subheader=""
      />
      <CardMedia
        component="img"
        height="194"
        image='https://img2.rtve.es/i/?w=1600&i=1447940140906.jpg'
        // image="https://images-ext-1.discordapp.net/external/CEAihPUbwyaQIHk-sn8gNn-04KrjL7imyItYFbvBh84/%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1770%26q%3D80/https/images.unsplash.com/photo-1555041469-a586c61ea9bc?width=720&height=480"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        La comedia de dibujos animados se centra en una familia que vive en la ciudad de Springfield.
        </Typography>
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
          <Typography paragraph>Historia:</Typography>
          <Typography paragraph>
          La cabeza de la familia Simpson es Homero, quien no es un hombre de familia típico, obrero de una planta nuclear,
            él hace lo mejor para poder liderar a su familia,
            pero frecuentemente se da cuenta que son ellos los que lo mandan. La familia se compone de la matriarca amorosa,
            Marge, de cabello azul, el hijo agitador Bart, la hija aplicada Lisa y la bebé Maggie.
          </Typography>
          {/* <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}