import React, {useState} from "react";
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {TodoItem, TodoItemTags} from "../../Interfaces/ITodoItem";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(3),
        },
    }),
);

export default function TodoListComponent() {
    const classes = useStyles();
    const [todoItemName, setTodoItemName] = useState<string>('');
    const [todoList, setTodoList] = useState<Array<TodoItem>>([]);
    const [ratio, setRatio] = React.useState('female');

    const OnTodoItemInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTodoItemName(event.target.value);
    };

    const OnPressEnter = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter' && todoItemName !== '') {
            clearInput();
        }
    };

    const updateTodoList = (newTodoItem: TodoItem): void => {
        todoList.push(newTodoItem);
        setTodoList(todoList);
    };

    const clearInput = (): void => {
        setTodoItemName("");
    };

    const handleRatioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRatio((event.target as HTMLInputElement).value);
    };

    const todoItems = () => {
        let items = todoList.map((item, index) => {
        })
    };

    return (
        <div>
            <input placeholder='Input todo name here'
                   value={todoItemName}
                   onChange={event => OnTodoItemInputChange(event)}
                   onKeyDown={event => OnPressEnter(event)}
            />
            <input placeholder='Input todo tags here'
                   value={todoItemName}
                   onChange={event => OnTodoItemInputChange(event)}
                   onKeyDown={event => OnPressEnter(event)}
            />
            <input placeholder='Input todo icon here'
                   value={todoItemName}
                   onChange={event => OnTodoItemInputChange(event)}
                   onKeyDown={event => OnPressEnter(event)}
            />

            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={ratio} onChange={handleRatioChange}>
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio/>}
                        label="(Disabled option)"
                    />
                </RadioGroup>
            </FormControl>

        </div>
    )
}
