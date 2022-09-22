import React from 'react';

type Props = {
    todo: Todo;
}

export const TodoListItem = (
    { 
        todo: { 
            text, 
            complete
        } 
    }: Props
) => {
    return (
        <li>
            <label style={{ textDecoration: complete ? 'line-through' : undefined }}>
                <input type="checkbox" checked={complete} /> 
                {text}
            </label>
        </li>
    )
};