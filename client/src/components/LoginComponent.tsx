import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import auth from '../services/auth';
import {useState} from "react";

interface UserValidationState {
    username: string,
    password: string
}

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
    const [values, setValues] = useState<UserValidationState>({
        username: '',
        password: ''
    });

    const handleChange = (name: keyof UserValidationState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [name]: event.target.value
        })
        console.log('values: ', values);
    };

    const LoginCheck = ():void => {
        // Nav to AdminComponent if success
        auth.login(() => {
            props.history.push("./admin")
        });
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Username"
                margin="normal"
                variant="outlined"
                autoFocus={true}
                value={values.username}
                onChange={handleChange('username')}
            />
            <TextField
                id="outlined-basic"
                className={classes.textField}
                type="password"
                label="Outlined"
                margin="normal"
                variant="outlined"
                value={values.password}
                onChange={handleChange('password')}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={
                    () => LoginCheck}
            >
                Login
            </Button>
        </form>
    )
};
