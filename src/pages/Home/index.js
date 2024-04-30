import React from 'react';
import { Box } from '@mui/material';

import VideoTile from '../../components/VideoTile';
import Searchbar from '../../components/Searchbar';
import { useLazyGetVideoListQuery } from '../../services/youtubeApi';

import { useStyles } from './styles';

const Home = () => {
    const classes = useStyles();
    const [triggerSearch, { data = {} }] = useLazyGetVideoListQuery();
    const { items = [] } = data;

    return (
        <div className={classes.root}>
            <Searchbar onSearch={triggerSearch} />
            <Box className={classes.list}>
                {items.map(({ snippet }) => {
                    const { title, description, thumbnails } = snippet;
                    return (
                        <VideoTile
                            title={title}
                            description={description}
                            thumbnailUrl={thumbnails.medium.url}
                        />
                    );
                })}
            </Box>
        </div>
    );
};

export default Home;
