import React from "react";

import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form";
import InfoPanel from "../info-panel/info-panel";

import "./application.css";

export default class Application extends React.Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("To drink coffee"),
      this.createTodoItem("Create React project"),
	  this.createTodoItem("Have lunch"),
	  this.createTodoItem("Watch the video in English"),
    ],
	searchData: "",
	filter: "all"
  };

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
	  if (text !== "") {
		const newItem = this.createTodoItem(text);

		this.setState(({ todoData }) => {
		  const newArray = [...todoData, newItem];
	
		  return {
			todoData: newArray,
		  };
		});
	  };
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  searchItem = (todoData, searchData) => {
    if (searchData.length === 0) {
      return todoData;
    }

    return todoData.filter((el) => {
      return el.label.toLowerCase().indexOf(searchData.toLowerCase()) > -1;
    });
  };

  stateSearch = (searchWord) => {
	  this.setState( {
		searchData: searchWord
	  });
  };

  onFilterChange = (filter) => {
	  this.setState( {
		filter: filter
	  });
  };

  filter = (todoData, filter) => {
	switch(filter){
		case 'all':
			return todoData
		case 'active':
			return todoData.filter((el) => el.done === false)
		case 'done':
			return todoData.filter((el) => el.done === true)
		default: 
			return todoData
	}
  };

  render() {
    const { todoData, searchData, filter } = this.state;

	const visibleItem = this.filter(this.searchItem(todoData, searchData), filter);
    const doneCount = todoData.filter((el) => el.done === true).length;
	const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
		<div className="top-panel">
			<SearchPanel stateSearch={this.stateSearch}/>
			<ItemStatusFilter 
				filter={filter}
				onFilterChange={this.onFilterChange} />
        </div>
        <TodoList
          todos={visibleItem}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
		<InfoPanel />
      </div>
    );
  }
}
