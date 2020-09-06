import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({
  label,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  done,
  important,
}) => {
  let classNames = "todo-list-item d-flex";
  if (done) {
    classNames += " done";
  }
  if (important) {
    classNames += " important";
  }

  return (
    <span className={classNames}>
      <div className="multistring">
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
      </div>
		<div>	
			<button
			type="button"
			className="btn btn-outline-success btn-sm float-right"
			onClick={onToggleImportant}
		>
			<i className="fa fa-exclamation" />
		</button>

		<button
			type="button"
			className="btn btn-outline-danger btn-sm float-right"
			onClick={onDeleted}
		>
			<i className="fa fa-trash-o" />
		</button>
		</div>
    </span>
  );
};

export default TodoListItem;
