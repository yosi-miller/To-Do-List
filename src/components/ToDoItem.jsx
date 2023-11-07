import React from "react";

function ToDoItem(props) {
  return (
    <div className="todoitem-continer">
      <input type="checkbox" />
      {props.task}
    </div>
  );
}

export default ToDoItem;
