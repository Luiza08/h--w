import React from "react";
import TodoSearch from "./TodoSearch";
import TodoStatusFilter from "./TodoStatusFilter";

const TodoHeader = () => {
    return (
        <div>
            <TodoSearch/>
            <TodoStatusFilter/>
        </div>
    )
}

export default TodoHeader;