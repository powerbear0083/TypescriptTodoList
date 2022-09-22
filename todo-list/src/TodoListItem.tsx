import React from 'react';

type Props = {
    todo: Todo
    toggleTodo: ToggleTodo
}

export const TodoListItem = (
    { 
        todo,
        toggleTodo
    }: Props
) => {
    return (
        <li>
            <label 
                style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
            >
                <input 
                    type="checkbox" 
                    checked={todo.complete}
                    onChange={() => toggleTodo(todo)}
                /> 
                {todo.text}
            </label>
        </li>
    )
};