import React from 'react';
import './Task.css';
export default function Task(props) {
     return (
          <div>
               <li className="list-item">
                    {props.item}
                    <span>
                         <i
                              className="fa-solid fa-arrow-left"
                              onClick={props.onPrevClick}
                         ></i>
                         <i
                              className="fa-solid fa-arrow-right"
                              onClick={props.onNextClick}
                         ></i>
                         <i
                              className="fa-solid fa-trash"
                              onClick={props.onDeleteClick}
                         ></i>
                    </span>
               </li>
          </div>
     );
}
