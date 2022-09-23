## 簡單心得

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
// 父元件
<TodoList
    todos={todos}
    toggleTodo={toggleTodo}
/>
```

```
// 定義子元件 props 型別
type Props = {
    todos: Todo[]; // todos 為 array 型別，裡面的資料型別定義在 Todo
    toggleTodo: ToggleTodo; // toggleTodo 為 function 型別，裡面的資料型別定義在 ToggleTodo
}

// 子元件 porps 使用 example
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

## 渲覽 list example
```
// todo:Todo 把 todo 內的型別定義在 Todo 裡
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
```