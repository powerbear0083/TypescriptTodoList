import React, { useState } from 'react';

type Props = {
    addTodo: AddTodo
}

export const AddTodoForm = (
    {
        addTodo
    }: Props
) => {
    const initText: string = '';
    const [text, setText] = useState(initText);
    return (
        <form>
            <input 
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button 
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    addTodo(text);
                    setText('');
                }}
            >Add Todo</button>
        </form>
    )
}