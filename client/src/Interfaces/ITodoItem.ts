export interface TodoItem{
    name: string,
    tags?: Array<TodoItemTags>,
    icon?: string
}
export interface TodoItemTags{
    tagName: string,
    color?: string
}
