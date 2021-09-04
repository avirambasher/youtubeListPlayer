import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { Grid, CircularProgress, List, ListItem, ListItemText, Paper, Button  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUrl } from '../../../actions/ytPlayer';

const PlayList = () => {
    const urlList = useSelector((state) => state.playlist);
    const [videoCollection, setVideoCollection] = useState([])
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        setVideoCollection(urlList);
      }, [urlList]);
    
    return (
        <Paper style={{maxHeight: 200, overflow: 'auto'}}>
            <List className={classes.list} component="nav" aria-label="main mailbox folders">
                {videoCollection.map((urlData) => (
                    <ListItem button key={urlData._id} xs={12} sm={6} md={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={9}>
                                <ListItemText primary={urlData.url} />  
                            </Grid>
                            <Grid item xs={3}>
                                <Button size="small" color="primary" onClick={() => dispatch(deleteUrl(urlData._id))}>
                                    <DeleteIcon fontSize="small" />
                                </Button>
                            </Grid>
                            
                        </Grid>
                        
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default PlayList;