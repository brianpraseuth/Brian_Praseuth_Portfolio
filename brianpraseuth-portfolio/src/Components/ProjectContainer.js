import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
//   Box,
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Link,
  Button,
//   Button,
} from "@material-ui/core";
import projects from './projects.json';

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    paddingTop: theme.spacing(3),
  },
  projectsTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
}));

export default function ProjectContainer(props) {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg" className={classes.projectContainer}>
        <Typography variant="h4" className={classes.projectsTitle}>
          Projects
        </Typography>
        <Grid container spacing={3}>
        {projects.map(project => (
        <Grid item xs={12} sm={6} md={4}
            id={project.id}
            image={project.image}
            title={project.title}
            summary={project.summary}
            github={project.github}
            link={project.link}
        >
          <Card className={classes.card} elevation={3}>
            <CardActionArea>
            {/* <CardMedia
                  className={classes.media}
                  image={project.image}
                  title="Contemplative Reptile"
                  alt="nothign"
                /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to={project.github}>Github</Link>
              </Button>
              <Button size="small" color="primary">
                <Link to={project.link}>Link</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        ))}
        </Grid>
      </Container>
    </div>
  );
}
