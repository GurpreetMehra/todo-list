import React, { useState } from 'react';
import './InputText.css';

export default function InputText(props) {
     const [inputText, setInputText] = useState('');
     const onchange = (event) => {
          setInputText(event.target.value);
     };

     return (
          <>
               <div className="TodoInput">
                    <input
                         className="Input-box"
                         onChange={onchange}
                         value={inputText}
                         placeholder="Enter a task"
                         type="text"
                    ></input>
                    <button
                         className="btn"
                         onClick={() => {
                              props.addlist(inputText);
                              setInputText('');
                         }}
                    >
                         Create Task
                    </button>
               </div>
          </>
     );
}
