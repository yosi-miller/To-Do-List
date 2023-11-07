import React, { useState } from 'react';

export default function ToDoInput(props) {
    const [text, setText] = useState("");
    
    const handleAddClick = () => {
      props.onAddTask(text);
      setText("");
    };
    
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={handleAddClick}>Add Task</button>
      </div>
    );
}
