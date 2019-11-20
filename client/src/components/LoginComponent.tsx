import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import auth from '../services/auth';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }),
);

export default function LoginComponent(props:any):JSX.Element {
    const classes = useStyles();

    const LoginCheck = ():void => {
        // Nav to AdminComponent if success
        console.log('Button clicked!')
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Username"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-basic"
                className={classes.textField}
                type="password"
                label="Outlined"
                margin="normal"
                variant="outlined"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={
                    () => {
                    auth.login(() => {
                        props.history.push("./admin")
                    })

                }}
            >
                Login
            </Button>
        </form>
    )
};
