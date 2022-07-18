import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '@mui/icons-material/Check';

const LoadingButton = (props) => {

    // Loading has finished
    if (props.done) {
        return (
            <Button {...props} disabled>
                <CheckIcon />
            </Button>
        );
    }
    // Trying to load
    else if (props.loading) {
        return (
            <Button {...props} disabled>
                <CircularProgress size={18} color="secondary" />
            </Button>
        );
        // Default state
    } else {
        return (
            <Button {...props}>load more</Button>
        );
    }
}

export default LoadingButton;