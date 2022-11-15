import React from 'react';
import Navigation from './Navigation';
import { Grid } from '@mui/material';

const styles = {
    header: {
        overflow: 'auto',
        paddingTop: 25,
        paddingBottom: 25,
        borderBottom: "5px solid #000000"
    },
    title: {
        marginTop: 0,
        marginBottom: 5,
        width: '500px',
    }
};

export default function Header({ handlePageChange }) {
    return (
        <Grid className="header" container spacing={0} style={styles.header}>
            <Grid item xs={12} md={2}>
                <h1 style={styles.title}>Casey Robison</h1>
            </Grid>
            <Grid item xs={12} md={12}>
                <Navigation handlePageChange={handlePageChange} />
            </Grid>
        </Grid>
    );
}
