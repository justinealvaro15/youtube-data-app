import React from 'react';
import { Box } from '@mui/material';

import VideoTile from '../../components/VideoTile';
import Searchbar from '../../components/Searchbar';
import { useStyles } from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Searchbar />
            <Box className={classes.list}>
                <VideoTile />
                <VideoTile />
                <VideoTile />
            </Box>
        </div>
    );
};

export default Home;
