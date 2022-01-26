import React from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const App = () => {
    const todos = [
        {id: 1, label: 'drink cola', done: false, important: false},
        {id: 2, label: 'learn react', done: false, important: false},
        {id: 3, label: 'drink vodka', done: false, important: false},
        {id: 4, label: 'drink tan', done: false, important: false},
    ]
    return (
        <div>
            <TodoHeader/>
            <TodoList todos={todos} />
        </div>
    )
}
export default App;