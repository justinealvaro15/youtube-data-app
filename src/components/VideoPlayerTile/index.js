import React from 'react';
import he from 'he';
import ReactPlayer from 'react-player';

import { Box, Card, CardContent, Typography } from '@mui/material';

import { useStyles } from './styles';

const VideoPlayerTile = ({ title, description, videoUrl }) => {
    const classes = useStyles();
    const formattedTitle = he.decode(title);

    return (
        <Card className={classes.root}>
            <Box className={classes.player} >
                <ReactPlayer url={videoUrl} width="100%" height="640px"/>
            </Box>
            <Box className={classes.content}>
                <CardContent>
                    <Typography variant="h4" fontWeight={700}>{formattedTitle}</Typography>
                    <Typography variant="body1" color="gray">
                        {description}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default VideoPlayerTile;
