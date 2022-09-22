import React from 'react';
import { TodoListItem } from './TodoListItem';

type Props = {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const TodoList = (
    { 
        todos, 
        toggleTodo 
    }: Props
) => {
    return (
        <ul>
            {
                todos.map((todo:Todo) => (
                    <TodoListItem
                        key={todo.text}
                        todo={todo}
                        toggleTodo={toggleTodo}
                    />
                ))
            }
        </ul>
    )
}