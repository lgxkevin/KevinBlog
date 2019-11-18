import React from "react";

interface TodoItemInterface{
    name: string,
    status: number, //0: doing 1:finish 2:emergency
    tags: Array<TodoItemTags>,
    icon?: string
}
interface TodoItemTags{
    tagName: string,
    color: string
}

export default function TodoItem(props: TodoItemInterface){
    return (
        <div>Items</div>
    )
}
