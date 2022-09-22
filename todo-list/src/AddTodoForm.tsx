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
    
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }
    
    function onSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        addTodo(text);
        setText(initText);
    }
    return (
        <form>
            <input 
                type="text"
                value={text}
                onChange={onChange}
            />
            <button 
                type="submit"
                onClick={onSubmit}
            >Add Todo</button>
        </form>
    )
}