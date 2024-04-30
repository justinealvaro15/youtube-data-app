import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        cursor: 'pointer',
        border: '1px solid #d8dcdf',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f6f6f6',
        width: '100%',
    },
}));