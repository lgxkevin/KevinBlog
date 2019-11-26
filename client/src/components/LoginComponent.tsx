import React, {useState}  from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import auth from '../services/auth';

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
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (name: keyof UserValidationState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [name]: event.target.value
        });
    };

    const LoginCheck = ():void => {
        // Nav to AdminComponent if success
        if (values.username !== 'kevin' || values.password !== '110wasd'){
            setErrorMessage('Username and password are not match.');
        } else {
        auth.login(() => {
            props.history.push("./admin")
        });
        }
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
                error={errorMessage !== ''}
                helperText={errorMessage}
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
                error={errorMessage !== ''}
            />
            <Button
                color="primary"
                onClick={
                    () => LoginCheck()}
            >
                Login
            </Button>
        </form>
    )
};
