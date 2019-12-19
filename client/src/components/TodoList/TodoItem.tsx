import React from "react";

interface TodoItemInterface{
    name: string,
    tags?: Array<TodoItemTags>,
    icon?: string
}
interface TodoItemTags{
    tagName: string,
    color?: string
}

export default function TodoItem(props: TodoItemInterface){
    return (
        <div>{props.name}</div>
    )
}
