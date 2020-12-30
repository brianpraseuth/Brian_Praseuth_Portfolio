import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
//   Box,
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    margin: "10px"
  },
  media: {
    height: 240,
  },
}));

export default function Projects(props) {
  const classes = useStyles();
  return (
    <div>
        <Grid item xs ={12} sm={6} md={4}>
          <Card className={classes.card} elevation={3}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to={props.github}>Github</Link>
              </Button>
              <Button size="small" color="primary">
                <Link to={props.link}>Link</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
    </div>
  );
}
