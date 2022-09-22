import React, { useState } from 'react';
import { TodoList } from "./TodoList"
import { AddTodoForm } from "./AddTodoForm"


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
    
    function toggleTodo(selectedTodo: Todo) {
        console.log(selectedTodo);
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    }
    
    function addTodo(text: string) {
        const newTodo = { text, complete: false };
        setTodos([...todos, newTodo]);
    }
    
    // const addTodo: AddTodo = (text: string) => {
    //     const newTodo = { text, complete: false };
    //     setTodos([...todos, newTodo]);
    // }
    
    return (
        <>
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
            />
            <AddTodoForm
                addTodo={addTodo}    
            />
        </>
    )
}

export default App;