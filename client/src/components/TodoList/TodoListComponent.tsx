import React, {useState} from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TodoItem from "./TodoItem";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(3),
        },
    }),
);

export default function TodoListComponent() {
    const classes = useStyles();
    const [todoItem, setTodoItem] = useState<string>('');
    const [todoList, setTodoList] = useState<Array<string>>();
    const [ratio, setRatio] = React.useState('female');

    const OnTodoItemInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTodoItem(event.target.value)
    };

    const handleRatioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRatio((event.target as HTMLInputElement).value);
    };

    return (
        <div>
        <input placeholder = 'Input todo items here'
               value={todoItem}
               onChange={event => OnTodoItemInputChange(event)}
        />

            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={ratio} onChange={handleRatioChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="(Disabled option)"
                    />
                </RadioGroup>
            </FormControl>

        </div>
    )
}
