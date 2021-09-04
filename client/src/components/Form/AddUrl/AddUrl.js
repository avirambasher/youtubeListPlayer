import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addUrl } from '../../../actions/ytPlayer';

const AddUrl = () => {
    const [urlData, setUrlData] = useState({ url : ''});
    const dispatch = useDispatch();
    const classes = useStyles();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(urlData.url){
            dispatch(addUrl(urlData));
        }
        setUrlData({ url : ''});
        
    };
    return(
        <Paper>
            <Typography variant="h6"></Typography>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <TextField value={urlData.url} label='Enter Url' onChange={(e) => setUrlData({url : e.target.value})} ></TextField>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit">Add Url</Button>
            </form>
        </Paper>
        
    );
}

export default AddUrl;