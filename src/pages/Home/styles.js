import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100vw',
        maxHeight: '100vh',
        padding: '24px',
        gap: '24px',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
}));