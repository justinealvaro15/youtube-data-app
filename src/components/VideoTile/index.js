import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { useStyles } from './styles';

const VideoTile = ({ title, description, thumbnailUrl }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                image={thumbnailUrl}
                sx={{ width: 320, height: 180 }}
                alt={title}
            />
            <Box className={classes.content}>
                <CardContent>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="body1" color="gray">
                        {description}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default VideoTile;
