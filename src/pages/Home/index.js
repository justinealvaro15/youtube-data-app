import React from 'react';
import { Box, Divider } from '@mui/material';

import VideoTile from '../../components/VideoTile';
import Searchbar from '../../components/Searchbar';
import { useLazyGetVideoListQuery } from '../../services/youtubeApi';

import { useStyles } from './styles';
import VideoPlayerTile from '../../components/VideoPlayerTile';

const Home = () => {
    const classes = useStyles();
    const [triggerSearchList, { data = {} }] = useLazyGetVideoListQuery();
    const { items = [] } = data;
    const visibleItems = items.slice(1, 6);
    const { snippet: mainVideoSnippet, id: mainVideoId } = items[0] ?? {};

    const handleSuggestedVideoSelect = async (title) => {
        await triggerSearchList(title);
    };

    return (
        <div className={classes.root}>
            <Searchbar onSearch={triggerSearchList} />
            <Box className={classes.list}>
                {items[0] && (
                    <VideoPlayerTile
                        title={mainVideoSnippet.title}
                        description={mainVideoSnippet.description}
                        videoUrl={`https://www.youtube.com/watch?v=${mainVideoId.videoId}`}
                    />
                )}
                <Divider />
                {visibleItems.map(({ snippet, id }) => {
                    const { title, description, thumbnails } = snippet;
                    return (
                        <VideoTile
                            title={title}
                            description={description}
                            thumbnailUrl={thumbnails.medium.url}
                            onSelect={() => handleSuggestedVideoSelect(title)}
                            key={id.videoId}
                        />
                    );
                })}
            </Box>
        </div>
    );
};

export default Home;
