import React from 'react'
import { useState } from 'react'
import ToDoItem from './ToDoItem';

function ToDoList(props) {
  const [counter, setCounter] = useState(0);

  const showButton = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>{props.data}</h1>
      <p>{counter}</p>
      <button onClick={showButton}>click</button>
    </div>
  );
}

function ToDoItem(props) {
  return (
    <div className='todoitem-continer'>
        <input type="checkbox" />{props.task}
    </div>
  )
}

export default function ToDoInput() {
    const [text, setText] = useState("");
    
    const [displayedText, setDisplayedText] = useState([]);
    const showInput = () => {
      setDisplayedText([...displayedText, text]);
      setText("");
      console.log(displayedText)
    };
    
    const showAllItems = displayedText.map((item) => <ToDoItem task={item} />)
    console.log(showAllItems)
    return (
      <div>
        <br />
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value)
            // , console.log(text);
          }}
        />
        {showAllItems}
        {/* <ToDoItem task={displayedText} /> */}
        <button onClick={showInput}>click me</button>
      </div>
    );
  }
