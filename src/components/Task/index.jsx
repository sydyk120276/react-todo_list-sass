import React from 'react'
import axios from 'axios'

import './task.scss'
import editSvg from '../../assets/img/edit.svg'
import AddTaskForm from './addTaskForm'



const Tasks = ({ list, onEditTitle, onAddTask }) => {

const editTitle = () => {
  const newTitle = window.prompt('Название списка', list.name)
  if (newTitle) {
    onEditTitle(list.id, newTitle)
    axios.patch(`http://localhost:3001/lists/${list.id}`, { name: newTitle })
      .catch(() => {
        alert('Не удалось обновить название списка')
      })
  }
}

    return (
      <div className="task">
        <h2 className="task__title">
          {list.name}
          <img onClick={editTitle} src={editSvg} alt="" />
        </h2>

        <div className="task__items">
          {list.tasks && !list.tasks.length && <h2>Задачи отсутсвуют</h2>}
          {list.tasks.map((item) => (
            <div key={item.id} className="task__items_row">
              <div className="checkbox">
                <input id={`task-${item.id}`} type="checkbox" />
                <label htmlFor={`task-${item.id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.87685428,15.4852814 L4.92710681,10.5355339 C4.53658252,10.1450096 3.90341754,10.1450096 3.51289325,10.5355339 C3.12236896,10.9260582 3.12236896,11.5592232 3.51289325,11.9497475 L9.1697475,17.6066017 C9.36500964,17.8018639 9.62093196,17.8994949 9.87685428,17.8994949 C10.1327766,17.8994949 10.3886989,17.8018639 10.5839611,17.6066017 L20.483456,7.70710678 C20.8739803,7.31658249 20.8739803,6.68341751 20.483456,6.29289322 C20.0929317,5.90236893 19.4597667,5.90236893 19.0692424,6.29289322 L9.87685428,15.4852814 Z"
                    />
                  </svg>
                </label>
              </div>
              <input readOnly value={item.text} />
            </div>
          ))}
          <AddTaskForm list={list} onAddTask={onAddTask} />
        </div>
      </div>
    );
}

export default Tasks






