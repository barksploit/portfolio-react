import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '@mui/icons-material/Check';

const LoadingButton = ({ classes, loading = false, done = false, ...other }) => {

    if (done) {
        return (
            <Button className={classes.button} {...other} disabled>
                <CheckIcon />
            </Button>
        );
    }
    else if (loading) {
        return (
            <Button className={classes.button} {...other}>
                <CircularProgress />
            </Button>
        );
    } else {
        return (
            <Button className={classes.button} {...other} />
        );
    }
}

export default LoadingButton;