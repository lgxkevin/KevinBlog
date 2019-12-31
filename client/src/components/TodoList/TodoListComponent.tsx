import React, {useState} from "react";
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {TodoItem, TodoItemTags} from "../../Interfaces/ITodoItem";
import {mapColor} from "../../util/Common";

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
    const [todoList, setTodoList] = useState<Array<TodoItem>>([]);
    const [ratio, setRatio] = React.useState('female');

    const OnTodoItemInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTodoItem(event.target.value);
    };

    const OnPressEnter = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter' && todoItem !== '') {
            clearInput();
        }
    };

    // {name} / {tagName1, color}, {tagName2, color} / {icon}
    const createTodoItem = (todoInput: string):TodoItem => {
        let departString = todoInput.split("/");
        let itemName = departString[0];
        let itemTags = departString[1]? null : splitTags(departString[1]);

        let newTodoItem: TodoItem = {
            name: itemName
        };

        return newTodoItem;
    };

    const splitTags = (tags: string): Array<TodoItemTags> => {
        let tagsArray = tags.split(",");
        tagsArray.map(tag => {
            let itemTag:TodoItemTags = {
                tagName = tag[0],
                color = tag[1]?null: mapColor(tag[1])
            }
        })
    };

    const updateTodoList = (): void => {

        todoList.push(newTodoItem);
        setTodoList(todoList);
    };

    const clearInput = (): void => {
        setTodoItem("");
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
                   value={todoItem}
                   onChange={event => OnTodoItemInputChange(event)}
            />
            <button onClick= {() => updateTodoList()}>Add</button>
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
