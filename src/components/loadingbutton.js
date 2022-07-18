import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '@mui/icons-material/Check';

const LoadingButton = (props) => {

    if (props.done) {
        return (
            <Button {...props} disabled>
                <CheckIcon />
            </Button>
        );
    }
    else if (props.loading) {
        return (
            <Button {...props} disabled>
                <CircularProgress size={24} color="secondary" />
            </Button>
        );
    } else {
        return (
            <Button {...props}>load more</Button>
        );
    }
}

export default LoadingButton;