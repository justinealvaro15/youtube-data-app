import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#F6F7F8',
        cursor: 'pointer',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
}));