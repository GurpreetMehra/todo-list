import React from 'react';
import Task from '../Task/Task';

export default function TaskList(props) {
     return (
          <>
               <div className="list-container">
                    <h1 className="list-heading">{props.heading}</h1>
                    {props.item.map((listItem, i) => {
                         return (
                              <Task
                                   item={listItem}
                                   onDeleteClick={() =>
                                        props.handleDelete(i, props.id)
                                   }
                                   onNextClick={() =>
                                        props.onClickNext(i, props.id)
                                   }
                                   onPrevClick={() =>
                                        props.onClickPrev(i, props.id)
                                   }
                              />
                         );
                    })}
               </div>
          </>
     );
}
