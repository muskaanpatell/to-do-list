//import use state and reat
import React, { useState } from "react";

function TodoInput(props) {
  const [InputText, setInputText] = useState("");// declare state variable 
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(InputText)
      setInputText('')
    }
  }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={InputText}
        onChange={e => {
          setInputText(e.target.value)

        }}
        onKeyDown={handleEnterPress}

      />

      <button className="add-btn"
        onClick={() => {
          props.addList(InputText)
          setInputText('')
        }}>+</button>
      {/* <div>{InputText}</div> */}
    </div>
  );
}

export default TodoInput;
