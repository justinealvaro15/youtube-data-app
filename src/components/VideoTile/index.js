import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { useStyles } from './styles';

const VideoTile = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                image="https://miro.medium.com/v2/resize:fit:1358/1*60RQyL8WeifCvfJX8dQCcQ.jpeg"
                sx={{ width: 250 }}
                alt="Placeholder text"
            />
            <Box className={classes.content}>
                <CardContent>
                    <Typography variant="h4">Youtube Video Title</Typography>
                    <Typography variant="body1" color="gray">Description placeholder...</Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default VideoTile;
