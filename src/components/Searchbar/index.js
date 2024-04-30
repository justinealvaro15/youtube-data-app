import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import { useStyles } from './styles';

const Searchbar = ({ onSearch }) => {
    const classes = useStyles();
    const [input, setInput] = useState('');

    const handleSearch = () => {
        if (input) {
            onSearch(input);
            setInput('');
        }
    };

    return (
        <Box className={classes.root}>
            <TextField
                className={classes.search}
                label="Search video"
                placeholder="Type video title"
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="outlined" onClick={handleSearch}>
                Search
            </Button>
        </Box>
    );
};

export default Searchbar;
