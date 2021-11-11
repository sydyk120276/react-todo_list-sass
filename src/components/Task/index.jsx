import React from 'react'
import axios from 'axios'

import './task.scss'
import editSvg from '../../assets/img/edit.svg'
import AddTaskForm from './addTaskForm'
import Task from './tasks'



const Tasks = ({ list, onEditTitle, onAddTask, besSagolovki }) => {
  const editTitle = () => {
    const newTitle = window.prompt("Название списка", list.name);
    if (newTitle) {
      onEditTitle(list.id, newTitle);
      axios
        .patch(`http://localhost:3001/lists/${list.id}`, { name: newTitle })
        .catch(() => {
          alert("Не удалось обновить название списка");
        });
    }
  };

  return (
    <div className="task">
      <h2 style={{ color: list.color.hex }} className="task__title">
        {list.name}
        <img onClick={editTitle} src={editSvg} alt="" />
      </h2>

      <div className="task__items">
        {!besSagolovki && list.tasks && !list.tasks.length && (
          <h2>Задачи отсутсвуют</h2>
        )}
        {list.tasks && list.tasks.map((task) => (
         <Task {...task} />
        ))}
        <AddTaskForm list={list} onAddTask={onAddTask} />
      </div>
    </div>
  );
};

export default Tasks






