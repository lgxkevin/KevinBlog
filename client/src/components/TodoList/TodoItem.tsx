import React from "react";
import {TodoItem, TodoItemTags} from "../../Interfaces/ITodoItem";

export default function TodoItem(props: TodoItem){
    return (
        <div>{props.name}</div>
    )
}
