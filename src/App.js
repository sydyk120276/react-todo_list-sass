import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { List, Task, ListButton } from './components'





function App() {
  const [lists, setLists] = useState(null)
  const [colors, setColors] = useState(null)

useEffect(() => {
  axios("http://localhost:3001/lists?_expand=color&_embed=tasks").then(({ data }) => {
    setLists(data)
  })
  axios("http://localhost:3001/colors").then(({ data }) => {
    setColors(data);
  })
}, [])

  const addList = (obj) => {
    const newList = [
      ...lists,
      obj
    ]
    setLists(newList)
  }

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[
            {
              icons: (
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18px"
                  height="18px"
                >
                  <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
                </svg>
              ),

              name: "Все задачи"
            }
          ]}
        />
        {lists ? <List items={lists} onRemove={(id) => {
          const newList = lists.filter(item => item.id !== id)
          setLists(newList);
        }} isRemovable /> : 'Загрузка...'}
        <ListButton onAdd={addList} colors={colors} />
      </div>
      <div className="todo__task">
        {lists && <Task list={lists[1]}/>}
      </div>
    </div>
  );
}

export default App;
