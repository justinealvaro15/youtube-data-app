import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import { useStyles } from './styles';

const Searchbar = () => {
    const classes = useStyles();
    const [input, setInput] = useState('');

    const handleSearch = () => {
        console.log('input', input);
    };

    return (
        <Box className={classes.root}>
            <TextField
                className={classes.search}
                label="Search video"
                variant="outlined"
                onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="outlined" onClick={handleSearch}>
                Search
            </Button>
        </Box>
    );
};

export default Searchbar;
