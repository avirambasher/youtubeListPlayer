import React from 'react';
import AddUrl from './AddUrl/AddUrl';
import PlayList from './PlayList/PlayList';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, TextField, Button, Typography, Paper } from '@material-ui/core';

const Form = () => {
    const classes = useStyles();
    const playList = useSelector((state) => state.playlist);
        
    return(
        <Grid container className={classes.root} justifyContent="center" spacing={2}>
            <Grid item xs={12}>
                <AddUrl />
            </Grid>
            <Grid item xs={12}>
                <PlayList />
            </Grid>
        </Grid>
            
            

        
    );
}

export default Form;