import React, { useState } from 'react'
import axios from 'axios'



const AddTaskForm = ({ list, onAddTask }) => {

    const [visibleForm, setFormVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const toggleFormVisible = () => {
        setFormVisible(!visibleForm)
        setInputValue('');
    }

  const addTask = () => {
      const obj = {
        listId: list.id,
        text: inputValue,
        completed: false
      }
      setIsLoading(true);
      axios
        .post('http://localhost:3001/tasks', obj)
        .then(({ data }) => {
          onAddTask(list.id, data);
          toggleFormVisible();
        })
        .catch(e => {
          alert('Ошибка при добавлении задачи!');
        })
        .finally(() => {
          setIsLoading(false);
        });
  }


    return (
        <div className="task__form">
            {!visibleForm 
            ? <div className="task__form-new" onClick={toggleFormVisible} >
                <svg
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="12px"
                    height="12px"
                >
                    <path
                        fillRule="evenodd"
                        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                    />
                </svg>
                <span>Добавить задачи</span>
            </div> 
            : <div className="task__form-block" >
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                    className="field"
                    type="text"
                    placeholder="Текст задачи"
                    value={inputValue}
                />
                <button disabled={isLoading} className="button" onClick={addTask} >
                    {isLoading ? 'Добавление...': 'Добавить'}
                </button>
                <button className="button button--grey" onClick={toggleFormVisible}>
                    Отмена
                </button>
            </div>}
        </div>
    )
}

export default AddTaskForm
