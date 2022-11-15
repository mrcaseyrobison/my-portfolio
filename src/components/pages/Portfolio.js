import React from 'react';
import Project from '../Project';
import data from '../Project.data';
import { Grid } from '@mui/material';

const styles = {
    title: {
        textAlign: "center"
    }
};

export default function Portfolio() {
    return (
      <div id="project-container">
        <Grid id="projects" container spacing={2} justifyContent="center">
          {data.map(({ id, title, description, image, repo }) => (
            <Project
              id={id}
              title={title}
              description={description}
              image={image}
              repo={repo}
            />
          ))}
        </Grid>
      </div>
    );
  }
      