import { useState } from 'react';
import './App.css';
import InputText from './component/Input/InputText';
import TaskList from './component/TaskList/TaskList';

function App() {
     const [notStartedList, setNotStartedList] = useState([
          'Task1',
          'Task2',
          'Task3',
          'Task4',
          'Task5',
     ]);
     const addlist = (InputText) => {
          if (InputText !== '')
               setNotStartedList([...notStartedList, InputText]);
     };
     const [inProgressedList, setInProgressedList] = useState([
          'Task6',
          'Task7',
          'Task8',
     ]);
     const [completedList, setCompletedList] = useState(['Task9', 'Task10']);
     const handleDelete = (i, list) => {
          if (list === 'list1') {
               const newListTodo = [...notStartedList];
               newListTodo.splice(i, 1);
               setNotStartedList([...newListTodo]);
          } else if (list === 'list2') {
               const secListTodo = [...inProgressedList];
               secListTodo.splice(i, 1);
               setInProgressedList([...secListTodo]);
          } else if (list === 'list3') {
               const ThirdListTodo = [...completedList];
               ThirdListTodo.splice(i, 1);
               setCompletedList([...ThirdListTodo]);
          }
     };

     const onClickNext = (i, List) => {
          if (List === 'list1') {
               const deleteded = notStartedList.splice(i, 1);
               setNotStartedList([...notStartedList]);
               inProgressedList.push(deleteded[0]);
               setInProgressedList(inProgressedList);
          } else if (List === 'list2') {
               const move = inProgressedList.splice(i, 1);
               setInProgressedList([...inProgressedList]);
               completedList.push(move[0]);
               setCompletedList(completedList);
          }
     };
     const onClickPrev = (i, lisT) => {
          if (lisT === 'list3') {
               const deleteded = completedList.splice(i, 1);
               setCompletedList([...completedList]);
               inProgressedList.push(deleteded[0]);
               setInProgressedList(inProgressedList);
          } else if (lisT === 'list2') {
               const move = inProgressedList.splice(i, 1);
               setInProgressedList([...inProgressedList]);
               notStartedList.push(move[0]);
               setNotStartedList(notStartedList);
          }
     };

     return (
          <>
               {' '}
               <div className="main-container">
                    <div className="center-container">
                         <h1 className="heading">Todo List</h1>
                         <InputText addlist={addlist} />
                         <div className="list-box">
                              <TaskList
                                   heading={'Not Starteded'}
                                   id="list1"
                                   item={notStartedList}
                                   setItem={setNotStartedList}
                                   handleDelete={handleDelete}
                                   onClickNext={onClickNext}
                                   onClickPrev={onClickPrev}
                              />
                              <TaskList
                                   heading={'In Progressed'}
                                   id="list2"
                                   item={inProgressedList}
                                   setItem={setInProgressedList}
                                   handleDelete={handleDelete}
                                   onClickNext={onClickNext}
                                   onClickPrev={onClickPrev}
                              />
                              <TaskList
                                   heading={'Completed'}
                                   id="list3"
                                   item={completedList}
                                   setItem={setCompletedList}
                                   handleDelete={handleDelete}
                                   onClickNext={onClickNext}
                                   onClickPrev={onClickPrev}
                              />
                         </div>
                    </div>
               </div>
          </>
     );
}

export default App;
