import React from "react";

import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

import "./application.css";

const Application = () => {
  const todoList = [
    { label: "To drink coffee", important: false, id: 1 },
    { label: "Create React project", important: true, id: 2 },
    { label: "Have lunch", important: false, id: 3 },
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoList} />
    </div>
  );
};

export default Application;