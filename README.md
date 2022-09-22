## 簡單的心得

## types.d.ts 
* 可以用來定義全域型別
* *.d.ts * 為檔案名稱；檔案在 compiler 的時候會自己去找定義好的型別，不需要檔案個別引用


## useState 基本範例

### 字串型別
```
    const initText: string = '';
    const [text, setText] = useState(initText);
```


### Array 型別

* Todo[] 陣列裡面的資料型別定義在 types.d.ts

```
// types.d.ts file
type Todo = {
    text: string;
    complete: boolean;
}
```

```
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

const [todos, setTodos] = useState(initialTodos);
```

## 元件 Props 型別定義

```
// 元件
<TodoList
    todos={todos}
    toggleTodo={toggleTodo}
/>
```

```
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
```