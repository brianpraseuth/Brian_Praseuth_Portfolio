import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
//   Box,
  Typography,
  Container,
  Grid,
//   Button,
} from "@material-ui/core";
import Projects from './Projects';
import projects from '../projects.json';

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
}));

export default function ProjectContainer() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg" className={classes.projectContainer}>
        <Typography variant="h4" className={classes.projectsTitle}>
          Projects
        </Typography>
        <Grid Container spacing={3}>
          Map through projects here using
        {projects.map(project => (
          <Projects 
            id={project.id}
            image={project.image}
            title={project.title}
            summary={project.summary}
            github={project.github}
            link={project.link}
          />
        ))}
        </Grid>
      </Container>
    </div>
  );
}
