import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '@mui/icons-material/Check';

const LoadingButton = (props) => {

    // Loading has finished
    if (props.done) {
        return (
            <Button loading={props.loading} done={props.done} className={props.className} variant={props.variant} color={props.color}>
                <CheckIcon size={18} color="secondary" />
            </Button>
        );
    }
    // Trying to load
    else if (props.loading) {
        return (
            <Button loading={props.loading} done={props.done} className={props.className} variant={props.variant} color={props.color}>loading
                <CircularProgress style={{ marginLeft: "10px" }} size={18} color="secondary" />
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