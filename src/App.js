import React from 'react'

import List from './components/list'

function App() {
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

          name: "Все задачи" }
          ]}
        />
        <List
          items={[
            {
              color: 'green',
              name: "Покупки"
            },
            {
              color: 'blue',
              name: "Фронтент"
            },
            {
              color: 'pink',
              name: "Фильмы и сериалы"
            }
          ]}
        />

      </div>
      <div className="todo__task"></div>
    </div>
  );
}

export default App;
