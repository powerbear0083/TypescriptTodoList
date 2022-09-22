import React, { useState } from 'react';
import { TodoListItem } from "./TodoListItem"

const initialTodos: Todo[] = [
    {
        text: 'Walk the dog',
        complete: false,
    },
    {
        text: 'Write app',
        complete: true,
    },
];
function App() {
    const [todos, setTodos] = useState(initialTodos);
    return (
        <>
            <TodoListItem todo={todos[0]} />
            <TodoListItem todo={todos[1]} />
        </>
    )
}

export default App;