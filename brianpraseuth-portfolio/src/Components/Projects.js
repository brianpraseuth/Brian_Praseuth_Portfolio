import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
//   Box,
  Typography,
//   Container,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
}));

export default function Projects() {
  const classes = useStyles();
  return (
    <div>
      <Grid Container spacing={3}>
        {/* Map through projects here using */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Project Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Github Link
              </Button>
              <Button size="small" color="primary">
                Working App Link
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
