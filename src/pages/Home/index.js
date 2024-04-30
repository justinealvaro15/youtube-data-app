import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import he from 'he';

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
            <Box className={classes.container}>
                {items[0] && (
                    <VideoPlayerTile
                        title={mainVideoSnippet.title}
                        description={mainVideoSnippet.description}
                        videoUrl={`https://www.youtube.com/watch?v=${mainVideoId.videoId}`}
                    />
                )}
                {items.length > 0 && (
                    <Box className={classes.list} >
                        <Divider />
                        <Typography variant="subtitle1" fontWeight={700} color="gray">
                            SIMILAR VIDEOS
                        </Typography>
                        {visibleItems.map(({ snippet, id }) => {
                            const { title, description, thumbnails } = snippet;
                            const formattedTitle = he.decode(title);
                            return (
                                <VideoTile
                                    title={formattedTitle}
                                    description={description}
                                    thumbnailUrl={thumbnails.medium.url}
                                    onSelect={() => handleSuggestedVideoSelect(formattedTitle)}
                                    key={id.videoId}
                                />
                            );
                        })}
                    </Box>
                )}

            </Box>
        </div>
    );
};

export default Home;
