import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.inputHandleChange} type="text" value={props.userText} />
      <button onClick={props.addNewItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
