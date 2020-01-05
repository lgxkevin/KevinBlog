import React, {useState} from "react";
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {TodoItem, TodoItemTags} from "../../Interfaces/ITodoItem";
import {objectMapper} from "../../util/Common";
import {ColorMapper, IColorMapper} from "../../Interfaces/IColorMapper";

type colorKeys =  "default" | "y" | "r" | "b";

    // keyof typeof ColorMapper;

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
            updateTodoList();
            // item created successfully
            clearInput();
            // todo item created failed
        }
    };

    // {name} / {tagName1, color}, {tagName2, color} / {icon}
    const createTodoItem = (todoInput: string):TodoItem => {
        let departString = todoInput.split("/");
        let itemName = departString[0];
        let newTodoItem: TodoItem = {
            name: itemName,
        };
        if (departString[1]) {
            newTodoItem.tags = splitTags(departString[1]);
        }
        if (departString[2]) {
            newTodoItem.icon = departString[2];
        }
        return newTodoItem;
    };

    const splitTags = (tags: string): Array<TodoItemTags> => {
        let tagsArray = tags.split(",");
        let result = tagsArray.map(tag => {
            let itemTag:TodoItemTags = {
                tagName: tag[0],
                // todo: if tag[1] is not proper type
                color: tag[1]?
                    objectMapper(ColorMapper, tag[1] as colorKeys)
                    : objectMapper(ColorMapper,'default')
            };
            return itemTag;
        });
        return result;
    };

    const updateTodoList = (): void => {
        let newItem = createTodoItem(todoItem);
        todoList.push(newItem);
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
