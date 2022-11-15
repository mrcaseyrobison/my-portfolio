import React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const styles = {
    box: {
        border: "1px solid #000000",
        // backgroundColor: "#000000",
        // color: "#000000"
    }
};

export default function Project({ id, title, description, image, repo  }) {
    return (
        <Grid item xs={10} md={6} key={id} className="project">
            <Card style={styles.box}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="100%"
            image={image}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: "0%",
              left: 0,
              width: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.82)',
              borderTop: 1,
              color: '#FBFF7E',
              padding: '20px',
            }}
          >
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2">{description}</Typography>

            <Grid id="href" container spacing={4} justifyContent="center">
              <Grid item>
                <a href={repo} target="_blank" rel="noreferrer">GitHub Repo</a>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Card>
    </Grid>
    )
}